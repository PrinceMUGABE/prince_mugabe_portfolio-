import React from "react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "ML-Powered Stock Prediction App",
    description: "Full-stack web application using React, Django, and machine learning algorithms to predict stock market trends with real-time data visualization.",
    githubLink: "https://github.com/PrinceMUGABE/StockPredictionML",
    technologies: ["React", "Django", "Machine Learning", "TensorFlow"]
  },
  {
    title: "AI-Driven Healthcare Diagnostic System",
    description: "Developed a machine learning model for medical image classification using deep learning techniques, with a focus on early disease detection.",
    githubLink: "https://github.com/PrinceMUGABE/MedicalImageClassification",
    technologies: ["Python", "TensorFlow", "Keras", "Convolutional Neural Networks"]
  },
  {
    title: "Real-Time Chat Application",
    description: "Scalable real-time messaging platform with user authentication, websocket communication, and responsive design.",
    githubLink: "https://github.com/PrinceMUGABE/RealTimeChatApp",
    technologies: ["React", "Node.js", "Socket.IO", "MongoDB"]
  }
];

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-white hover:text-blue-700 flex items-center"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;