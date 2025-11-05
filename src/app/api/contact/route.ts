import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  inquiryType?: string;
  recipientKey?: string;
  formData?: Record<string, string>;
  meta?: Record<string, string>;
};

const RECIPIENTS: Record<string, string | undefined> = {
  // Map by inquiryType or custom keys
  volunteer: process.env.CONTACT_TO_VOLUNTEERS,
  peerCounselor: process.env.CONTACT_TO_PEER_COUNSELOR,
  partner: process.env.CONTACT_TO_PARTNERSHIPS,
  fundraise: process.env.CONTACT_TO_FUNDRAISE,
  awareness: process.env.CONTACT_TO_AWARENESS,
  board: process.env.CONTACT_TO_BOARD,
  workshops: process.env.CONTACT_TO_WORKSHOPS, // for Workshops page
  general: process.env.CONTACT_TO_DEFAULT, // contact page default
};

function recipientFor({
  inquiryType,
  recipientKey,
}: {
  inquiryType?: string;
  recipientKey?: string;
}) {
  return (
    (recipientKey && RECIPIENTS[recipientKey]) ||
    (inquiryType && RECIPIENTS[inquiryType]) ||
    process.env.CONTACT_TO_DEFAULT
  );
}

export async function POST(req: Request) {
  try {
    const {
      inquiryType,
      recipientKey,
      formData = {},
      meta = {},
    } = (await req.json()) as Payload;

    const to = recipientFor({ inquiryType, recipientKey });
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

    const subject = `[WMF Contact] ${
      inquiryType || recipientKey || "General Inquiry"
    }`;
    const lines = [
      `Inquiry Type: ${inquiryType || "(none)"}`,
      `Recipient Key: ${recipientKey || "(none)"}`,
      `Source: ${meta.source || "(unknown)"}`,
      "",
      "Form Data:",
      ...Object.entries(formData).map(([k, v]) => `- ${k}: ${v}`),
      "",
      "— Sent automatically from the WMF website",
    ];
    const text = lines.join("\n");

    // Prefer Mailgun API if configured (works with sandbox domains)
    const mgApiKey = process.env.MAILGUN_API_KEY;
    const mgDomain = process.env.MAILGUN_DOMAIN; // e.g. sandbox....mailgun.org or mg.yourdomain.com
    const mgBaseUrl = process.env.MAILGUN_BASE_URL || "https://api.mailgun.net";

    if (mgApiKey && mgDomain) {
      const url = `${mgBaseUrl}/v3/${mgDomain}/messages`;
      const form = new URLSearchParams();

      const defaultFromAddress = `postmaster@${mgDomain}`;
      const from =
        process.env.CONTACT_FROM || `WMF Website <${defaultFromAddress}>`;

      form.append("from", from);
      form.append("to", to);
      form.append("subject", subject);
      form.append("text", text);
      if (replyTo) form.append("h:Reply-To", replyTo);

      const auth = `Basic ${Buffer.from(`api:${mgApiKey}`).toString("base64")}`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: auth,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: form,
      });

      if (!res.ok) {
        const errJson = (await res.json().catch(() => ({}))) as {
          message?: string;
        };
        return new Response(
          JSON.stringify({ error: errJson?.message || "Mailgun send failed." }),
          { status: 502 }
        );
      }

      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Fallback to SMTP if Mailgun API not configured
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!host || !user || !pass) {
      return new Response(
        JSON.stringify({ error: "Email server not configured." }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const from = process.env.CONTACT_FROM || user;
    await transporter.sendMail({ to, from, replyTo, subject, text });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to send." }), {
      status: 500,
    });
  }
}
