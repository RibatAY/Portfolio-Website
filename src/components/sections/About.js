import React from 'react';
import ScrollVelocity from '../ScrollVelocity.js';
import GlareHover from '../GlareHover.js';
import RevealItem from '../RevealItem.js';

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
                <p>I am currently focusing on cybersecurity, actively working on Capture The Flag (CTF) challenges, malware analysis, and digital forensic investigations using Autopsy and other related tools.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>President University | Semester 4</h3>
                <p>In this semester, learning was centered around hands-on projects such as creating 3D models and developing software solutions. Additionally, explored Ubuntu more deeply and gained hands-on experience with MariaDB and Nmap.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>President University | Semester 3</h3>
                <p>This short semester is dedicated to a social project, where our team is responsible for donating and organizing activities at a local orphanage. The activities include playing with the children, teaching basic skills, and creating a fun, educational environment to support their growth and well-being.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>President University | Semester 2</h3>
                <p>This semester included multiple development projects, such as creating a website with CRUD (Create, Read, Update, Delete) functionality and building an object-oriented application using NetBeans. It also involved learning backend development, focusing on server-side logic and data management.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>President University | Semester 1</h3>
                <p>This semester focused on working with Java and frontend web development. The Java project involved transforming Java code into a functional application, while the frontend project centered on building an interactive website interface.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>SMAN 1 SETU</h3>
                <p>Active in the Information, Communication, and Technology (ICT) extracurricular, focusing on design-related activities such as photo editing and video creation.</p>
              </div>
            </div>
          </div>
        </div>
      </RevealItem>
    </section>
  );
}

export default About;
