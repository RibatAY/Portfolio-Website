import React, { useState } from 'react';
import '../styles/Skills.css';
import skillsData from '../data/skills';
import ShinyText from '../components/Shinytext.js';
import RevealItem from '../components/RevealItem';

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaJava,
  FaGithub, FaDocker, FaCode,
} from 'react-icons/fa';
import {
  SiMysql, SiFigma, SiCanva, SiBurpsuite, SiBlender,
} from 'react-icons/si';

function Skills() {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(10);

  const filteredSkills = filter === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === filter);

  const sortedSkills = filteredSkills.sort((a, b) => b.level - a.level);

  const visibleSkills = sortedSkills.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(filteredSkills.length);
  };

  const handleFilter = (category) => {
    setFilter(category);
    setVisibleCount(10);
  };

  const categories = ['All', ...new Set(skillsData.map(skill => skill.category))];

  const iconMap = {
    HTML: <FaHtml5 color="#E34F26" size={40} />,
    CSS: <FaCss3Alt color="#1572B6" size={40} />,
    JavaScript: <FaJs color="#F7DF1E" size={40} />,
    "React.js": <FaReact color="#61DAFB" size={40} />,
    "Node.js": <FaNodeJs color="#68A063" size={40} />,
    PHP: <FaPhp color="#8892BF" size={40} />,
    Java: <FaJava color="#007396" size={40} />,
    MySQL: <SiMysql color="#4479A1" size={40} />,
    Figma: <SiFigma color="#F24E1E" size={40} />,
    Canva: <SiCanva color="#00C4CC" size={40} />,
    Netbean: <FaCode color="#1B6AC6" size={40} />,
    Github: <FaGithub color="#181717" size={40} />,
    Docker: <FaDocker color="#2496ED" size={40} />,
    Burpsuit: <SiBurpsuite color="#FF6F00" size={40} />,
    Blender: <SiBlender color="#F5792A" size={40} />,
  };

  return (
    <section id="skills" className="skills-section">
      <RevealItem>
        <ShinyText text="My Skills" speed={2} />
      </RevealItem>

      <RevealItem delay={0.2}>
        <div className="filter-buttons">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleFilter(cat)}
              className={filter === cat ? 'active' : ''}
            >
              {cat}
            </button>
          ))}
        </div>
      </RevealItem>

      <div className="skills-grid">
        {visibleSkills.map((skill, index) => (
          <RevealItem delay={0.3 + index * 0.05} key={index}>
            <div className="skill-card">
              {iconMap[skill.name] && (
                <div className="skill-icon">
                  {iconMap[skill.name]}
                </div>
              )}
              <p>{skill.name}</p>
              <div className="skill-level">
                <div
                  className="skill-level-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </RevealItem>
        ))}
      </div>

      {visibleCount < filteredSkills.length && (
        <RevealItem delay={0.5}>
          <div className="load-more">
            <button onClick={handleLoadMore}>Load More</button>
          </div>
        </RevealItem>
      )}
    </section>
  );
}

export default Skills;
