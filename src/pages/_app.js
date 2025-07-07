import '../styles/globals.css';

import '../styles/sections/Home.css';
import '../styles/sections/About.css';
import '../styles/sections/Skills.css';
import '../styles/sections/Portofolio.css';
import '../styles/sections/Contact.css';

import '../styles/components/Navbar.css';
import '../styles/components/Modal.css';
import '../styles/components/ScrollVelocity.css';
import '../styles/components/ShinyText.css';
import '../styles/components/GlareHover.css';
import '../styles/components/GradientText.css';

import Navbar from '../components/navbar';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCV(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      {showCV && (
        <a href="/images/Ribathullah Ahmad Yasin-CV.pdf" download className="cv-float">
          Get My CV
        </a>
      )}

      <Component {...pageProps} />
    </>
  );
}
