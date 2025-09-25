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

    await transporter.sendMail({
      to,
      from,
      replyTo,
      subject,
      text,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to send." }), {
      status: 500,
    });
  }
}
