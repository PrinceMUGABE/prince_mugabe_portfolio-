import React from "react";

const Skills = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        

        <div className="space-y-8">
          

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



export default Skills;
