import React from "react";
import hero from "../../assets/pictures/prince2.PNG";

const Hero = () => {
  return (
    <div
      id="home" className="hero-section"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Make the section take full height of the viewport
        position: "relative", // To position content above the image
      }}
    >
      {/* Background Image Overlay */}
      <div
        className="background-overlay"
        style={{
          position: "absolute",
          top: "12",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Black overlay with opacity
        }}
      ></div>

      {/* Text Section */}
      <div
        className="text-section"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff", // White text
          textAlign: "center",
          zIndex: "2", // Make sure text is on top
        }}
      >
       
        {/* Text section */}
        <div className="space-y-5 text-center sm:text-left flex-1">
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl font-bold text-white dark:text-white"
            style={{ lineHeight: 1.2 }}
          >
            Prince Mugabe
            <span className="block text-2xl sm:text-3xl text-white mt-2">
              Full-Stack Developer | ML & AI Specialist
            </span>
          </h1>
          
          <div className="space-y-4 text-white dark:text-gray-300">
            <p data-aos="fade-up" data-aos-delay="300">
              Specialized in developing innovative software solutions with expertise in Full-Stack Development, Machine Learning, and Artificial Intelligence technologies.
            </p>
            
            <p data-aos="fade-up" data-aos-delay="400">
              Proficient in end-to-end software development lifecycle, from requirement analysis and design to implementation, testing, and deployment of complex ML and AI systems.
            </p>
          </div>

          <div className="flex space-x-4 justify-center sm:justify-start mt-6">
            <a 
              href="#projects" 
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#footer" 
              className="border border-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Hero;
