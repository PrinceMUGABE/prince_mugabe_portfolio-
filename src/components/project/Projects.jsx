import React, { useState, useEffect, useCallback } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projectsData = [
  {
    title: "Disaster Guard App",
    description: "Full-stack web application using React, Django, and machine learning algorithms to predict disaster trends with real-time data visualization.",
    githubLink: "https://github.com/PrinceMUGABE/StockPredictionML",
    technologies: ["React", "Django", "Machine Learning", "TensorFlow"]
  },
  {
    title: "Health Insurance Fraud Detection System",
    description: "Developed a machine learning model for medical image classification using deep learning techniques, with a focus on early disease detection.",
    githubLink: "https://github.com/PrinceMUGABE/MedicalImageClassification",
    technologies: ["Python", "TensorFlow", "Keras", "Convolutional Neural Networks"]
  },
  {
    title: "Agricultural Water Use Efficiency Platform",
    description: "Developed a machine learning model for predicting best crop that can fit a specific location based on soil type and weather condition. The model suggests water requirements and irrigation strategies.",
    githubLink: "https://github.com/PrinceMUGABE/RealTimeChatApp",
    technologies: ["React", "Node.js", "Socket.IO", "MongoDB"]
  },
  {
    title: "Stock Prediction ML",
    description: "Machine learning application for predicting stock market trends using advanced predictive algorithms and data analysis techniques.",
    githubLink: "https://github.com/PrinceMUGABE/StockPredictionML",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"]
  },
  {
    title: "Real-Time Chat Application",
    description: "Scalable real-time chat application with user authentication, message encryption, and instant messaging capabilities.",
    githubLink: "https://github.com/PrinceMUGABE/RealTimeChatApp",
    technologies: ["React", "Node.js", "Socket.IO", "Express"]
  },
  {
    title: "E-commerce Analytics Platform",
    description: "Comprehensive analytics dashboard for e-commerce businesses, providing insights on sales, customer behavior, and product performance.",
    githubLink: "https://github.com/PrinceMUGABE/EcommerceAnalytics",
    technologies: ["React", "D3.js", "MongoDB", "Express"]
  }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const handlePageChange = useCallback((newPage) => {
    setCurrentPage(newPage);
    setSelectedProject(null);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      setSelectedProject(null);
    }, 10000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const startIndex = currentPage * projectsPerPage;
  const displayProjects = projectsData.slice(startIndex, startIndex + projectsPerPage);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Featured Projects
        </h2>
        
        {selectedProject ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
               onClick={() => setSelectedProject(null)}>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl w-full"
                 onClick={(e) => e.stopPropagation()}>
              <h3 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
                {selectedProject.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={selectedProject.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </a>
            </div>
          </div>
        ) : null}
        
        <div className="grid md:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <button 
            onClick={() => handlePageChange((currentPage - 1 + totalPages) % totalPages)}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaChevronLeft size={24} />
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`w-3 h-3 rounded-full ${
                currentPage === index 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
          
          <button 
            onClick={() => handlePageChange((currentPage + 1) % totalPages)}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;