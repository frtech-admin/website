import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import DOMPurify from "isomorphic-dompurify";

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';


export async function POST(req: Request) {
  try {
    console.log("POST request started");
    const body = await req.json();
    console.log("Body parsed:", body);

    const { fullName, email, companyName, message } = body;

    // Basic validation
    if (!fullName || !email || !message) {
      console.error("Validation failed: Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Validation failed: Invalid email format");
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check Environment Variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing Environment Variables:", {
        hasUser: !!process.env.GMAIL_USER,
        hasPassword: !!process.env.GMAIL_APP_PASSWORD
      });
      return NextResponse.json(
        { error: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    // Sanitize inputs
    console.log("Sanitizing inputs");
    const sanitizedFullName = DOMPurify.sanitize(fullName);
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedCompanyName = DOMPurify.sanitize(companyName || "");
    const sanitizedMessage = DOMPurify.sanitize(message);
    console.log("Inputs sanitized");

    // Configure transporter
    console.log("Configuring transporter");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("Transporter verified successfully");
    } catch (verifyError) {
      console.error("Transporter verification failed:", verifyError);
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "frtechltd@gmail.com",
      subject: `New Contact Form Submission from ${sanitizedFullName}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${sanitizedFullName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Company:</strong> ${sanitizedCompanyName || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
      `,
      replyTo: sanitizedEmail,
    };

    // Send email
    console.log("Sending email");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST handler:", error);
    
    // Provide more specific error information
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error details:", errorMessage);
    
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

// Simple GET handler to verify the route is active
export async function GET() {
  return NextResponse.json({ message: "Contact API is working" });
}
