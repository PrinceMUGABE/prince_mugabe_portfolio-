import React, { useState, useEffect } from "react";
import { FaCertificate, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const certificatesData = [
    {
        title: "Advanced Database Developer",
        issuer: "Alison",
        year: 2024,
        description: "Advanced course covering database management."
      },
      {
        title: "Virtual Assistance",
        issuer: "ALX",
        year: 2024,
        description: "Comprehensive certification in modern virtual assistance"
      },
      {
        title: "Driving License",
        issuer: "Rwanda National Police",
        year: 2024,
        description: "Authorized to driving all vehicles in category A & B."
      },
      {
        title: "IT for Business Success",
        issuer: "HP",
        year: 2024,
        description: "Comprehensive certificate showcasing skills on how to choose the best technology for a business and its implementation"
      },
      {
        title: "Customer Relationship Management",
        issuer: "HP Life",
        year: 2024,
        description: "SKilled in understanding existing customers and their needs. How to understand customer buying habits, and how to develop a customer relationship management strategy for their business."
      },
      {
        title: "Wireless Communication Systems",
        issuer: "Mind Luster",
        year: 2024,
        description: ""
      },
      {
        title: "Software Engineering",
        issuer: "Saylor",
        year: 2024,
        description: "Comprehensive certificate for software engineering."
      },
      {
        title: "Operating Systems",
        issuer: "Saylor",
        year: 2024,
        description: "Comprehensive certificate for operating systems."
      },
      {
        title: "Modern Database Management",
        issuer: "Saylor",
        year: 2024,
        description: "Comprehensive certificate for an introduction to modern databases."
      },
      {
        title: "Management Information Systems",
        issuer: "Saylor",
        year: 2024,
        description: "Comprehensive certificate for managing information systems."
      },
      {
        title: "English Proficiency",
        issuer: "Adventist University of Central Africa",
        year: 2024,
        description: "Comprehensive certificate for an english proficiency."
      },
      {
        title: "Advanced Cloud Foundations",
        issuer: "Great Learning",
        year: 2024,
        description: "Comprehensive advenced certificate for cloud computing."
      },
      {
        title: "Advanced Cyber Security - Threats and Governance",
        issuer: "Great Learning",
        year: 2024,
        description: "Comprehensive advanced certificate for cyber security. "
      },
      {
        title: "Basics of Machine Learning",
        issuer: "Great Learning",
        year: 2024,
        description: "Comprehensive certificate for understanding basics of machine learning."
      },
      {
        title: "Canva",
        issuer: "Simpli-learn",
        year: 2024,
        description: "A certificate for demonstrating initiative and a commitment to deepening skills and advancing career."
      },
      {
        title: "Cloud in Business Case",
        issuer: "Great Learning",
        year: 2024,
        description: "Comprehensive certificate for understanding cloud computing in business case."
      },
      {
        title: "Data Analytics",
        issuer: "Simpi-Learn",
        year: 2024,
        description: "Comprehensive certificate for understanding the introduction of data analytics."
      },
      {
        title: "Git Training",
        issuer: "Simpli-Learn",
        year: 2024,
        description: "Comprehensive certificate for understanging git."
      }, {
        title: "Asp.Net",
        issuer: "Simpli-Learn",
        year: 2024,
        description: "Comprehensive certificate for completing an introduction to Asp.Net Training."
      }, {
        title: "Cloud Computing",
        issuer: "Simpli-Learn",
        year: 2024,
        description: "Comprehensive certificate for completing an  introduction to cloud compputing training."
      },
    
      {
        title: "Ethical Hacking",
        issuer: "Great Learning",
        year: 2024,
        description: "Comprehensive certificate for completing an introduction on ethical hacking training."
      },
      {
        title: "Information Security",
        issuer: "Great Learning",
        year: 2024,
        description: "Comprehensive certificate for completing a training of introduction to information security."
      },
      {
        title: "Linux Essential",
        issuer: "Network Development Group (NDG)",
        year: 2022,
        description: "Comprehensive certificate for understanding linux operating systems, ability to navigate linux systems, ability to execute linux commands, knowledge of linux security and file permissions."
      },
      {
        title: "Networking Essentials",
        issuer: "CISCO",
        year: 2023,
        description: "Comprehensive certificate for understanding concept of network communication, ability to build a simple home network, ability to explain the concept of protocols in network communications, understanding of how ethernet network works, ability to create a Local Area Network (LAN), ability to create a DHCP based network and knowledge of IPV4 vs IPV6 address management."
      },
      {
        title: "Python for Machine Learning and Data Science",
        issuer: "Great Learning",
        year: 2024,
        description: "Comprehensive certificate for completing a training of python for machine learning and data science."
      },
      {
        title: "Spring Framework",
        issuer: "Simpli-Learn",
        year: 2024,
        description: "Comprehensive certificate for completing training of java mainly on spring frameworks."
      }
];

const CertificatesCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(certificatesData.length / cardsPerPage);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 10000);

    return () => clearInterval(timer);
  }, [totalPages]);

  // Navigate to next page
  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  // Navigate to previous page
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  // Get current page's certificates
  const getCurrentCertificates = () => {
    const startIndex = currentPage * cardsPerPage;
    return certificatesData.slice(startIndex, startIndex + cardsPerPage);
  };

  return (
    <section 
      id="certificates" 
      className="py-16 bg-gray-100 dark:bg-gray-900 relative"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Professional Certifications
        </h2>

        <div className="relative">
          {/* Navigation Left */}
          <button 
            onClick={handlePrevPage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <FaChevronLeft className="text-2xl text-gray-600 dark:text-white" />
          </button>

          {/* Navigation Right */}
          <button 
            onClick={handleNextPage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <FaChevronRight className="text-2xl text-gray-600 dark:text-white" />
          </button>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {getCurrentCertificates().map((cert, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 group relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  <FaCertificate className="text-blue-600 mr-3 text-3xl" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {cert.issuer} | {cert.year}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {cert.description}
                </p>

                {/* Hover overlay for detailed view */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-90 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="mb-2">{cert.issuer} | {cert.year}</p>
                  <p>{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Committed to continuous learning and professional growth through targeted certifications in emerging technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificatesCarousel;