import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={0}
            spy={true}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={10}
            spy={true}
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={20}
            spy={true}
            activeClass="active"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="portofolio"
            smooth={true}
            duration={500}
            offset={30}
            spy={true}
            activeClass="active"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={90}
            spy={true}
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
