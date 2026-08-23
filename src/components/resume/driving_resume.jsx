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
      filename: 'Prince_Mugabe_Driver_Resume.pdf',
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
          <h2 className="text-lg font-semibold text-gray-800 mb-2">PROFESSIONAL DRIVER</h2>
          <p className="text-xs text-gray-700 leading-snug">
            Experienced and safety-focused professional driver with proven expertise in vehicle operations, 
            fleet management, and logistics coordination. Holds valid driving licenses for both Category A 
            (motorcycles) and Category B (cars). Demonstrated track record in maintaining vehicle welfare, 
            managing documentation, and ensuring safe, efficient transportation services. Strong work ethic 
            with excellent time management, route planning, and customer service skills.
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
            <p className="font-semibold text-gray-800">License</p>
            <p className="font-semibold text-blue-700">Category A & B</p>
          </div>
        </div>

        {/* Professional Summary - Key Skills Highlight */}
        <div className="mb-4 bg-blue-50 p-3 rounded">
          <h2 className="text-sm font-bold text-blue-900 mb-2">
            CORE COMPETENCIES
          </h2>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <ul className="space-y-1">
              <li>✓ Safe Driving Practices</li>
              <li>✓ Vehicle Maintenance</li>
              <li>✓ Route Planning & Navigation</li>
            </ul>
            <ul className="space-y-1">
              <li>✓ Fleet Management</li>
              <li>✓ Documentation Management</li>
              <li>✓ Emergency Response</li>
            </ul>
            <ul className="space-y-1">
              <li>✓ Customer Service</li>
              <li>✓ Time Management</li>
              <li>✓ Logistics Coordination</li>
            </ul>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-4">
          <h2 className="text-sm font-bold pb-1 mb-2 text-blue-900 border-b-2 border-blue-900">
            PROFESSIONAL DRIVING EXPERIENCE
          </h2>

          {/* Crystal Water Company - Senior Manager with Driving */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Senior Manager & Fleet Operations
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Jul 2025 - Oct 2025
              </span>
            </div>
            <p className="text-xs text-gray-700 mb-1 italic">Crystal Water Company Ltd, Kigali</p>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Operated company vehicles (cars and motorcycles) for emergency deliveries, operational support, and vehicle recovery operations</li>
              <li>Managed comprehensive fleet operations including vehicle maintenance scheduling, documentation tracking, and compliance monitoring</li>
              <li>Monitored and tracked vehicle documentation including insurance, inspection certificates, registration, and technical control expiration dates</li>
              <li>Ensured optimal vehicle condition through regular inspections, maintenance coordination, and cleaning protocols</li>
              <li>Coordinated distribution logistics and emergency transportation for a manufacturing and distribution company</li>
              <li>Maintained detailed records of vehicle usage, maintenance history, and operational costs</li>
              <li>Demonstrated reliability and quick response during urgent transportation needs and vehicle recovery situations</li>
            </ul>
          </div>

          {/* Junction Solutions - Professional Driver */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Professional Car Driver
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Nov 2024 - Jan 2025
              </span>
            </div>
            <p className="text-xs text-gray-700 mb-1 italic">Junction Solutions Ltd, Kigali</p>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Provided safe and efficient transportation services for company staff to various locations across Kigali</li>
              <li>Conducted thorough pre-trip and post-trip vehicle inspections to ensure safety and operational readiness</li>
              <li>Maintained comprehensive vehicle documentation tracking system for insurance, inspection certificates, and registration renewals</li>
              <li>Ensured excellent vehicle welfare through regular cleaning, routine maintenance coordination, and prompt issue reporting</li>
              <li>Demonstrated punctuality and reliability, consistently meeting scheduled pick-up and drop-off times</li>
              <li>Practiced defensive driving techniques and maintained a clean driving record with zero accidents</li>
              <li>Coordinated with management for vehicle service appointments and emergency repairs</li>
            </ul>
          </div>

          {/* Anaweza - Operations with Driving Support */}
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Operations Coordinator
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Jan 2025 - Oct 2025
              </span>
            </div>
            <p className="text-xs text-gray-700 mb-1 italic">Anaweza App Ltd, Kigali</p>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Provided transportation support for company operations and client meetings when required</li>
              <li>Demonstrated strong multitasking abilities managing operations, customer service, and driving responsibilities</li>
              <li>Applied critical thinking and problem-solving skills to logistics and route optimization</li>
              <li>Maintained professional communication with clients during transportation services</li>
            </ul>
          </div>
        </div>

        {/* Additional Relevant Experience */}
        <div className="mb-4">
          <h2 className="text-sm font-bold pb-1 mb-2 text-blue-900 border-b-2 border-blue-900">
            ADDITIONAL EXPERIENCE
          </h2>

          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-bold text-black">
                Virtual Assistant & Administrative Support
              </h3>
              <span className="text-xs font-semibold text-gray-700">
                Sep 2025 - Oct 2025
              </span>
            </div>
            <p className="text-xs text-gray-700 mb-1 italic">M365Connect (Remote)</p>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700 leading-snug">
              <li>Managed scheduling, calendar coordination, and appointment arrangements</li>
              <li>Developed strong organizational and time management skills applicable to route planning and scheduling</li>
              <li>Enhanced customer service and professional communication abilities</li>
            </ul>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-blue-900 pb-1 mb-2 border-b-2 border-blue-900">
            EDUCATION & CERTIFICATIONS
          </h2>

          <div className="mb-2">
            <div className="bg-yellow-50 p-2 rounded mb-2">
              <h3 className="text-sm font-bold text-black mb-1">
                🚗 DRIVING LICENSES
              </h3>
              <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
                <li><strong>Category A License:</strong> Motorcycles - Valid and Current</li>
                <li><strong>Category B License:</strong> Cars and Light Vehicles - Valid and Current</li>
                <li>Clean driving record with no accidents or violations</li>
              </ul>
            </div>
          </div>

          <div className="mb-2">
            <h3 className="text-sm font-bold text-black">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-xs text-gray-700">Adventist University of Central Africa (AUCA) | 2020 - 2024</p>
          </div>

          <div className="mb-2">
            <h3 className="text-xs font-bold text-black mb-1">Professional Certifications:</h3>
            <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
              <li>Virtual Assistance Training & Certification - ALX Rwanda (2025)</li>
              <li>Job Readiness Program - Harambee (2024)</li>
              <li>Customer Relationship Management Certification</li>
              <li>English Proficiency Certification</li>
            </ul>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-blue-900 pb-1 mb-2 border-b-2 border-blue-900">
            PROFESSIONAL SKILLS
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xs font-semibold text-black mb-1">Driving & Vehicle Management</h3>
              <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
                <li>Defensive driving techniques</li>
                <li>Vehicle maintenance knowledge</li>
                <li>Fleet documentation management</li>
                <li>Route optimization & navigation</li>
                <li>Emergency vehicle operations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-black mb-1">Professional Qualities</h3>
              <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
                <li>Excellent punctuality and reliability</li>
                <li>Strong customer service orientation</li>
                <li>Professional communication skills</li>
                <li>Attention to detail and safety</li>
                <li>Problem-solving abilities</li>
              </ul>
            </div>
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