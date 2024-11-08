import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import github from '../assets/img/github.png';
import linkedin from '../assets/img/linkedin.png';
import instagram from '../assets/img/instagram.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const navigate = useNavigate();

  const handleLinkClick = (link, anchor) => {
    setActiveLink(link);

    if (window.location.pathname !== '/') {
      navigate('/');
    }

    setTimeout(() => {
      const section = document.querySelector(anchor);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={activeLink === 'home' ? 'active' : ''}
                onClick={() => handleLinkClick('home', '#home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeLink === 'about' ? 'active' : ''}
                onClick={() => handleLinkClick('about', '#about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={activeLink === 'portfolio' ? 'active' : ''}
                onClick={() => handleLinkClick('portfolio', '#portfolio')}
              >
                Portfolio
              </a>
            </li>
            <li>
              <Link
                to="/all-projects"
                className={activeLink === 'all-projects' ? 'active' : ''}
                onClick={() => setActiveLink('all-projects')}
              >
                All Projects
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === 'contact' ? 'active' : ''}
                onClick={() => handleLinkClick('contact', '#contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="https://github.com/ZhiXin9" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/zhi-xin-cheng-3b9b85264/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </nav>
  );
};
