import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY || 'DUMMY';
const resend = new Resend(RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  if (RESEND_API_KEY === 'DUMMY') {
    console.log('✅ Dummy mode active. Email not actually sent.');
    return res.status(200).json({ message: '✅ Dummy: Email not sent but marked success.' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Ribathullah <hello@ribathullah.site>',
      to: ['raikser369@gmail.com'],
      subject: `[PORTFOLIO] ${subject}`,
      text: `From: ${email}\n\n${message}`,
      reply_to: 'raikser369@gmail.com',
    });

    console.log(data);
    return res.status(200).json({ message: '✅ Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: '❌ Failed to send email.' });
  }
}
