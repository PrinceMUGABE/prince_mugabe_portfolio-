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


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
        <br />
      <About />
      <br />
      <Skills />
      <br />
      <Services />
      <br />
      <Projects />
      <br />
      <Contact />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default MainLayout;