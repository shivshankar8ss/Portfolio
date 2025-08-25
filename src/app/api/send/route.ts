import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { sender, subject, text } = await req.json();

    if (!sender || !subject || !text) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Transporter config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ✅ Email to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: subject || "New message via Portfolio",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333;">
          <h2 style="color: #1a73e8;">New Contact Form Message</h2>
          <p><strong>Sender:</strong> ${sender}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="border-left: 4px solid #1a73e8; padding-left: 10px; color: #555; margin-bottom: 20px;">
            ${text}
          </div>
          <p style="color: #777; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    // ✅ Acknowledgment email to SENDER
   await transporter.sendMail({
     from: `"Shivshankar Kumar" <${process.env.GMAIL_USER}>`,
     to: sender,
     subject: "Thank you for contacting me!",
     html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#f9f9f9; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden;">
      
      <!-- Header -->
      <div style="background-color: #1a73e8; color: #fff; padding: 20px; text-align: center;">
        <h1 style="margin:0; font-size: 24px;">Hello ${
          sender.split("@")[0]
        } 👋</h1>
      </div>
      
      <!-- Body -->
      <div style="padding: 20px; color: #333;">
        <p>Thank you for reaching out! I have received your message:</p>
        <div style="border-left: 4px solid #1a73e8; padding: 10px 15px; background-color: #f1f5fb; border-radius: 6px; color: #555; margin: 15px 0;">
          ${text}
        </div>
        <p>I’ll get back to you within <strong>24 hours</strong>.</p>
        <p style="margin-top: 30px;">Best regards,<br/><strong>Shivshankar Kumar</strong></p>
      </div>

      <!-- Footer -->
      <div style="background-color:#f0f0f0; text-align:center; padding: 15px; font-size:12px; color:#777;">
        <p>This is an automated acknowledgment email. Please do not reply.</p>
      </div>
    </div>
  </div>
  `,
   });

    return NextResponse.json(
      { message: "Email sent successfully 🚀" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { message: "Email sending failed", error: error.message },
      { status: 500 }
    );
  }
}
