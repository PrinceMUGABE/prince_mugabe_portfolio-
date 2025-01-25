import React from "react";
import { 
  FaCode, 
  FaDatabase, 
  FaMobile, 
  FaCloudUploadAlt, 
  FaBug,
  FaLaptopCode
} from "react-icons/fa";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web application development using modern technologies like React, Django, Node.js, and ASP.NET Core.",
    icon: <FaCode className="text-blue-600 text-4xl" />,
    skills: [
      "Front-end Design & Implementation",
      "Back-end API Development",
      "Database Integration",
      "Responsive Web Applications"
    ]
  },
  {
    title: "Software Testing & Quality Assurance",
    description: "Comprehensive testing strategies to ensure robust, reliable, and high-performance software solutions.",
    icon: <FaBug className="text-red-600 text-4xl" />,
    skills: [
      "Unit & Integration Testing",
      "Automated Testing",
      "Performance Optimization",
      "Bug Tracking & Resolution"
    ]
  },
  {
    title: "System Design & Prototyping",
    description: "Architectural design and rapid prototyping of scalable software solutions with a focus on innovation.",
    icon: <FaLaptopCode className="text-green-600 text-4xl" />,
    skills: [
      "Technical Architecture",
      "Proof of Concept Development",
      "System Modeling",
      "Technical Documentation"
    ]
  },
  {
    title: "Cloud & DevOps Solutions",
    description: "Deployment, containerization, and cloud infrastructure management for modern applications.",
    icon: <FaCloudUploadAlt className="text-purple-600 text-4xl" />,
    skills: [
      "Cloud Deployment",
      "Docker Containerization",
      "CI/CD Pipelines",
      "Infrastructure as Code"
    ]
  },
  {
    title: "Mobile Application Development",
    description: "Cross-platform mobile app development using Flutter and React Native.",
    icon: <FaMobile className="text-blue-500 text-4xl" />,
    skills: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "Mobile UI/UX Design",
      "Performance Optimization"
    ]
  },
  {
    title: "Database & Backend Services",
    description: "Robust database design, management, and backend service implementation.",
    icon: <FaDatabase className="text-green-700 text-4xl" />,
    skills: [
      "SQL & NoSQL Databases",
      "ORM Implementation",
      "Database Optimization",
      "Data Migration"
    ]
  }
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Professional Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold ml-4 text-blue-700 dark:text-blue-400">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              
              <div className="border-t pt-4 mt-4">
                <h4 className="text-md font-medium mb-2 text-gray-700 dark:text-gray-200">
                  Key Capabilities:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {service.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="mr-2 text-blue-500">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Delivering innovative, scalable, and high-performance software solutions tailored to meet complex business challenges with expertise across multiple technology domains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;