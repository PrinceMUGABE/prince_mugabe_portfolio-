import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../navbar/Header.jsx";
import WhatsAppButton from "../WhatsAppButton.jsx";
import Footer from "../footer/Footer.jsx";

export default function Resume() {
  const resumeRef = useRef();
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);
  const whatsappNumber = "+250788457408";

  const handleDownloadPDF = () => {
    setIsDownloading(true);
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = () => {
      const element = resumeRef.current;
      
      // Create a clone of the element for PDF export without background colors
      const clone = element.cloneNode(true);
      
      // Remove background colors and styling for PDF
      clone.querySelectorAll('*').forEach(el => {
        el.style.backgroundColor = 'white';
        el.style.backgroundImage = 'none';
        el.classList.remove('bg-gray-5', 'bg-blue-50', 'bg-gradient-to-r', 'from-blue-600', 'to-blue-800', 'bg-white', 'dark:bg-gray-800', 'dark:bg-gray-700');
      });
      
      // Ensure text colors are black for PDF
      clone.querySelectorAll('*').forEach(el => {
        el.style.color = '#000000';
        el.classList.remove('text-white', 'text-gray-300', 'text-blue-600', 'text-blue-800', 'text-sky-700', 'dark:text-white', 'dark:text-gray-300');
      });
      
      // Remove shadows and borders that might not print well
      clone.querySelectorAll('*').forEach(el => {
        el.style.boxShadow = 'none';
        el.classList.remove('shadow-2xl', 'shadow-lg', 'rounded-xl', 'rounded-lg');
      });

      const opt = {
        margin: 0.5,
        filename: 'Prince_Mugabe_Frontend_Developer_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          scrollY: 0,
          windowHeight: element.scrollHeight,
          backgroundColor: '#ffffff'
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait'
        }
      };

      setTimeout(() => {
        window.html2pdf().set(opt).from(clone).save();
        setIsDownloading(false);
      }, 500);
    };
    document.body.appendChild(script);
  };

  const openProfessionalJourney = () => {
    console.log("Open professional journey");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header openProfessionalJourney={openProfessionalJourney} />
      
      {/* Main Content */}
      <main className="pt-20 pb-16">
        {/* Resume Header Section */}
        <section className="bg-gradient-to-r from-sky-700 to-sky-900 text-white py-12 print:hidden">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Professional Resume</h1>
              <p className="text-xl mb-8">Frontend Developer & Software Engineer</p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleDownloadPDF}
                  disabled={isDownloading}
                  className={`px-8 py-3 rounded-lg font-semibold shadow-lg flex items-center gap-2 transition-all ${
                    isDownloading 
                      ? "bg-blue-400 cursor-not-allowed" 
                      : "bg-white text-sky-700 hover:bg-gray-100"
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-sky-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating PDF...
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Download PDF Resume
                    </>
                  )}
                </button>

                <button
                  onClick={() => navigate('/')}
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-sky-700 transition-colors"
                >
                  ← Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Content */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div ref={resumeRef} className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden print:shadow-none print:bg-white">
            {/* Resume Header - Simplified for PDF */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 print:bg-white print:text-black print:border-b-2 print:border-gray-300">
              <h1 className="text-4xl font-bold mb-2 print:text-3xl">Prince MUGABE</h1>
              <h2 className="text-2xl font-semibold mb-4 print:text-xl">FRONTEND DEVELOPER</h2>
              <p className="text-lg leading-relaxed max-w-4xl print:text-sm print:text-gray-700">
                Passionate Frontend Developer with 1+ year of experience building responsive, user-friendly web applications 
                using React.js, JavaScript (ES6+), HTML5, and CSS3. Strong foundation in transforming UI/UX designs into 
                high-quality interactive interfaces with clean, maintainable code. Experienced in REST API integration, 
                component-based architecture, and Git version control.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-gray-50 dark:bg-gray-700 print:bg-white print:grid-cols-4 print:gap-4 print:p-6 print:border-b print:border-gray-300">
              <div className="text-center print:text-left">
                <div className="flex items-center justify-center gap-2 print:justify-start">
                  <svg className="w-5 h-5 text-blue-600 print:text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="font-semibold text-gray-800 dark:text-white print:text-black">Phone</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 print:text-black">+250 789 990 408</p>
              </div>
              
              <div className="text-center print:text-left">
                <div className="flex items-center justify-center gap-2 print:justify-start">
                  <svg className="w-5 h-5 text-blue-600 print:text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="font-semibold text-gray-800 dark:text-white print:text-black">Email</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 print:text-black break-all">Princemugabe568@gmail.com</p>
              </div>
              
              <div className="text-center print:text-left">
                <div className="flex items-center justify-center gap-2 print:justify-start">
                  <svg className="w-5 h-5 text-blue-600 print:text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-gray-800 dark:text-white print:text-black">Location</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 print:text-black">Kigali, Rwanda</p>
              </div>
              
              <div className="text-center print:text-left">
                <div className="flex items-center justify-center gap-2 print:justify-start">
                  <svg className="w-5 h-5 text-blue-600 print:text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-gray-800 dark:text-white print:text-black">Portfolio</span>
                </div>
                <p className="text-blue-600 hover:text-blue-800 break-all text-sm print:text-black print:text-xs">
                  prince-mugabe-portfolio.netlify.app
                </p>
              </div>
            </div>

            {/* Main Resume Content */}
            <div className="p-8 print:p-6">
              {/* Technical Skills */}
              <section className="mb-8 print:mb-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200 print:text-xl print:text-black print:border-black">
                  TECHNICAL SKILLS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3 print:gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-lg print:text-base print:text-black">Core Frontend</h3>
                    <ul className="space-y-2 text-white print:text-black">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        <strong>HTML5 & CSS3</strong>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        <strong>JavaScript (ES6+)</strong>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        <strong>React.js</strong> - Hooks, Components
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        <strong>TypeScript</strong>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        Responsive Design
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        Component Architecture
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-lg print:text-base print:text-black">Tools & Integration</h3>
                    <ul className="space-y-2 text-white print:text-black">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        <strong>Git & Version Control</strong>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        <strong>REST APIs Integration</strong>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        <strong>Docker</strong> (Containerization)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        UI/UX Design Principles
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        Cross-Browser Compatibility
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        Performance Optimization
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-lg print:text-base print:text-black">Additional Skills</h3>
                    <ul className="space-y-2 text-white print:text-black">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        Tailwind CSS Framework
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        State Management (Redux)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        Python & Django Backend
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        SQL Database Integration
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        Agile/Scrum Experience
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full print:bg-black"></span>
                        Debugging & Testing
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Professional Experience */}
              <section className="mb-8 print:mb-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200 print:text-xl print:text-black print:border-black">
                  PROFESSIONAL EXPERIENCE
                </h2>

                {/* Anaweza App Ltd */}
                <div className="mb-6 print:mb-4">
                  <div className="flex justify-between items-baseline mb-3 print:mb-2">
                    <h3 className="text-xl font-bold text-white print:text-lg print:text-black">
                      Frontend Developer & Platform Manager
                    </h3>
                    <span className="text-sm font-semibold text-white print:text-black">
                      Jan 2025 - Oct 2025 (10 months)
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3 print:text-black italic print:text-sm">Anaweza App Ltd, Kigali | www.anaweza.com</p>
                  <ul className="list-disc ml-6 space-y-2 text-white print:text-black print:text-sm">
                    <li><strong>Developed responsive, user-friendly interfaces</strong> for a job marketplace platform using React.js, HTML5, CSS3, and JavaScript (ES6+)</li>
                    <li><strong>Transformed UI/UX designs into high-quality interactive web pages</strong> with seamless user experiences across desktop and mobile devices</li>
                    <li><strong>Wrote clean, maintainable code</strong> following React best practices including component-based architecture, hooks, and state management</li>
                    <li><strong>Integrated frontend with backend REST APIs</strong> to enable real-time job postings, applications, user authentication, and notifications</li>
                    <li><strong>Optimized application performance</strong> for maximum speed, responsiveness, and cross-browser compatibility</li>
                    <li><strong>Debugged and improved existing components</strong> based on user feedback and testing results, reducing load times by 30%</li>
                    <li><strong>Collaborated with stakeholders</strong> to gather requirements, implement features, and ensure alignment with business objectives</li>
                    <li><strong>Used Git for version control</strong> to manage code changes, branch management, and collaborative development</li>
                  </ul>
                </div>

                {/* University Graduate Projects */}
                <div className="mb-6 print:mb-4">
                  <div className="flex justify-between items-baseline mb-3 print:mb-2">
                    <h3 className="text-xl font-bold text-white print:text-lg print:text-black">
                      Full Stack Developer - University Graduate Projects
                    </h3>
                    <span className="text-sm font-semibold text-white print:text-black">
                      2023 - 2024
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3 print:text-black italic print:text-sm">Various High-Scalable Academic Projects</p>
                  <ul className="list-disc ml-6 space-y-2 text-white print:text-black print:text-sm">
                    <li><strong>Developed and deployed multiple high-scalable web applications</strong> for university graduate projects using modern web technologies</li>
                    <li><strong>Engineered responsive front-end interfaces</strong> using React.js, Tailwind CSS, and modern JavaScript for optimal user experience</li>
                    <li><strong>Built robust back-end systems</strong> with Node.js, Express, and MongoDB to handle complex data operations and business logic</li>
                    <li><strong>Implemented real-time features and WebSocket connections</strong> for interactive user experiences and live data updates</li>
                    <li><strong>Optimized application performance and scalability</strong> to support thousands of concurrent users with efficient data handling</li>
                    <li><strong>Collaborated with cross-functional teams</strong> including designers and backend developers to deliver projects within tight deadlines</li>
                    <li><strong>Integrated third-party APIs and payment gateways</strong> for enhanced functionality and seamless user interactions</li>
                    <li><strong>Applied Agile development methodologies</strong> with iterative development, code reviews, and continuous integration</li>
                  </ul>
                </div>
              </section>

              {/* Projects Section */}
              <section className="mb-8 print:mb-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200 print:text-xl print:text-black print:border-black">
                  FEATURED PROJECTS
                </h2>
                
                <div className="mb-6 print:mb-4">
                  <h3 className="text-lg font-bold text-black mb-2 print:text-base">Anaweza Job Marketplace Platform</h3>
                  <p className="text-gray-700 mb-3 print:text-black print:text-sm"><strong>Tech Stack:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Python, Django, REST APIs, SQL</p>
                  <ul className="list-disc ml-6 space-y-1 text-white print:text-black print:text-sm">
                    <li>Full-featured job marketplace with 1000+ active users connecting employers and job seekers</li>
                    <li>Responsive UI with authentication, job posting/search, real-time applications, messaging, and dashboards</li>
                    <li>Implemented state management, form validation, and dynamic data rendering</li>
                    <li><strong>Live Production:</strong> www.anaweza.com</li>
                  </ul>
                </div>

                <div className="mb-6 print:mb-4">
                  <h3 className="text-lg font-bold text-black mb-2 print:text-base">Personal Portfolio Website</h3>
                  <p className="text-gray-700 mb-3 print:text-black print:text-sm"><strong>Tech Stack:</strong> React.js, JavaScript, HTML5, CSS3, Responsive Design</p>
                  <ul className="list-disc ml-6 space-y-1 text-white print:text-black print:text-sm">
                    <li>Modern, responsive portfolio showcasing projects, skills, and professional experience</li>
                    <li>Clean UI/UX design with smooth animations, intuitive navigation, and mobile-first approach</li>
                    <li><strong>Live Demo:</strong> prince-mugabe-portfolio.netlify.app</li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section className="mb-8 print:mb-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200 print:text-xl print:text-black print:border-black">
                  EDUCATION
                </h2>

                <div className="mb-4 print:mb-3">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold text-white print:text-lg">
                      Bachelor of Science in Information Technology
                    </h3>
                    <span className="text-sm font-semibold text-white print:text-black">
                      2020 - 2024
                    </span>
                  </div>
                  <p className="text-white mb-2 print:text-black"><strong>Software Engineering Department</strong> | Adventist University of Central Africa (AUCA), Kigali</p>
                  <p className="text-white italic print:text-black print:text-sm"><strong>Relevant Coursework:</strong> Web Development, Software Engineering, Database Systems, Data Structures & Algorithms, Object-Oriented Programming, UI/UX Design, Agile Methodologies</p>
                </div>
              </section>

              {/* Certifications */}
              <section className="mb-8 print:mb-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200 print:text-xl print:text-black print:border-black">
                  CERTIFICATIONS & CONTINUOUS LEARNING
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2">
                  <div>
                    <ul className="list-disc ml-6 space-y-1 text-white print:text-black print:text-sm">
                      <li>Python for Machine Learning</li>
                      <li>Advanced Database Systems (SQL)</li>
                      <li>Operating Systems</li>
                      <li>Data Security</li>
                    </ul>
                  </div>

                  <div>
                    <ul className="list-disc ml-6 space-y-1 text-white print:text-black print:text-sm">
                      <li>Introduction to Cloud Computing</li>
                      <li>Networking Essentials</li>
                      <li>Management Information Systems</li>
                      <li>IT for Business Success</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Soft Skills & Languages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200 print:text-xl print:text-black print:border-black">
                    SOFT SKILLS
                  </h2>
                  <ul className="list-disc ml-6 space-y-2 text-white print:text-black print:text-sm">
                    <li><strong>Strong communication & teamwork</strong> - Cross-functional collaboration</li>
                    <li><strong>High attention to detail</strong> - Pixel-perfect implementations</li>
                    <li><strong>Quick learner & adaptable</strong> - Self-taught new frameworks</li>
                    <li><strong>Excellent time management</strong> - Consistently meet deadlines</li>
                    <li><strong>Problem-solving mindset</strong> - Debug complex issues</li>
                    <li><strong>Creative in interface design</strong> - User-centric approach</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200 print:text-xl print:text-black print:border-black">
                    LANGUAGES & AVAILABILITY
                  </h2>
                  <ul className="list-disc ml-6 space-y-2 text-white print:text-black print:text-sm mb-4">
                    <li>Kinyarwanda (Native)</li>
                    <li>English (Fluent - Professional)</li>
                    <li>Swahili (Intermediate)</li>
                  </ul>
                  <p className="text-white print:text-black print:text-sm"><strong>Availability:</strong> Immediately available for onsite position in Kigali</p>
                </div>
              </div>

              {/* References */}
              <div className="mt-8 print:mt-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200 print:text-xl print:text-black print:border-black">
                  REFERENCES
                </h2>
                <p className="text-white print:text-black print:text-sm">Professional references available upon request</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber={whatsappNumber} />

      {/* Footer */}
      <Footer />
    </div>
  );
}