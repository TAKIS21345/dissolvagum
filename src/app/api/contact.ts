import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json() as { name: string; email: string; subject: string; message: string };
    const { name, email, subject, message } = body;
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    await transporter.sendMail({
      from: `team@dissolvagum.com`,
      to: 'team@dissolvagum.com',
      replyTo: `${name} <${email}>`,
      subject: `[Contact Form] ${subject}`,
      html: `<h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
    });
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    console.error('Contact form error:', error, error?.response);
    return new Response(JSON.stringify({ error: 'Failed to send message. Please try again later.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
