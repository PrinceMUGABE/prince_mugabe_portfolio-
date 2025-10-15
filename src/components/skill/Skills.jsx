import React from "react";
import { 
  FaCode, 
  FaPython, 
  FaJava, 
  FaReact, 
  FaNode,
  FaDatabase, 
  FaCloud, 
  FaChartLine, 
  FaBrain,
  FaPhp,
  FaMobile
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaCode className="text-yellow-500" /> },
      { name: "TypeScript", icon: <FaCode className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "C#", icon: <FaCode className="text-purple-600" /> },
      { name: "PHP", icon: <FaPhp className="text-blue-700" /> },
      { name: "Dart", icon: <FaCode className="text-blue-400" /> },
      { name: "SQL", icon: <FaDatabase className="text-green-600" /> }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Django", icon: <FaCode className="text-green-700" /> },
      { name: "ASP.NET", icon: <FaCode className="text-purple-500" /> },
      { name: "Flask", icon: <FaCode className="text-green-500" /> },
      { name: "Spring Boot", icon: <FaCode className="text-green-600" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNode className="text-green-600" /> },
      { name: "Flutter", icon: <FaMobile className="text-blue-500" /> }
    ]
  },
  {
    title: "Data & AI Technologies",
    skills: [
      { name: "Machine Learning", icon: <FaBrain className="text-purple-600" /> },
      { name: "Data Analysis", icon: <FaChartLine className="text-red-600" /> },
      { name: "TensorFlow", icon: <FaCode className="text-orange-600" /> }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Analytical Thinking", icon: <FaChartLine className="text-blue-600" /> },
      { name: "Problem-Solving", icon: <FaBrain className="text-green-600" /> },
      { name: "Adaptability", icon: <FaCode className="text-yellow-600" /> },
      { name: "Teamwork", icon: <FaCode className="text-blue-500" /> },
      { name: "Agile Methodologies", icon: <FaCloud className="text-green-500" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Professional Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-400 border-b pb-2">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center space-x-4 text-gray-700 dark:text-gray-300"
                  >
                    {skill.icon}
                    <span className="text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A versatile software engineer with a passion for creating innovative solutions, combining technical expertise with strategic thinking to develop cutting-edge technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;