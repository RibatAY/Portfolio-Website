import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL, // kirim ke emailmu sendiri
      subject: `[PORTFOLIO] ${subject}`,
      text: `From: ${email}\n\n${message}`,
    });

    res.status(200).json({ message: '✅ Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '❌ Email failed to send.' });
  }
}
