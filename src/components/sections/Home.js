import React from 'react';
import { Link } from 'react-scroll';
import RevealItem from '../RevealItem.js';

function Home() {
  return (
    <section id="home" className="cyber-section">
      <div className="cyber-grid">
        <div className="cyber-left">
          <RevealItem>
            <h1 className="cyber-name-solid">Ribathullah Ahmad</h1>
          </RevealItem>
          <RevealItem delay={0.2}>
            <h1 className="cyber-name-outline">Yasin</h1>
          </RevealItem>
        </div>

        <RevealItem delay={0.4} className="cyber-center">
          <img src="/images/pas-foto-NB.png" alt="Ribathullah Ahmad Yasin" />
        </RevealItem>

        <div className="cyber-right">
          <RevealItem delay={0.6}>
            <p className="cyber-profession">
              Web Developer<br />IT Student
            </p>
          </RevealItem>

          <RevealItem delay={0.8}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={100}
              className="cyber-button"
            >
              Contact Me
            </Link>
          </RevealItem>
        </div>
      </div>
    </section>
  );
}

export default Home;
