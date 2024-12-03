import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 text-white z-50">
      {/* Logo Section */}
      <div className="logo">
        <h1 className="text-xl font-bold">MUGABE</h1>
        <p className="text-sm">Full-Stack Developer</p>
      </div>

      {/* Navbar for larger screens */}
      <nav className="hidden md:flex space-x-6">
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#services" className="text-white hover:text-gray-400">Service</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hamburger Menu (only visible on small screens) */}
      <button 
        className="md:hidden p-2 text-white" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu (Hamburger menu items, visible when 'isOpen' is true) */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} absolute top-0 left-0 w-3/4 h-full bg-gray-800 p-6 z-40`}>
        <ul className="space-y-6">
          <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
          <li><a href="#services" className="text-white hover:text-gray-400">Services</a></li>
          <li><a href="#projects" className="text-white hover:text-gray-400">Projects</a></li>
          <li><a href="#skills" className="text-white hover:text-gray-400">Skills</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
