import React from 'react';
import { Github,  Mail,  Linkedin, Instagram, Twitter, ExternalLink } from 'lucide-react';
import './Footer.css';
import logo from './assets/nexus.ico'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <img src={logo} alt="" />
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#domains">Domains</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <Mail size={16} />
                <a href="mailto:nexus@utsa.edu">nexus@pes.edu</a>
              </li>
              <li>
                <ExternalLink size={16} />
                <span>PES University</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#github">
                <Github size={20} />
              </a>
              <a href="#linkedin">
                <Linkedin size={20} />
              </a>
              <a href="#instagram">
                <Instagram size={20} />
              </a>
              <a href="#twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © 2024 Nexus. All rights reserved.
          </div>
          <div className="bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;