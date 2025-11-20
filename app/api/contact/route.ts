import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import DOMPurify from "isomorphic-dompurify";

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, companyName, message } = body;

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedFullName = DOMPurify.sanitize(fullName);
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedCompanyName = DOMPurify.sanitize(companyName || "");
    const sanitizedMessage = DOMPurify.sanitize(message);

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "frtechltd@gmail.com",
      subject: `New Contact Form Submission from ${sanitizedFullName}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${sanitizedFullName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Company:</strong> ${sanitizedCompanyName}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS(req: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
