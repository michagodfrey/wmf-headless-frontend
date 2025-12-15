import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const PAYPAL_API_URL =
  process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";
const PAYPAL_OAUTH_API = `${PAYPAL_API_URL}/v1/oauth2/token`;
const PAYPAL_ORDERS_API = `${PAYPAL_API_URL}/v2/checkout/orders`;

const captureSchema = z.object({
  orderID: z.string().min(1),
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

/**
 * Minimal Microsoft Graph mail sender (mirrors contact route setup).
 */
async function getGraphAccessToken(): Promise<string> {
  const tenantId = process.env.MS365_TENANT_ID;
  const clientId = process.env.MS365_CLIENT_ID;
  const clientSecret = process.env.MS365_CLIENT_SECRET;
  if (!tenantId || !clientId || !clientSecret) {
    throw new Error("Microsoft 365 credentials not configured.");
  }
  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);
  params.append("scope", "https://graph.microsoft.com/.default");
  params.append("grant_type", "client_credentials");
  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(
      `Failed to get access token: ${response.status} ${errorText}`
    );
  }
  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

async function sendEmailViaGraphSimple(
  fromEmail: string,
  toEmail: string,
  subject: string,
  body: string
): Promise<void> {
  const accessToken = await getGraphAccessToken();
  const graphUrl = `https://graph.microsoft.com/v1.0/users/${fromEmail}/sendMail`;
  const message = {
    message: {
      subject,
      body: { contentType: "Text", content: body },
      toRecipients: [{ emailAddress: { address: toEmail } }],
    },
  };
  const response = await fetch(graphUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(`Graph API send failed: ${response.status} ${errorText}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const result = captureSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        { error: "Missing or invalid orderID" },
        { status: 400 }
      );
    }

    const { orderID } = result.data;

    const accessToken = await generateAccessToken();

    const captureRes = await fetch(`${PAYPAL_ORDERS_API}/${orderID}/capture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    const captureData = await captureRes.json();
    if (!captureRes.ok) {
      return NextResponse.json(
        { error: captureData?.message || "Failed to capture order" },
        { status: 500 }
      );
    }
    // Best-effort donor receipt email (does not affect response)
    try {
      const payerEmail: string | undefined =
        captureData?.payer?.email_address ||
        captureData?.payment_source?.paypal?.email_address;
      const purchaseUnit = Array.isArray(captureData?.purchase_units)
        ? captureData.purchase_units[0]
        : undefined;
      const firstCapture =
        purchaseUnit?.payments?.captures &&
        Array.isArray(purchaseUnit.payments.captures)
          ? purchaseUnit.payments.captures[0]
          : undefined;
      const amountValue: string | undefined = firstCapture?.amount?.value;
      const currencyCode: string | undefined =
        firstCapture?.amount?.currency_code;
      const captureId: string | undefined = firstCapture?.id;

      const fromEmail =
        process.env.CONTACT_FROM || process.env.MS365_FROM_EMAIL;
      if (payerEmail && fromEmail && amountValue && currencyCode) {
        const subject =
          "Thank you for your donation to Women's Mentoring Foundation";
        const lines = [
          "Dear donor,",
          "",
          `Thank you for your donation of ${currencyCode} ${amountValue}.`,
          captureId ? `Payment reference: ${captureId}` : undefined,
          "",
          "This email serves as a receipt for your donation.",
          "",
          "Warm regards,",
          "Women's Mentoring Foundation",
          "https://womensmentoringfoundation.org.au",
        ].filter(Boolean) as string[];
        const body = lines.join("\n");
        await sendEmailViaGraphSimple(fromEmail, payerEmail, subject, body);
      }
    } catch {
      // Intentionally ignore email errors to not impact donation flow
    }

    return NextResponse.json(captureData);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
