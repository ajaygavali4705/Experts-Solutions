import nodemailer from "nodemailer";
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      contactNumber,
      companyname,
      location,
      service,
      message,
    } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, Email & Message are required!" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.SMTP_USER}>`,
      to: "sales@experts.net.in",
      subject: "New Product / Software Enquiry",
      html: `
        <h2>New Product Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${contactNumber}</p>
        <p><strong>Company:</strong> ${companyname}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Service Interested:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return Response.json(
      { message: "Product enquiry submitted successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
