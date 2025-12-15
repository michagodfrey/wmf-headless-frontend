import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Input validation schema
const contactSchema = z.object({
  inquiryType: z.string().optional(),
  recipientKey: z.string().optional(),
  formData: z.record(z.string(), z.string().max(1000)).optional(), // Limit field length
  meta: z.object({
    source: z.string().optional(),
  }).optional().default({}),
});

// Token cache to avoid unnecessary token requests
let tokenCache: { token: string; expiresAt: number } | null = null;

function recipientFor(): string | undefined {
  // All emails go to the default email address
  return process.env.CONTACT_TO_DEFAULT;
}

/**
 * Get OAuth2 access token using client credentials flow
 * Tokens are cached to avoid unnecessary requests
 */
async function getAccessToken(): Promise<string> {
  // Check if we have a valid cached token
  if (tokenCache && tokenCache.expiresAt > Date.now() + 60000) {
    // Return cached token if it expires in more than 1 minute
    return tokenCache.token;
  }

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
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(
      `Failed to get access token: ${response.status} ${errorText}`
    );
  }

  const data = (await response.json()) as {
    access_token: string;
    expires_in: number;
  };

  // Cache the token (expires_in is in seconds, convert to milliseconds)
  tokenCache = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 300) * 1000, // Subtract 5 minutes for safety
  };

  return data.access_token;
}

/**
 * Send email via Microsoft Graph API
 */
async function sendEmailViaGraph(
  fromEmail: string,
  toEmail: string,
  subject: string,
  body: string,
  replyTo?: string
): Promise<void> {
  const accessToken = await getAccessToken();

  const graphUrl = `https://graph.microsoft.com/v1.0/users/${fromEmail}/sendMail`;

  const message: {
    message: {
      subject: string;
      body: { contentType: string; content: string };
      toRecipients: Array<{ emailAddress: { address: string } }>;
      replyTo?: Array<{ emailAddress: { address: string } }>;
    };
  } = {
    message: {
      subject,
      body: {
        contentType: "Text",
        content: body,
      },
      toRecipients: [
        {
          emailAddress: {
            address: toEmail,
          },
        },
      ],
    },
  };

  if (replyTo) {
    message.message.replyTo = [
      {
        emailAddress: {
          address: replyTo,
        },
      },
    ];
  }

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
    let errorMessage = `Graph API send failed: ${response.status}`;

    try {
      const errorJson = JSON.parse(errorText) as {
        error?: { message?: string; code?: string };
      };
      if (errorJson.error?.message) {
        errorMessage = errorJson.error.message;
      }
    } catch {
      // If parsing fails, use the raw error text if available
      if (errorText) {
        errorMessage = `${errorMessage} - ${errorText}`;
      }
    }

    throw new Error(errorMessage);
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const result = contactSchema.safeParse(json);

    if (!result.success) {
      return new Response(JSON.stringify({ error: "Invalid input data." }), {
        status: 400,
      });
    }

    const {
      inquiryType,
      formData = {},
      meta = { source: "(unknown)" },
    } = result.data;

    const to = recipientFor();
    if (!to) {
      return new Response(
        JSON.stringify({ error: "No recipient configured." }),
        { status: 500 }
      );
    }

    const replyTo =
      formData.email && /^\S+@\S+\.\S+$/.test(formData.email)
        ? formData.email
        : undefined;

    const subject = `[WMF Contact] ${inquiryType || "General Inquiry"}`;
    const lines = [
      `Inquiry Type: ${inquiryType || "(none)"}`,
      `Source: ${meta.source || "(unknown)"}`,
      "",
      "Form Data:",
      ...Object.entries(formData).map(([k, v]) => `- ${k}: ${v}`),
      "",
      "— Sent automatically from the WMF website",
    ];
    const text = lines.join("\n");

    // Get the from email address
    const fromEmail = process.env.CONTACT_FROM || process.env.MS365_FROM_EMAIL;
    if (!fromEmail) {
      return new Response(
        JSON.stringify({ error: "From email not configured." }),
        { status: 500 }
      );
    }

    // Send email via Microsoft Graph API
    await sendEmailViaGraph(fromEmail, to, subject, text, replyTo);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send.";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
