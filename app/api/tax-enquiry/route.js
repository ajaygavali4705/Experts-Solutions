import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

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
      from: `"Tax Enquiry" <${process.env.SMTP_USER}>`,
      to: "ajay@experts.net.in",
      subject: "New Tax Enquiry",
      html: `
        <h2>New Tax Enquiry</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.contactNumber}</p>
        <p><strong>Company:</strong> ${body.companyname}</p>
        <p><strong>Location:</strong> ${body.location}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return Response.json({ message: "Tax enquiry submitted successfully!" });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
