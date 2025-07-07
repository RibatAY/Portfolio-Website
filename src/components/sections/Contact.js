import React, { useState } from 'react';
import ShinyText from '../Shinytext';
import RevealItem from '../RevealItem';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !subject || !message || isLoading) {
      setStatus('error');
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, subject, message }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <RevealItem>
        <ShinyText text="Contact Me" speed={2} />
      </RevealItem>

      <RevealItem delay={0.2}>
        <p className="subtext">Let's get in touch! Send me a message</p>
      </RevealItem>

      <RevealItem delay={0.4}>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-block social-buttons">
              <a href="https://www.linkedin.com/in/ribathullah-ahmad-yasin-54417a28b" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/RibatAY" target="_blank" rel="noopener noreferrer" className="social-btn github">
                <FaGithub /> GitHub
              </a>
            </div>

            <div className="info-block">
              <span>📍 Location</span>
              <p>Indonesia, Jawa Barat</p>
            </div>

            <div className="info-block">
              <span>✉️ Email</span>
              <p>raikser369@gmail.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit" disabled={isLoading}>
              {isLoading ? '⏳ Sending...' : '📩 Send Message'}
            </button>

            {status === 'success' && (
              <p className="form-status success">✅ Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="form-status error">❌ Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </RevealItem>
    </section>
  );
}

export default Contact;
