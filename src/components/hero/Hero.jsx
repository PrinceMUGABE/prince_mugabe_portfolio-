import React from "react";
import { FaArrowDown, FaArrowUpRightFromSquare } from "react-icons/fa6";
import portrait from "../../assets/pictures/prince2.PNG";

const Hero = () => (


  <section id="home" className="hero-section">
    <div className="hero-grid section-shell">
      <div className="hero-copy" data-aos="fade-up">
        <p className="eyebrow">Software engineer · Kigali, Rwanda</p>
        <h1>Building digital tools that move people forward.</h1>
        <p className="hero-intro">I design and develop dependable web, mobile, and intelligent systems that turn ambitious ideas into clear, useful experiences.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#projects">Explore selected work <FaArrowUpRightFromSquare /></a>
          <a className="quiet-link" href="#contact">Start a conversation <FaArrowDown /></a>
        </div>
      </div>
      <div className="hero-portrait" data-aos="fade-left">
        <img src={portrait} alt="Prince Mugabe" />
        <div className="hero-caption"><span>01</span><p>Full-stack development<br />Machine learning & AI</p></div>
      </div>
    </div>
    <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>Scroll to explore</span><FaArrowDown /></a>
  </section>
);

export default Hero;
