import React, { useState } from "react";

const Header = ({ openProfessionalJourney }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gradient-to-r from-sky-700 to-sky-900 text-white z-50 mb-32">
      {/* Logo Section */}
      <div className="logo">
        <h1 className="text-xl font-bold">MUGABE</h1>
        <p className="text-sm">Software Engineer</p>
      </div>

      {/* Navbar for larger screens */}
      <nav className="hidden md:flex space-x-6">
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#footer" className="hover:text-gray-400">Contact</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#certificates" className="hover:text-gray-400">Certificates</a></li>
          <li><a href="#blog" onClick={openProfessionalJourney} className="hover:text-gray-400">Blog</a></li>
        </ul>
      </nav>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden p-2 text-white"
        onClick={() => setIsOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-1/2 h-full bg-gradient-to-r from-sky-700 to-sky-900 bg-opacity-95 flex flex-col items-start p-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-start space-y-4 mt-8">
          <li><a href="#home" onClick={handleNavClick} className="text-white text-lg hover:text-gray-400">Home</a></li>
          <li><a href="#footer" onClick={handleNavClick} className="text-white text-lg hover:text-gray-400">Contact</a></li>
          <li><a href="#skills" onClick={handleNavClick} className="text-white text-lg hover:text-gray-400">Skills</a></li>
          <li><a href="#services" onClick={handleNavClick} className="text-white text-lg hover:text-gray-400">Services</a></li>
          <li><a href="#projects" onClick={handleNavClick} className="text-white text-lg hover:text-gray-400">Projects</a></li>
          <li><a href="#certificates" onClick={handleNavClick} className="text-white text-lg hover:text-gray-400">Certificates</a></li>
          <li><a href="#blog" onClick={() => {
            handleNavClick();
            openProfessionalJourney();
          }} className="text-white text-lg hover:text-gray-400">Blog</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;