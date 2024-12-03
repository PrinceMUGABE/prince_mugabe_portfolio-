import React from "react";

const Services = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-4">Skills</h2>
          {/* <p className="text-xl text-gray-600 dark:text-gray-300">
            I am a passionate and results-driven Software Engineer with a strong foundation in computer science and a wide range of technical skills. I specialize in full-stack web development, mobile applications, and software testing. With a commitment to continuous learning and problem-solving, I thrive in dynamic and fast-paced environments.
          </p> */}
        </div>

        <div className="space-y-8">
          {/* Programming Languages Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">Programming Languages</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg text-gray-700 dark:text-gray-300">
              <ul>
                <li>🔹 Python</li>
                <li>🔹 Java</li>
                <li>🔹 JavaScript</li>
                <li>🔹 TypeScript</li>
              </ul>
              <ul>
                <li>🔹 C#</li>
                <li>🔹 PHP</li>
                <li>🔹 Dart</li>
                <li>🔹 SQL</li>
              </ul>
            </div>
          </div>

          {/* Frameworks & Libraries Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">Frameworks & Libraries</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg text-gray-700 dark:text-gray-300">
              <ul>
                <li>🔹 Django</li>
                <li>🔹 ASP.NET</li>
                <li>🔹 ASP.NET Core</li>
                <li>🔹 Flask</li>
              </ul>
              <ul>
                <li>🔹 JSP</li>
                <li>🔹 Spring Boot</li>
                <li>🔹 React.js</li>
                <li>🔹 Flutter</li>
              </ul>
            </div>
          </div>

          {/* Databases Section */}
          {/* <div>
            <h3 className="text-2xl font-semibold text-blue-600">Databases</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg text-gray-700 dark:text-gray-300">
              <ul>
                <li>🔹 PostgreSQL</li>
              </ul>
              <ul>
                <li>🔹 MySQL</li>
              </ul>
              <ul>
                <li>🔹 SQL Server</li>
              </ul>
            </div>
          </div> */}

          {/* Key Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">Key Skills</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg text-gray-700 dark:text-gray-300">
              <ul>
                <li>🔹 Analytical Thinking</li>
                <li>🔹 Problem-Solving</li>
                <li>🔹 Critical Thinking</li>
              </ul>
              <ul>
                <li>🔹 Adaptability</li>
                <li>🔹 Teamwork</li>
                <li>🔹 Time Management</li>
              </ul>
              <ul>
                <li>🔹 Quick Learning</li>
                <li>🔹 Decision Making</li>
                <li>🔹 Quality Management</li>
                <li>🔹 Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            As a dedicated software engineer, I am committed to delivering high-quality solutions, collaborating in diverse teams, and continuously enhancing my skills to stay ahead of the curve.
          </p>
        </div>
      </div>
    </section>
  );
};



export default Services;
