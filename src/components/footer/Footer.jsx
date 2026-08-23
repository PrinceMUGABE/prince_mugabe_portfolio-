import React from "react";
import { FaEnvelope, FaGithub, FaPhone, FaWhatsapp } from "react-icons/fa6";

const Footer = () => (
  <>
    <section id="contact" className="contact-section">
      <div className="section-shell contact-grid">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let’s make something useful.</h2>
        </div>
        <div className="contact-details">
          <a href="mailto:princemugabe568@gmail.com"><FaEnvelope />&nbsp; princemugabe568@gmail.com</a>
          <a href="tel:+250788457408"><FaPhone />&nbsp; +250 788 457 408</a>
          <p>Kigali, Rwanda</p>
          <div className="social-links">
            <a href="https://github.com/PrinceMUGABE" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            {/* <a href="https://www.linkedin.com/in/mugabe-prince-2b377621b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a> */}
            <a href="https://wa.me/250788457408" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </section>
    <footer className="site-footer"><div className="section-shell">© {new Date().getFullYear()} Prince Mugabe <span>Software engineer · Full-stack · ML & AI</span></div></footer>
  </>
);

export default Footer;