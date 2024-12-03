import React from "react";
import hero from "../../assets/pictures/prince1.PNG";

const Hero = () => {
  return (
    <div
      className="dark:bg-gray-950 dark:text-white duration-300 min-h-screen flex items-center justify-center"
      id="home"
    >
      <div className="container w-full max-w-screen-xl flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8">
        {/* Image section */}
        <div
          data-aos="zoom-in"
          className="relative sm:order-1 flex-1 sm:ml-6 order-1"
        >
          <img
            src={hero}
            alt="Hero"
            className="mt-8 w-full max-w-[250px] sm:max-w-[400px] md:max-w-[450px] xl:max-w-[300px] max-h-[400px] mx-auto"
          />
        </div>

        {/* Text section */}
        <div className="space-y-5 text-center sm:text-left sm:order-2 flex-1">
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-4xl font-semibold"
            style={{ lineHeight: 1.2 }}
          >
            <span className="text-blue-800">Full-Stack Developer</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="300">
            A software developer for ML and AI systems with hard-working,
            critical thinking, decision-making, time management, flexibility,
            and adaptability skills.
          </p>

          <p data-aos="fade-up" data-aos-delay="300">
            A software developer for ML and AI systems with hard-working,
            critical thinking, decision-making, time management, flexibility,
            and adaptability skills.
          </p>
          
          <p data-aos="fade-up" data-aos-delay="300">
            A software developer for ML and AI systems with hard-working,
            critical thinking, decision-making, time management, flexibility,
            and adaptability skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
