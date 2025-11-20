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
    const { fullName, email, companyName, message } = body;
    console.log("Body parsed");

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check Env Vars
<<<<<<< HEAD
    // if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    //   console.error("Missing Environment Variables");
    //   return NextResponse.json(
    //     { error: "Server configuration error" },
    //     { status: 500 }
    //   );
    // }
=======
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing Environment Variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }
>>>>>>> 538c76a783c497895258b7db3fdeca047e2830e0

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
        user: "test@gmail.com", // HARDCODED FOR TESTING
        pass: "testpassword",   // HARDCODED FOR TESTING
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
    console.log("Sending email");
    await transporter.sendMail(mailOptions);
    console.log("Email sent");

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

// Simple GET handler to verify the route is active
export async function GET() {
  return NextResponse.json({ message: "Contact API is working" });
}
