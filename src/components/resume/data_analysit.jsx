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
      filename: 'Prince_Mugabe_Data_Analyst_Resume.pdf',
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
      {/* Download Button */}
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

      {/* Resume Content */}
      <div ref={resumeRef} className="max-w-4xl mx-auto bg-white p-6 shadow-lg print:shadow-none">
        {/* Header */}
        <div className="border-b-2 border-blue-900 pb-2 mb-3">
          <h1 className="text-3xl font-bold text-blue-900 mb-1">
            Prince MUGABE
          </h1>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">JUNIOR DATA ANALYST</h2>
          <p className="text-xs text-gray-700 leading-snug">
            Results-driven data analyst with a strong foundation in Information Technology and hands-on experience 
            in data management, business analytics, and operational reporting. Proficient in Microsoft Excel, SQL, 
            Python, and data visualization. Skilled in transforming raw data into actionable insights to support 
            strategic decision-making. Strong analytical mindset with excellent attention to detail and proven 
            ability to collaborate across departments.
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

        {/* Technical Skills Highlight */}
        <div className="mb-4 bg-blue-50 p-3 rounded">
          <h2 className="text-sm font-bold text-blue-900 mb-2">
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <p className="font-semibold text-gray-800 mb-1">Data Analysis & Visualization</p>
              <ul className="space-y-0.5 text-gray-700">
                <li>• Microsoft Excel (Advanced)</li>
                <li>• Pivot Tables & Charts</li>
                <li>• Data Modeling</li>
                <li>• Dashboard Creation</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Programming & Database</p>
              <ul className="space-y-0.5 text-gray-700">
                <li>• Python (Data Analysis)</li>
                <li>• SQL (MySQL/MariaDB)</li>
                <li>• Database Management</li>
                <li>• API Development</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Tools & Platforms</p>
              <ul className="space-y-0.5 text-gray-700">
                <li>• Microsoft Office Suite</li>
                <li>• Power Query</li>
                <li>• Data Entry & Cleaning</li>
                <li>• Report Generation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-4">
          <h2 className="text-sm font-bold pb-1 mb-2 text-blue-900 border-b-2 border-blue-900">
            PROFESSIONAL EXPERIENCE
          </h2>

          {/* Anaweza App Ltd */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Senior Analyst & Operations Manager
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Jan 2025 - Oct 2025
              </span>
            </div>
            <p className="text-xs text-gray-700 mb-1 italic">Anaweza App Ltd, Kigali</p>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Analyzed business performance data and market trends using Excel, generating comprehensive reports with strategic recommendations for senior management</li>
              <li>Monitored and tracked key performance indicators (KPIs) for the Anaweza job marketplace platform, identifying trends and optimization opportunities</li>
              <li>Collected, cleaned, and organized operational data from multiple sources including customer interactions, platform analytics, and market research</li>
              <li>Created data visualizations and dashboards to present insights on user engagement, customer satisfaction, and business growth metrics</li>
              <li>Conducted data-driven analysis to identify operational challenges and implemented solutions that improved platform efficiency</li>
              <li>Managed database records and ensured data integrity across customer communications systems (calls, SMS, WhatsApp, email)</li>
              <li>Collaborated with cross-functional teams to define data requirements and deliver actionable insights for decision-making</li>
            </ul>
          </div>

          {/* Crystal Water Company */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Senior Manager & Data Coordinator
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Jul 2025 - Oct 2025
              </span>
            </div>
            <p className="text-xs text-gray-700 mb-1 italic">Crystal Water Company Ltd, Kigali</p>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Managed and analyzed operational data including production metrics, distribution statistics, inventory levels, and sales performance</li>
              <li>Tracked and monitored vehicle fleet documentation expiration dates using Excel spreadsheets, ensuring compliance and timely renewals</li>
              <li>Conducted situational analysis by collecting and interpreting business data to prepare detailed reports with actionable recommendations</li>
              <li>Created and maintained Excel models for tracking HR metrics, fleet management data, and operational KPIs</li>
              <li>Performed data entry and documentation management for manufacturing and distribution operations</li>
              <li>Generated regular performance reports to support leadership decision-making and improve operational efficiency</li>
            </ul>
          </div>

          {/* M365Connect Internship */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Virtual Assistant Intern
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Sep 2025 - Oct 2025
              </span>
            </div>
            <p className="text-xs text-gray-700 mb-1 italic">M365Connect (Remote)</p>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Performed systematic data entry and document management using SharePoint, maintaining organized and accessible records</li>
              <li>Created and edited spreadsheets, reports, and presentations using Microsoft Excel, Word, and PowerPoint</li>
              <li>Managed scheduling data and coordinated calendars, demonstrating strong organizational and time management skills</li>
              <li>Utilized Microsoft Teams and Outlook for efficient communication and collaboration on data-related tasks</li>
            </ul>
          </div>

          {/* Kaby Tech Solutions */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Software Developer Intern
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Feb 2023 - Nov 2024
              </span>
            </div>
            <p className="text-xs text-gray-700 mb-1 italic">Kaby Tech Solutions Ltd, Kigali</p>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Developed and maintained backend infrastructure and databases for web and mobile applications</li>
              <li>Designed and implemented RESTful APIs with SQL database integration to support data-driven functionalities</li>
              <li>Worked with databases (MySQL) to query, analyze, and manage application data</li>
              <li>Collaborated with cross-functional teams using data to define requirements and optimize application performance</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-blue-900 pb-1 mb-2 border-b-2 border-blue-900">
            EDUCATION
          </h2>

          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="text-sm font-bold text-black">
                Bachelor of Science in Information Technology
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                2020 - 2024
              </span>
            </div>
            <p className="text-xs text-gray-700 mb-1">Software Engineering Department | Adventist University of Central Africa (AUCA)</p>
            <p className="text-xs text-gray-700 italic">Relevant Coursework: Database Systems, Advanced Database Management, Data Structures, Programming, Management Information Systems</p>
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
            <p className="text-xs text-gray-700">Groupe Scolaire Ndego I</p>
          </div>
        </div>

        {/* Professional Development & Certifications */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-blue-900 pb-1 mb-2 border-b-2 border-blue-900">
            PROFESSIONAL DEVELOPMENT & CERTIFICATIONS
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xs font-bold text-black mb-1">Professional Training:</h3>
              <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
                <li><strong>Virtual Assistance Training</strong> - ALX Rwanda (Sep-Nov 2025): Data entry, document management, Excel proficiency</li>
                <li><strong>Job Readiness Program</strong> - Harambee (Jul-Sep 2024): Professional communication, teamwork, workplace competencies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-black mb-1">Technical Certifications:</h3>
              <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
                <li>Python for Machine Learning</li>
                <li>Advanced Database Systems</li>
                <li>Management Information System</li>
                <li>Operating Systems</li>
                <li>Data Security</li>
                <li>Introduction to Cloud Computing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Competencies */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-blue-900 pb-1 mb-2 border-b-2 border-blue-900">
            KEY COMPETENCIES
          </h2>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <ul className="list-disc ml-4 space-y-0.5 text-gray-700">
              <li>Data Collection & Cleaning</li>
              <li>Statistical Analysis</li>
              <li>Report Writing</li>
            </ul>
            <ul className="list-disc ml-4 space-y-0.5 text-gray-700">
              <li>Problem-Solving Skills</li>
              <li>Attention to Detail</li>
              <li>Cross-Functional Collaboration</li>
            </ul>
            <ul className="list-disc ml-4 space-y-0.5 text-gray-700">
              <li>Critical Thinking</li>
              <li>Time Management</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>

        {/* Languages and References */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-sm font-bold text-blue-900 pb-1 mb-1 border-b-2 border-blue-900">
              LANGUAGES
            </h2>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
              <li>Kinyarwanda (Native)</li>
              <li>English (Fluent)</li>
              <li>Swahili (Intermediate)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-blue-900 pb-1 mb-1 border-b-2 border-blue-900">
              REFERENCES
            </h2>
            <p className="text-xs text-gray-700">Available upon request</p>
          </div>
        </div>
      </div>
    </div>
  );
}