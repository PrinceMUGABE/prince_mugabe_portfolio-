/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./navbar/Header.jsx";
import Hero from "./hero/Hero.jsx";

import Services from "./service/Services";
import Footer from "./footer/Footer.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import Projects from "./project/Projects.jsx"
import Skills from "./skill/Skills.jsx"
import WhatsAppButton from "./WhatsAppButton.jsx";



const MainLayout = () => {
  const whatsappNumber = "+250788457408";


  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
  
      
      <Hero />
    
      <Skills />
      {/* <Services /> */}
      <Projects />
      <Footer />

       {/* WhatsApp Button */}
       <WhatsAppButton phoneNumber={whatsappNumber} />
    </>
  );
};

export default MainLayout;