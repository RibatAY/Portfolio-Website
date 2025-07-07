import React, { useState } from 'react';
import portfolioData from '../../data/portfolio.js';
import ShinyText from '../Shinytext.js';
import Modal from '../Modal.js';
import RevealItem from '../RevealItem.js';

function Portofolio() {
  const [activeId, setActiveId] = useState(null);

  const openModal = (id) => setActiveId(id);
  const closeModal = () => setActiveId(null);

  const activeItem = portfolioData.find(item => item.id === activeId);

  return (
    <section id="portofolio" className="portfolio-section">
      <RevealItem>
        <div className="section-container">
          <ShinyText text="My Projects" speed={2} />
          <div className="portfolio-grid">
            {portfolioData.map((item) => (
              <div className="portfolio-card" key={item.id}>
                <img src={item.images?.[0] || '/fallback.jpg'} alt={item.title} loading="lazy" />
                <h3>{item.title}</h3>
                <button onClick={() => openModal(item.id)}>View More</button>
              </div>
            ))}
          </div>
        </div>
      </RevealItem>

      {activeItem && (
        <Modal onClose={closeModal}>
          <h3>{activeItem.title}</h3>
          <div className="modal-images">
            {activeItem.images.map((img, i) => (
              <img key={i} src={img} alt={`Project ${i}`} />
            ))}
          </div>
          <p>{activeItem.descriptionFull}</p>
          <a href={activeItem.reportLink} target="_blank" rel="noreferrer">
            <button className="see-report">See Report</button>
          </a>
        </Modal>
      )}
    </section>
  );
}

export default Portofolio;
