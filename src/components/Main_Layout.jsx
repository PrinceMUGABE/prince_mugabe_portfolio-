import React, { useState } from "react";
import Navbar from "./navbar/Header.jsx";
import Hero from "./hero/Hero.jsx";
import Services from "./service/Services";
import Footer from "./footer/Footer.jsx";
import Skills from "./skill/Skills.jsx"
import WhatsAppButton from "./WhatsAppButton.jsx";
import Certificates from "./certifaction/Certificates.jsx";
import ProfessionalJourneyModal from "./blog/Blog.jsx";
import Projects from "./project/Projects.jsx"

const MainLayout = () => {
  const [isProfessionalJourneyOpen, setIsProfessionalJourneyOpen] = useState(false);
  const whatsappNumber = "+250788457408";

  const openProfessionalJourney = () => {
    setIsProfessionalJourneyOpen(true);
  };

  const closeProfessionalJourney = () => {
    setIsProfessionalJourneyOpen(false);
  };

  return (
    <>
      <Navbar openProfessionalJourney={openProfessionalJourney} />
      <br />
      <br />
      <br />
      
      <Hero />
      <Skills />
      <Services />
      <Certificates />
      <Projects />
  
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber={whatsappNumber} />

      {/* Professional Journey Modal */}
      <ProfessionalJourneyModal 
        isOpen={isProfessionalJourneyOpen} 
        onClose={closeProfessionalJourney} 
      />
    </>
  );
};

export default MainLayout;