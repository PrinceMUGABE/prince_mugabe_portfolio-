import React from 'react';
import { FaCode, FaUniversity, FaLanguage, FaGraduationCap, FaTimes } from 'react-icons/fa';

const ProfessionalJourneyModal = ({ isOpen, onClose }) => {
  const sections = {
    overview: {
      icon: <FaUniversity className="text-4xl text-blue-600" />,
      title: "Professional Journey",
      content: "A software engineering graduate from Adventist University of Central Africa, transforming technological challenges into innovative solutions through continuous learning and multilingual communication."
    },
    skills: {
      icon: <FaCode className="text-4xl text-green-600" />,
      title: "Technical Competencies",
      content: "Expertise spanning cloud technologies, data sciences, cybersecurity, and software development. Certified in advanced cloud foundations, machine learning, and ethical hacking; To see more about my certificates, navigate to my professional certificates section."
    },
    languages: {
      icon: <FaLanguage className="text-4xl text-purple-600" />,
      title: "Multilingual Proficiency",
      content: "Fluent in English, Kinyarwanda, and Kiswahili. Leveraging linguistic diversity to enhance communication, code documentation, and cross-cultural technological collaboration."
    },
    education: {
      icon: <FaGraduationCap className="text-4xl text-red-600" />,
      title: "Academic Achievement",
      content: "Software Engineering graduate from Adventist University of Central Africa. Committed to transforming theoretical knowledge into practical, impactful technological solutions."
    }
  };

  const [activeSection, setActiveSection] = React.useState('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <FaTimes className="text-2xl" />
        </button>

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            My Professional Narrative
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  activeSection === key 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100'
                }`}
              >
                {sections[key].icon}
                <h3 className="mt-4 font-semibold">{sections[key].title}</h3>
              </button>
            ))}
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <span>{sections[activeSection].icon}</span>
              <h3 className="text-2xl font-bold ml-4 text-gray-800 dark:text-white">
                {sections[activeSection].title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {sections[activeSection].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJourneyModal;