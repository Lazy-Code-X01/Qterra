// To activate email sending:
// 1. Create account at resend.com
// 2. Add and verify qterragroup.com domain
// 3. Generate API key
// 4. Add RESEND_API_KEY to Vercel environment variables
// 5. Redeploy

import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY in environment variables. Email sending is disabled.");
      return Response.json({ error: "Email sending is temporarily unavailable" }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { fullName, organization, email, phone, service, message } = body;

    if (!fullName || !organization || !email || !service || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send notification email to QTerra
    await resend.emails.send({
      from: "QTerra Website <noreply@qterragroup.com>",
      to: ["info@qterragroup.com"],
      subject: `New Enquiry: ${service} — ${fullName}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to enquirer
    await resend.emails.send({
      from: "QTerra <noreply@qterragroup.com>",
      to: [email],
      subject: "We received your message — QTerra",
      html: `
        <h2>Thank you for reaching out, ${fullName}.</h2>
        <p>We have received your enquiry regarding <strong>${service}</strong> and a member of the QTerra team will be in touch within 24-48 hours.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>The QTerra Team</strong></p>
        <p>www.qterragroup.com</p>
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
