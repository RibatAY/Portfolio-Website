import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portofolio from './pages/Portofolio';
import Contact from './pages/Contact';

function App() {
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
        <a href="/image/CV_Template.pdf" download className="cv-float">Get My CV</a>
      )}

      <div className="scroll-container">
        <Home />
        <About />
        <Skills />
        <Portofolio />
        <Contact />
      </div>
    </>
  );
}

export default App;
