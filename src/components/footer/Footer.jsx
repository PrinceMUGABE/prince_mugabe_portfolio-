import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gradient-to-r from-sky-700 to-sky-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-xl" />
                <div>
                  <p>+250 788 457 408</p>
                  <p>+250 786 779 262</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-xl" />
                <a 
                  href="mailto:princemugabe568@gmail.com" 
                  className="hover:text-sky-200 transition-colors"
                >
                  princemugabe568@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-xl" />
                <p>Kigali, Rwanda</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">Connect</h3>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/mugabe-prince-2b377621b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-200 transition-colors"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a 
                href="https://github.com/PrinceMUGABE" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-200 transition-colors"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a 
                href="https://wa.me/250788457408" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-200 transition-colors"
              >
                <FaWhatsapp className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Quick Links or About */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">Portfolio</h3>
            <div className="space-y-3">
              <p>Web Developer</p>
              <p>Based in Kigali, Rwanda</p>
              <p>Passionate about creating innovative digital solutions</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-sky-600 text-center">
          <p className="text-sm">
            © {currentYear} Prince Mugabe. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;