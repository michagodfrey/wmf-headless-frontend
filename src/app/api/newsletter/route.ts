import crypto from "crypto";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const result = newsletterSchema.safeParse(json);

    if (!result.success) {
      return new Response(JSON.stringify({ error: "Invalid email." }), {
        status: 400,
      });
    }

    const { email } = result.data;

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const server = process.env.MAILCHIMP_SERVER_PREFIX; // e.g. "us21"

    if (!apiKey || !audienceId || !server) {
      return new Response(JSON.stringify({ error: "Server not configured." }), {
        status: 500,
      });
    }

    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    const url = `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

    // Use double opt-in ("pending") or set to "subscribed" to auto-subscribe
    const payload = {
      email_address: email,
      status_if_new: "pending",
      status: "pending",
      merge_fields: {},
      // tags: ["Website"], // optional
    };

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
          "base64"
        )}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return new Response(
        JSON.stringify({ error: err.detail || "Subscription failed." }),
        {
          status: res.status,
        }
      );
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Unexpected error." }), {
      status: 500,
    });
  }
}
