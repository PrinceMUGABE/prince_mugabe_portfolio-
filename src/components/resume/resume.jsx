import React, { useRef } from "react";

export default function Resume() {
  const resumeRef = useRef();

  const handleDownloadPDF = () => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = () => {
      const element = resumeRef.current;
      
      const opt = {
        margin: 0.2,
        filename: 'Prince_Mugabe_Technical_Support_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          scrollY: 0,
          windowHeight: element.offsetHeight
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait'
        }
      };

      setTimeout(() => {
        window.html2pdf().set(opt).from(element).save();
      }, 100);
    };
    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-2">
      <div className="max-w-4xl mx-auto mb-4 print:hidden mt-1">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold shadow-lg flex items-center gap-2"
        >
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
          Download as PDF
        </button>
      </div>

      <div ref={resumeRef} className="max-w-4xl mx-auto bg-white p-6 shadow-lg print:shadow-none">
        {/* Header */}
        <div className="border-b-2 border-blue-900 pb-2 mb-3">
          <h1 className="text-xl font-bold text-blue-900 mb-1">
            PRINCE MUGABE
          </h1>
          <p className="text-xs text-gray-700 leading-snug">
            Customer-focused Technical Support Professional with proven experience in troubleshooting, problem-solving, and delivering exceptional customer service. Passionate about technology with strong analytical skills and ability to work independently and collaboratively in dynamic environments.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-4 gap-3 mb-4 text-xs text-gray-600">
          <div>
            <p className="font-semibold text-gray-800">Phone</p>
            <p>+250 789 990 408</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Email</p>
            <p className="break-all">iribagizaisimbi568@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Address</p>
            <p>Kigali, Rwanda</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Portfolio</p>
            <a
              className="text-blue-700 hover:text-gray-700 break-all text-xs"
              href="https://prince-mugabe-portfolio.netlify.app/"
            >
              prince-mugabe-portfolio.netlify.app
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-4">
          <h2 className="text-sm font-bold pb-1 mb-2 text-blue-900 border-b border-gray-300">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-xs text-gray-700 leading-relaxed">
            IT professional with Bachelor's degree in Software Engineering and hands-on experience in technical support, customer service, and platform management. Demonstrated expertise in troubleshooting technical issues, managing customer communications across multiple channels, and delivering solutions under pressure. Strong background in software development, database systems, and cloud computing with proven ability to adapt quickly to new technologies and work effectively in fast-paced environments.
          </p>
        </div>

        {/* Key Skills */}
        <div className="mb-4">
          <h2 className="text-sm font-bold pb-1 mb-2 text-blue-900 border-b border-gray-300">
            KEY TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-2 gap-x-6">
            <ul className="list-disc ml-4 space-y-1 text-xs text-gray-700">
              <li>Technical Troubleshooting & Problem-Solving</li>
              <li>Customer Service & Support (Phone, Email, WhatsApp)</li>
              <li>Database Systems (SQL Server, Advanced Database)</li>
              <li>Cloud Computing & Azure Fundamentals</li>
              <li>Microsoft Office 365 Suite (Outlook, Teams, SharePoint)</li>
              <li>Remote Support & Screen Sharing Tools</li>
            </ul>
            <ul className="list-disc ml-4 space-y-1 text-xs text-gray-700">
              <li>Software Development (Backend & API Development)</li>
              <li>Windows Server & Active Directory Basics</li>
              <li>Time Management & Multitasking</li>
              <li>Analytical & Critical Thinking</li>
              <li>Documentation & Report Writing</li>
              <li>Team Collaboration & Independent Work</li>
            </ul>
          </div>
        </div>

        {/* Relevant Experience */}
        <div className="mb-4">
          <h2 className="text-sm font-bold pb-1 mb-2 text-blue-900 border-b border-gray-300">
            RELEVANT EXPERIENCE
          </h2>

          {/* Anaweza App */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-xs font-bold text-black">
                Platform Manager & Technical Support Representative
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Jan 2025 - Oct 2025
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-1 italic">Anaweza App Ltd - Job Marketplace Platform (www.anaweza.com)</p>
            <ul className="list-disc ml-4 space-y-1 text-xs text-gray-700 leading-snug">
              <li>Provided technical support and customer service via multiple channels (phone, email, SMS, WhatsApp) resolving platform-related issues and user inquiries</li>
              <li>Managed full operational control of online platform, troubleshooting technical problems and ensuring system functionality</li>
              <li>Diagnosed and resolved customer technical issues independently while maintaining high service quality and customer satisfaction</li>
              <li>Analyzed platform performance data and prepared comprehensive reports with actionable recommendations for management</li>
              <li>Demonstrated strong multitasking abilities managing simultaneous customer cases while maintaining professional communication</li>
              <li>Applied critical thinking to identify root causes of technical issues and implement effective solutions</li>
              <li>Collaborated with stakeholders to improve user experience and platform efficiency</li>
            </ul>
          </div>

          {/* Virtual Assistant Internship */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-xs font-bold text-black">
                Virtual Assistant Intern - Microsoft 365 Specialist
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Sep 2025 - Oct 2025
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-1 italic">M365Connect</p>
            <ul className="list-disc ml-4 space-y-1 text-xs text-gray-700 leading-snug">
              <li>Managed customer communications using Microsoft Outlook, ensuring timely responses and professional correspondence</li>
              <li>Utilized Microsoft Teams for virtual meetings, remote collaboration, and technical support sessions</li>
              <li>Performed data entry and document management using SharePoint, maintaining organized digital records</li>
              <li>Coordinated scheduling, calendar management, and meeting organization for multiple stakeholders</li>
              <li>Created and edited professional documents using Microsoft Word, Excel, and PowerPoint</li>
              <li>Provided technical assistance to clients via WhatsApp and email, resolving queries efficiently</li>
            </ul>
          </div>

          {/* Software Developer Intern */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-xs font-bold text-black">
                Software Developer Intern
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Feb 2023 - Nov 2024
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-1 italic">Kaby Tech Solutions Ltd</p>
            <ul className="list-disc ml-4 space-y-1 text-xs text-gray-700 leading-snug">
              <li>Developed and maintained backend infrastructure for web and mobile applications using modern technologies</li>
              <li>Designed and implemented RESTful APIs supporting frontend functionalities and third-party integrations</li>
              <li>Troubleshot and debugged software issues, providing technical solutions to improve application performance</li>
              <li>Collaborated with cross-functional teams to define technical requirements and deliver new features</li>
              <li>Gained hands-on experience with database management, SQL queries, and system integration</li>
            </ul>
          </div>

          {/* Operations Manager */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-xs font-bold text-black">
                Operations Manager
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Jul 2025 - Oct 2025
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-1 italic">Crystal Water Company Ltd</p>
            <ul className="list-disc ml-4 space-y-1 text-xs text-gray-700 leading-snug">
              <li>Managed operational systems and coordinated teams to ensure business efficiency and productivity</li>
              <li>Analyzed business performance data and prepared detailed reports with strategic recommendations</li>
              <li>Demonstrated ability to work under pressure while managing multiple priorities simultaneously</li>
              <li>Provided technical and operational support to resolve business challenges effectively</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-blue-900 pb-1 mb-2 border-b border-gray-300">
            EDUCATION
          </h2>

          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="text-xs font-bold text-black">
                Bachelor of Science in Information Technology (Software Engineering)
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                2020 - 2024
              </span>
            </div>
            <p className="text-xs text-gray-700">Adventist University of Central Africa (AUCA)</p>
            <p className="text-xs text-gray-600 italic mt-1">
              Relevant Coursework: Database Systems, Operating Systems, Networking, Cloud Computing, Data Security, Management Information Systems
            </p>
          </div>
        </div>

        {/* Professional Development */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-blue-900 pb-1 mb-2 border-b border-gray-300">
            PROFESSIONAL TRAINING & CERTIFICATIONS
          </h2>

          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-xs font-bold text-black">
                Virtual Assistance Training & Certification
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Sep - Nov 2025
              </span>
            </div>
            <p className="text-xs text-black mb-1">ALX Rwanda</p>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Customer service excellence, professional communication, and client relationship management</li>
              <li>Microsoft 365 tools proficiency (Outlook, Teams, SharePoint, Word, Excel, PowerPoint)</li>
              <li>Time management, task prioritization, and remote work best practices</li>
            </ul>
          </div>

          <div className="mb-2">
            <p className="text-xs font-semibold text-black mb-1">Additional Certifications:</p>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
                <li>Introduction to Cloud Computing</li>
                <li>Data Security Fundamentals</li>
                <li>Networking Essential Knowledge</li>
                <li>Advanced Database Systems</li>
              </ul>
              <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
                <li>Operating Systems</li>
                <li>Customer Relationship Management</li>
                <li>Management Information Systems</li>
                <li>IT for Business Success</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Languages and Availability */}
        <div className="grid grid-cols-2 gap-6 mb-3">
          <div>
            <h2 className="text-sm font-bold text-blue-900 pb-1 mb-2 border-b border-gray-300">
              LANGUAGES
            </h2>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
              <li>English (Fluent - Written and Spoken)</li>
              <li>Kinyarwanda (Native)</li>
              <li>Swahili (Intermediate)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-blue-900 pb-1 mb-2 border-b border-gray-300">
              ADDITIONAL INFORMATION
            </h2>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
              <li>Available for in-office work in Kigali</li>
              <li>Strong adaptability to dynamic environments</li>
              <li>Self-learner with passion for technology</li>
              <li>References available upon request</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}