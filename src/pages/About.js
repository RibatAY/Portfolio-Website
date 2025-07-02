import React from 'react';
import '../styles/About.css';
import ScrollVelocity from '../components/ScrollVelocity.js';
import GlareHover from '../components/GlareHover.js';
import RevealItem from '../components/RevealItem';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-scroll-header">
        <ScrollVelocity
          texts={['Introductory Profile', 'Scroll Down']}
          velocity={30}
          className="custom-scroll-text"
        />
      </div>

      <RevealItem>
        <div className="about-container">
          <div className="about-top">
            <div className="about-image">
              <GlareHover
                width="220px"
                height="auto"
                background="transparent"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={250}
                transitionDuration={800}
                playOnce={false}
                borderColor="transparent"
              >
                <img
                  src="/images/pas-foto.jpg"
                  alt="My Profile"
                  loading="lazy"
                  style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                />
              </GlareHover>
            </div>
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I am an Information Technology student with a strong interest in web development and digital systems.
                I aim to grow as a developer by building real-world solutions and contributing to innovative projects.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>President University | Semester 5</h3>
                <p>Focusing on learning cybersecurity</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>President University | Semester 4</h3>
                <p>Working on a 360° campus web project and app development</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>President University | Semester 3</h3>
                <p>Social Project: Donating and organizing events at an Orphanage</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>President University | Semester 2</h3>
                <p>Focusing on Backend and Database development</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>President University | Semester 1</h3>
                <p>Working on Java and Frontend web projects</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>SMAN 1 SETU</h3>
                <p>Active in Information, Communication, and Technology (ICT) Extracurricular</p>
              </div>
            </div>
          </div>
        </div>
      </RevealItem>
    </section>
  );
}

export default About;
