import React, { useState, useEffect, useCallback } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projectsData = [
  {
    title: "Disaster Guard App",
    description: "Full-stack web application using React, Django, and machine learning algorithms to predict disaster trends with real-time data visualization.",
    githubLink: "https://github.com/PrinceMUGABE/disaster-guard-management-system",
    technologies: ["React", "Django", "Machine Learning", "TensorFlow"]
  },
  {
    title: "Health Insurance Fraud Detection System",
    description: "Developed a machine learning model for medical image classification using deep learning techniques, with a focus on early disease detection.",
    githubLink: "https://github.com/PrinceMUGABE/Healthy_insurance_fraud_detection_server",
    technologies: ["Python", "TensorFlow", "Keras", "Convolutional Neural Networks"]
  },
  {
    title: "Agricultural Water Use Efficiency Platform",
    description: "Developed a machine learning model for predicting best crop that can fit a specific location based on soil type and weather condition. The model suggests water requirements and irrigation strategies.",
    githubLink: "https://github.com/PrinceMUGABE/Agricultural-Water-Use-Efficiency-Platform",
    technologies: ["React", "Node.js", "Socket.IO", "MongoDB"]
  },
  {
    title: "Policy Link Rwanda",
    description: "A Django and React JS combination project collected all government and non-government organizations together for easy access and check for their policies, terms and conditions",
    githubLink: "https://github.com/PrinceMUGABE/Policy_Link_Rwanda_Client_Project_with_Django",
    technologies: ["Python", "React Js", "MYSQL"]
  },
  {
    title: "Rwanda Revenue Authority (RRA) Report Management System",
    description: "Comprehensive web application to help RRA employees generate and submit reports of their everyday activities according to tax collection and implementation of RRA policies in all business sectors as well as any other services that pay taxes.",
    githubLink: "https://github.com/PrinceMUGABE/Rwanda-Revenue-Authority-Report-Management-System",
    technologies: ["React", "Node.js", "Socket.IO", "Express", "Postgres"]
  },
  {
    title: "Quiz App",
    description: "Dynamic application for web and mobile devices for course management. The app can work and web application and mobile app in help of flutter framework of dart programming language",
    githubLink: "https://github.com/PrinceMUGABE/MobileQuizAppWithFlutterAndSpringboot",
    technologies: ["Springboot", "Flutter", "MYSQL"]
  },
  {
    title: "Calculator",
    description: "Mobile application for both Android and Ios devices for scientific calculator ",
    githubLink: "https://github.com/PrinceMUGABE/Flutter-Calculator-Mobile-app",
    technologies: ["Dart", "CMake", "Swift", "C++", "HTML"]
  },
  {
    title: "Diabet Prediction System",
    description: "A comprehensive web application to predict diabetic patients based of the signs",
    githubLink: "https://github.com/PrinceMUGABE/Diabete-Prediction-system-with-python",
    technologies: ["Jupyter Notebook", "Python", "HTML"]
  },

  {
    title: "PCOS-Detection-with-Django ",
    description: "Machine learning project developed under python to dect a PCOS and user interface with Django",
    githubLink: "https://github.com/PrinceMUGABE/PCOS-Detection-with-Django",
    technologies: ["Jupyter Notebook", "Python", "HTML", "Css"]
  },

  {
    title: "Malaria Prediction",
    description: "python malaria system prediction with machine learning to predict whether a particular person has a malaria disease according to provided informatiom",
    githubLink: "https://github.com/PrinceMUGABE/MalariaPrediction",
    technologies: ["Jupyter Notebook", "Python", "HTML", "Css"]
  },


  {
    title: "Riddle Challenge App",
    description: "Asp.net core project where user answers the riddles challenges and the system marks over 10. Therefore user is able to view the certificate and can print it",
    githubLink: "https://github.com/PrinceMUGABE/Riddles-Challenging-system-with-C-",
    technologies: ["C#", "HTML", "JavaScript", "Css", "SQL"]
  },

  {
    title: "Product Management SYstem",
    description: "web technology system for crud operation, search and sending email are additionals",
    githubLink: "https://github.com/PrinceMUGABE/SpringbootProductManagementSystem",
    technologies: ["Java", "HTML", "JavaScript", "Css"]
  },

  {
    title: "E-Commerce",
    description: "Full-stark web applicaion developed in C# programming language and asp.net framework for e-commerce",
    githubLink: "https://github.com/PrinceMUGABE/eCommerceProject",
    technologies: ["C#", "HTML", "JavaScript", "Css", "SQL"]
  },

  {
    title: "News Prediction System",
    description: "Developed a predictive web application that analyze news and predict what kind of article such news is categorized at. For example Sport, Business, Religious and so on.",
    githubLink: "https://github.com/PrinceMUGABE/news-prediction",
    technologies: ["Jupyter Notebook", "Python", "HTML", "JavaScript", "Css"]
  },

  {
    title: "Volcano Express Expense Pro",
    description: "A comprehensive responsive and dynamic web application for volcano express co ltd that help drivers to report the expenses taken place along side the trips. The system analyze the uploaded receipts using optical character recognition (OCR) library, neural language processing (NLP) and facial recognition to analyze recorded video.",
    githubLink: "https://github.com/PrinceMUGABE/Volcan-Expense-Pro-Backend",
    technologies: ["Python", "OCR", "Powershell", "SQL", "Tailwind css", "React"]
  },

  {
    title: "Go-GO App",
    description: "Developed a backend system that generates RESTFUL APIs for tracking orders, payments, freelancers who must derivers orders to their owners, logistic companies that hold freelancers in their management.",
    githubLink: "https://github.com/PrinceMUGABE/gogo_app",
    technologies: ["Python", "Postgresql", "Django"]
  },
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