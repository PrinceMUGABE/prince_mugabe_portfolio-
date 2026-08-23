import React from "react";
import { FaBrain, FaChartLine, FaCode, FaDatabase, FaJava, FaNodeJs, FaPython, FaReact, FaShieldHalved } from "react-icons/fa6";

const skillCategories = [
  { index: "01", title: "Core languages", description: "The languages I use to shape application logic and reliable data workflows.", skills: [["Python", FaPython], ["JavaScript", FaCode], ["Java", FaJava], ["C#", FaCode], ["Dart", FaCode], ["SQL", FaDatabase]] },
  { index: "02", title: "Application stack", description: "Frameworks for building useful interfaces, APIs, and maintainable services.", skills: [["React.js", FaReact], ["Node.js", FaNodeJs], ["Django", FaCode], ["ASP.NET Core", FaCode], ["Flask", FaCode], ["Spring Boot", FaCode]] },
  { index: "03", title: "Data & intelligence", description: "A growing focus on analytics and intelligent systems, grounded in practical software.", skills: [["Machine learning", FaBrain], ["Data analysis", FaChartLine], ["TensorFlow", FaBrain], ["PostgreSQL", FaDatabase], ["MySQL", FaDatabase], ["SQL Server", FaDatabase]] },
  { index: "04", title: "Engineering practice", description: "Ways of working that keep projects clear, testable, and focused on their users.", skills: [["Software testing", FaShieldHalved], ["System design", FaCode], ["Problem-solving", FaBrain], ["Agile methods", FaChartLine], ["Technical documentation", FaCode], ["Teamwork", FaShieldHalved]] },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="section-shell">
      <div className="skills-heading" data-aos="fade-up">
        <div><p className="eyebrow">How I work</p><h2>A toolkit for thoughtful delivery.</h2></div>
        <p>My strongest work sits at the intersection of product clarity, full-stack engineering, and data-informed thinking.</p>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skill-card" key={category.index} data-aos="fade-up">
            <div className="skill-card-top"><span>{category.index}</span><div /></div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <ul>{category.skills.map(([name, Icon]) => <li key={name}><Icon aria-hidden="true" />{name}</li>)}</ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;