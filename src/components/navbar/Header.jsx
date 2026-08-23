import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const links = [["About", "about"], ["Skills", "skills"], ["Services", "services"], ["Certificates", "certificates"], ["Work", "projects"], ["Contact", "contact"]];

const Header = ({ openProfessionalJourney }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" onClick={closeMenu}><span>PM</span><strong>Prince Mugabe</strong></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          <button onClick={openProfessionalJourney}>Journey</button>
        </nav>
        <button className="menu-button" onClick={() => setIsOpen(true)} aria-label="Open navigation"><FaBars /></button>
      </div>
      <div className={`mobile-nav ${isOpen ? "is-open" : ""}`}>
        <button className="close-button" onClick={closeMenu} aria-label="Close navigation"><FaXmark /></button>
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        <button onClick={() => { closeMenu(); openProfessionalJourney(); }}>Journey</button>
      </div>
    </header>
  );
};

export default Header;