import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content text-center">
        <p className="footer-text">Made with 💻 by Rutuja Ainapure</p>
        <div className="footer-icons">
          <a href="https://github.com/coderrutuja" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/rutuja-ainapure" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:rutujaainapure7@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-bottom">© {new Date().getFullYear()} Rutuja Ainapure. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
