import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, subject, message, to } = body;

    // Validate required fields
    if (!email || !subject || !message || !to) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // For now, we'll just log the email data
    // In production, you would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer with SMTP

    console.log("New contact form submission:", {
      from: email,
      to: to,
      subject: subject,
      message: message,
      timestamp: new Date().toISOString(),
    });

    // You can also store this in a database or send to your preferred email service
    // Example with SendGrid (uncomment and install @sendgrid/mail):
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: to,
      from: 'noreply@antcoders.dev', // Use your verified sender
      subject: subject,
      text: message,
      html: `
        <h3>New Project Submission Inquiry</h3>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
      `,
    };
    
    await sgMail.send(msg);
    */

    return NextResponse.json(
      {
        success: true,
        message: "Email submitted successfully",
        data: { email, to, subject },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Contact API endpoint is working" }, { status: 200 });
}
