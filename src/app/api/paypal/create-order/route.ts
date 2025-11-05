import { NextRequest, NextResponse } from "next/server";

const PAYPAL_OAUTH_API = "https://api-m.sandbox.paypal.com/v1/oauth2/token";
const PAYPAL_ORDERS_API = "https://api-m.sandbox.paypal.com/v2/checkout/orders";

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
    const { amount, currency } = (await req.json()) as {
      amount?: string;
      currency?: string;
    };
    const total = amount || "50.00";
    const curr = currency || "AUD";

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
