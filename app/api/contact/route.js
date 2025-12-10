import nodemailer from "nodemailer";
  export const runtime = "nodejs";
export async function POST(req) {
  try {
  

    const body = await req.json();
    const { name, email, contactNumber, service, message } = body;

    // Check required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, Email & Message are required!" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose email
    const mailOptions = {
      from: `"Website Enquiry" <${process.env.SMTP_USER}>`,
      to: " sales@experts.net.in", // 👉 Your email (where you want to receive messages)
      subject: "New Contact Form Submission",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${contactNumber}</p>
        <p><strong>Service Interested:</strong> ${service}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: "Your enquiry has been submitted successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Email Send Error:", err);
    return Response.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
