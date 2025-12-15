import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const PAYPAL_API_URL = process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";
const PAYPAL_OAUTH_API = `${PAYPAL_API_URL}/v1/oauth2/token`;
const PAYPAL_ORDERS_API = `${PAYPAL_API_URL}/v2/checkout/orders`;

// Validation schema
const createOrderSchema = z.object({
  amount: z.string().optional().refine((val) => !val || !isNaN(parseFloat(val)), {
    message: "Amount must be a valid number",
  }),
  currency: z.string().length(3).optional(),
});

async function generateAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error("Missing PayPal client id/secret env vars");
  }
  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );
  const res = await fetch(PAYPAL_OAUTH_API, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal OAuth failed: ${text}`);
  }
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const result = createOrderSchema.safeParse(json);

    if (!result.success) {
       return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { amount, currency } = result.data;
    const total = amount || "50.00";
    const curr = currency || "AUD";

    // Enforce minimum donation amount to prevent card testing
    if (parseFloat(total) < 1.0) {
      return NextResponse.json(
        { error: "Minimum donation amount is $1.00" },
        { status: 400 }
      );
    }

    const accessToken = await generateAccessToken();

    const orderRes = await fetch(PAYPAL_ORDERS_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: { currency_code: curr, value: total },
            description: "Donation to Women's Mentoring Foundation",
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
          user_action: "PAY_NOW",
          brand_name: "Women's Mentoring Foundation",
        },
      }),
    });

    const orderData = await orderRes.json();
    if (!orderRes.ok) {
      return NextResponse.json(
        { error: orderData?.message || "Failed to create order" },
        { status: 500 }
      );
    }

    return NextResponse.json({ id: orderData.id });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
