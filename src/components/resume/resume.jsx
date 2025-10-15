import React, { useRef } from "react";

export default function Resume() {
  const resumeRef = useRef();

  const handleDownloadPDF = () => {
    // Dynamically import html2pdf
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = () => {
      const element = resumeRef.current;
      const opt = {
        margin: [0.3, 0.3, 0.3, 0.3],
        filename: 'Prince_Mugabe_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      window.html2pdf().set(opt).from(element).save();
    };
    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Download Button - Only visible on screen */}
      <div className="max-w-4xl mx-auto mb-4 print:hidden mt-10">
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

      {/* Resume Content */}
      <div ref={resumeRef} className="max-w-4xl mx-auto bg-white p-6 shadow-lg print:shadow-none">
        {/* Header */}
        <div className="border-b-2 border-blue-900 pb-2 mb-3">
          <h1 className="text-2xl font-bold text-blue-900 mb-1">
            Prince MUGABE
          </h1>
          <p className="text-xs text-gray-700 leading-snug">
            Self-motivated person who is passionate about technology, innovation
            and challenging tasks to find solutions. Continous learning with strong creative and
            analytical skills. Team player with an eye for details to solve problems and obstacles.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-4 gap-3 mb-3 text-xs text-gray-600">
          <div>
            <p className="font-semibold text-gray-800">Phone</p>
            <p>+250 788 457 408</p>
            <p>+250 789 990 408</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Email</p>
            <p className="break-all">Princemugabe568@gmail.com</p>
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

        {/* Experience Section */}
        <div className="mb-3">
          <h2 className="text-base font-bold pb-1 mb-2 text-blue-900 border-b border-gray-300">
            EXPERIENCE
          </h2>

          {/* Anaweza App Ltd */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Senior Manager at Anaweza App Ltd
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Jan 2025 - Oct 2025
              </span>
            </div>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Developed and maintained full control of the Anaweza platform (www.anaweza.com), a job marketplace connecting job seekers with employers</li>
              <li>Managed all operational activities including customer communications via calls, SMS, WhatsApp, and email</li>
              <li>Served as client service representative and front desk representative while overseeing company-wide operations</li>
              <li>Analyzed business performance and market trends, preparing comprehensive reports with strategic recommendations for Managing Directors</li>
              <li>Demonstrated strong multitasking abilities by simultaneously managing platform operations, customer service, and administrative functions</li>
              <li>Applied critical thinking and analytical skills to identify operational challenges and implement effective solutions</li>
            </ul>
          </div>

          {/* Crystal Water Company */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Senior Manager at Crystal Water Company Ltd
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Jul 2025 - Oct 2025
              </span>
            </div>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Oversaw human resources and vehicle fleet management for a purified drinking water manufacturing and distribution company</li>
              <li>Managed financial statements and monitored business performance metrics</li>
              <li>Coordinated production, distribution, and sales operations to ensure business efficiency</li>
              <li>Monitored vehicle documentation expiration and ensured fleet maintenance standards</li>
              <li>Operated vehicles (cars and motorcycles) for emergency support and vehicle recovery operations when needed</li>
              <li>Conducted situational analysis and prepared detailed reports with actionable recommendations for senior leadership</li>
              <li>Provided strategic insights to improve operational efficiency and business outcomes</li>
            </ul>
          </div>

          {/* M365Connect Internship */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Virtual Assistant Intern at M365Connect
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Sep 2025 - Oct 2025
              </span>
            </div>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Managed email communications and correspondence using Microsoft Outlook, ensuring timely responses to clients and stakeholders</li>
              <li>Coordinated and maintained calendars, scheduling meetings and appointments efficiently</li>
              <li>Utilized Microsoft Teams for internal communication, virtual meetings, and team collaboration</li>
              <li>Performed data entry and document management using SharePoint, maintaining organized and accessible records</li>
              <li>Scheduled and conducted interviews, coordinating with candidates and team members</li>
              <li>Managed WhatsApp communications for quick client interactions and support</li>
              <li>Created and edited documents, presentations, and spreadsheets using Microsoft Word, PowerPoint, and Excel</li>
            </ul>
          </div>

          {/* Car Driver */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Car Driver at Junction Solutions Ltd
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Nov 2024 - Jan 2025
              </span>
            </div>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Transported Junction Solutions staff safely and efficiently to various locations</li>
              <li>Monitored and tracked vehicle documentation expiration dates including insurance, inspection certificates, and registration</li>
              <li>Maintained vehicle welfare by ensuring regular cleaning, routine maintenance, and overall wellbeing of company vehicles</li>
              <li>Conducted pre-trip and post-trip vehicle inspections to ensure safety and operational readiness</li>
            </ul>
          </div>

          {/* Kaby Tech Solutions */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Software Developer at Kaby Tech Solutions ltd
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Feb 2023 - Nov 2024
              </span>
            </div>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Developed and maintained backend infrastructure for various web and mobile applications</li>
              <li>Designed and implemented RESTful APIs to support frontend functionalities</li>
              <li>Collaborated with cross-functional teams to define, design, and ship new features</li>
            </ul>
          </div>

          {/* Crystal Water - Sales Contributor */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Sales Contributor and Market Researcher at Crystal Water CO LTD
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Aug 2018 - Jul 2020
              </span>
            </div>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Conducted market research to identify potential sales opportunities and target markets</li> <br /><br />
              <li>Analyzed market trends, competitor activities, and consumer preferences to inform business strategies</li>
              <li>Developed and executed sales plans to achieve company objectives</li>
            </ul>
          </div>

          {/* Assistant Teacher */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Assistant Teacher at Groupe Scolaire Ndego I
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Jan 2018 - Jul 2018
              </span>
            </div>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Assisted lead teachers in planning and delivering English lessons to students at various levels</li>
              <li>Maintained high standards of teaching and proficiency levels</li>
              <li>Conducted small group and one-on-one tutoring sessions to provide additional support to students</li>
              <li>Developed and implemented engaging lesson plans that enhanced students' reading, writing, speaking, and listening skills</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-3">
          <h2 className="text-base font-bold text-blue-900 pb-1 mb-2 border-b border-gray-300">
            EDUCATION
          </h2>

          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="text-sm font-bold text-black">
                Bachelor's Degree in Software Engineering
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                2020 - 2024
              </span>
            </div>
            <p className="text-xs text-gray-700">
              Adventist University of Central Africa (AUCA)
            </p>
          </div>

          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="text-sm font-bold text-black">
                Advanced Certificate in English Kiswahili-Kinyarwanda (EKK)
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                2015 - 2017
              </span>
            </div>
            <p className="text-xs text-gray-700">Groupe scolaire Ndego I</p>
          </div>
        </div>

        {/* Professional Development Section */}
        <div className="mb-3">
          <h2 className="text-base font-bold text-blue-900 pb-1 mb-2 border-b border-gray-300">
            PROFESSIONAL DEVELOPMENT
          </h2>

          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Virtual Assistance Training & Certification
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Sep 2025 - Nov 2025
              </span>
            </div>
            <p className="text-xs text-black mb-1">ALX Rwanda</p>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Completed comprehensive virtual assistance training covering calendar management, email management, and task prioritization</li>
              <li>Developed expertise in customer service, administrative support, and professional communication</li>
              <li>Gained proficiency in data entry, document management, and file organization</li>
              <li>Learned project coordination, meeting scheduling, and time management techniques</li>
              <li>Acquired skills in client relationship management and remote work best practices</li>
            </ul>
          </div>

          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Job Readiness Program
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Jul 2024 - Sep 2024
              </span>
            </div>
            <p className="text-xs text-black mb-1">Harambee</p>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Developed professional resume writing and cover letter composition skills</li>
              <li>Enhanced interview techniques including behavioral and competency-based interview preparation</li>
              <li>Strengthened professional communication skills for workplace environments</li>
              <li>Gained workplace readiness competencies including punctuality, work ethics, and professional demeanor</li>
              <li>Improved teamwork and collaboration abilities through group activities and projects</li>
              <li>Learned networking strategies and personal branding for career advancement</li>
            </ul>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-3">
          <h2 className="text-base font-bold text-blue-900 pb-1 mb-2 border-b border-gray-300">
            CERTIFICATIONS
          </h2>
          <div className="grid grid-cols-2 gap-x-4">
            {/* Left Column */}
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
              <li>Driving License Category A and B</li>
              <li>Networking Essential Knowledge</li>
              <li>Advanced Leadership Management</li>
              <li>English proficiency</li>
              <li>Data security</li>
              <li>Introduction to cloud computing</li>
            </ul>

            {/* Right Column */}
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
              <li>Operating Systems</li>
              <li>Advanced Database Systems</li>
              <li>Data Analyst 101: Excel Formulas</li>
              <li>Management Information System</li>
              <li>IT For Business Success</li>
            </ul>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mb-3">
          <h2 className="text-base font-bold text-blue-900 pb-1 mb-2 border-b border-gray-300">
            LANGUAGES
          </h2>
          <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
            <li>Kinyarwanda (Native)</li>
            <li>English (Fluent)</li>
            <li>Swahili (Intermediate)</li>
          </ul>
        </div>

        {/* References */}
        <div className="mb-2">
          <h2 className="text-base font-bold text-blue-900 pb-1 mb-2 border-b border-gray-300">
            REFERENCES
          </h2>
          <p className="text-xs italic text-gray-700">Available upon request</p>
        </div>
      </div>
    </div>
  );
}