import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-shell about-grid">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">About the engineer</p>
          <h2>Turning complex ideas into useful systems.</h2>
          <p>I am a results-driven software engineer based in Kigali, Rwanda. I work across full-stack development, mobile applications, machine learning, and software testing, with a practical focus on solutions people can actually use.</p>
        </div>

        <div className="about-details" data-aos="fade-up">
          {/* Programming Languages Section */}
          <div>
            <h3>Education</h3>
            <div className="education-entry">
              <strong>Master's in Big Data Analytics</strong>
              <span>Currently studying · Early stage</span>
              <p>Building foundations in large-scale data, analytics, and machine learning. Projects will be added as the programme progresses.</p>
            </div>
          </div>

          <div>
            <h3>Languages</h3>
            <div className="about-list">
              <ul>
                <li>Python</li><li>Java</li><li>JavaScript</li><li>TypeScript</li>
              </ul>
              <ul>
                <li>C#</li><li>PHP</li><li>Dart</li><li>SQL</li>
              </ul>
            </div>
          </div>

          {/* Frameworks & Libraries Section */}
          <div>
            <h3>Frameworks & libraries</h3>
            <div className="about-list">
              <ul>
                <li>Django</li><li>ASP.NET</li><li>ASP.NET Core</li><li>Flask</li>
              </ul>
              <ul>
                <li>JSP</li><li>Spring Boot</li><li>React.js</li><li>Flutter</li>
              </ul>
            </div>
          </div>

          {/* Databases Section */}
          <div>
            <h3>Data & AI</h3>
            <div className="about-list">
              <ul>
                <li>PostgreSQL</li><li>MySQL</li><li>SQL Server</li><li>TensorFlow</li>
              </ul>
              <ul>
                <li>Machine learning</li><li>Data analysis</li><li>Software testing</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
