import React from "react";
import { FaArrowUpRightFromSquare, FaGithub, FaCodeBranch } from "react-icons/fa6";

const featuredProjects = [
  {
    number: "01",
    title: "Disaster Guard",
    description: "A full-stack public-safety platform that combines disaster trend prediction with real-time alerts and data visualization, helping people understand risk signals and respond to cha[...]",
    technologies: ["React", "Django", "Python", "MySQL", "Machine Learning"],
    liveDemo: "https://disaster-guard-system.vercel.app/",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/PrinceMUGABE/disaster-guard-frontend-with-react.js" },
      { label: "Backend", url: "https://github.com/PrinceMUGABE/disaster-guard-backend-with-django" },
    ],
  },
  {
    number: "02",
    title: "Smart Logistic Management System",
    description: "A logistics operations platform for fleet tracking, route visibility, reporting, and real-time monitoring across the movement of goods.",
    technologies: ["React", "Django", "Python", "MySQL", "Real-time Data"],
    liveDemo: "https://smart-logistic-management-system-one.vercel.app/",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/PrinceMUGABE/Smart-Logistic-Management-System-SLMS-Frontend" },
      { label: "Backend", url: "https://github.com/PrinceMUGABE/Smart-Logistic-Manageme-t-System-SLMS-Backend" },
    ],
  },
  {
    number: "03",
    title: "Health Connect Management System",
    description: "A healthcare facility management platform connecting patient records, appointment scheduling, and medical workflows in one accessible system.",
    technologies: ["React", "Django", "Python", "MySQL", "Health Tech"],
    liveDemo: "https://health-connect-management-system.vercel.app/",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/PrinceMUGABE/HealthConnect-Management-System-Frontend" },
      { label: "Backend", url: "https://github.com/PrinceMUGABE/Health-Connect-management-System-Backend" },
    ],
  },
  {
    number: "04",
    title: "Ishuri AI School Management",
    description: "Student records, grade management, analytics, and communication for schools.",
    technologies: ["React", "JavaScript", "AI", "MySQL"],
    liveDemo: "https://ishuri-ai-powered-school-management.vercel.app/",
    githubLinks: [
      { label: "Source", url: "https://github.com/PrinceMUGABE/ishuri-A[...]" },
    ],
  },
];

const otherProjects = [
  ["Policy Link Rwanda", "Institutional policy collection, comparison, and cross-reference workflows with remote server integration.", ["React", "Django", "Python", "MySQL"], ["https://github.com/[...]"]],
  ["Farm Operations Management & Analytics", "Farm operations tracking, analytics, and reporting for better agricultural decisions.", ["React", "Django", "Python", "MySQL"], ["https://github.com/P[...]"]],
  ["Bridge to Legal Help System", "Legal consultation matching and case tracking for people seeking practical legal support.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMU[...]"]],
  ["AI Access Control & Compliance", "AI-powered access control, compliance monitoring, and security management for Hammer Tech Ltd.", ["React", "Python", "Machine Learning", "MySQL"], ["https://g[...]"]],
  ["Health Geo Track", "GPS-enabled health monitoring and location-based services for geographic health tracking.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/health[...]"]],
  ["I-Tikaf Management System", "Retreat event management with participant tracking and resource allocation.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/I-Tikaf-Man[...]"]],
  ["BTSL Digital Mentorship", "Mentor-mentee matching, progress tracking, and communication workflows.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/btsl_digital-ment[...]"]],
  ["Shaka Water E-Commerce", "Water product browsing, ordering, inventory, and payment workflows.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Shaka-water-e-commerce[...]"]],
  ["Anaweza", "A community empowerment platform for engagement and resource sharing.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/anaweza-frontend", "https://github.[...]"]],
  ["Agricultural Water Use Efficiency", "Water usage monitoring, efficiency analytics, and recommendations for agriculture.", ["React", "Python", "Machine Learning", "MySQL"], ["https://github.com[...]"]],
  ["Health Insurance Fraud Detection", "Fraud alerts, claim analysis, and reporting supported by machine-learning workflows.", ["React", "Python", "Machine Learning", "MySQL"], ["https://github.co[...]"]],
  ["Infrastructure Plan Management", "Infrastructure project tracking, budget management, and timeline visualization.", ["React", "JavaScript", "MySQL"], ["https://github.com/PrinceMUGABE/infrapla[...]"]],
  ["Real-Time Agricultural Intelligence", "IoT data streaming, agricultural analytics, and operational alerts.", ["React", "JavaScript", "IoT", "MySQL"], ["https://github.com/PrinceMUGABE/Real-tim[...]"]],
  ["Security Awareness Platform", "Cybersecurity training, assessments, quizzes, and compliance progress tracking.", ["React", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/security-awaren[...]"]],
  ["Smart Sunflower Production & Marketing", "Production tracking, market analysis, and sales management across the agricultural supply chain.", ["React", "Python", "Machine Learning", "MySQL"], ["[...]"]],
  ["Advent Connect", "Community profiles, messaging, and event management in a modern engagement platform.", ["React", "Vite", "JavaScript"], ["https://github.com/PrinceMUGABE/advent-connect-front[...]"]],
  ["Tenant Management System", "Lease management, payment tracking, and maintenance requests for property operations.", ["Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Tenant-Back[...]"]],
  ["Fleet Management", "Vehicle tracking, maintenance scheduling, and driver management for fleet operations.", ["Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/fleet-management-ba[...]"]],
  ["Catholic Church Volunteer Management", "Volunteer registration, task assignment, and scheduling for church teams.", ["Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Catholic-Ch[...]"]],
  ["Quran App", "Quranic content delivery with user preferences and search functionality.", ["Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Quran_App_Backend"]],
  ["Hospital Feedback Application", "Healthcare feedback collection, rating workflows, and analytics.", ["Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Hospital-feedback-app"]],
  ["Course Recommendation", "User profiling and machine-learning recommendations for course discovery.", ["Django", "Python", "Machine Learning", "MySQL"], ["https://github.com/PrinceMUGABE/course[...]"]],
  ["Intelligent Workforce Performance Monitoring", "Employee performance metrics, AI analysis, and reporting workflows.", ["Python", "Machine Learning", "MySQL"], ["https://github.com/PrinceMUGABE[...]"]],
  ["CCI Rwanda Time Sync", "AI-powered real-time employee monitoring, time tracking, and compliance analysis.", ["Python", "Machine Learning", "MySQL"], ["https://github.com/PrinceMUGABE/CCI-Rwand[...]"]],
  ["NIDA APIs", "Identity verification and data management APIs for national identification workflows.", ["Python", "REST API", "MySQL"], ["https://github.com/PrinceMUGABE/NIDAAPIs"]],
  ["GoGo App", "Route optimization and delivery tracking for transportation and logistics workflows.", ["Python", "MySQL"], ["https://github.com/PrinceMUGABE/gogo_app"]],
  ["Quiz App", "Quiz creation, scoring, user management, and a Flutter mobile experience.", ["Spring Boot", "Flutter", "Java", "MySQL"], ["https://github.com/PrinceMUGABE/MobileQuizAppWithFlutterA[...]"]],
  ["Hotel Management System", "Booking, room allocation, and billing workflows for hotel operations.", ["Spring Boot", "Java", "MySQL"], ["https://github.com/PrinceMUGABE/SpringBoot-HotelManagemen[...]"]],
  ["Gym Management System", "Member management, membership tracking, and billing for fitness centers.", ["Spring Boot", "Java", "MySQL"], ["https://github.com/PrinceMUGABE/SpringBoot-GymManagement[...]"]],
  ["E-Commerce Platform", "Product catalog, shopping cart, payments, and order management.", ["ASP.NET Core", "C#", "MySQL"], ["https://github.com/AganzeFelicite/e-commerce_platform", "https://git[...]"]],
  ["Riddle Challenge", "A gamified riddle experience with scoring and printable certificate generation.", ["ASP.NET Core", "C#", "MySQL"], ["https://github.com/PrinceMUGABE/Riddles-Challenging-sys[...]"]],
  ["Health & Disease Prediction", "Machine-learning projects for malaria, diabetes, PCOS, image classification, and movie-script genre prediction.", ["Python", "Django", "Jupyter", "Machine Learni[...]"], []],
  ["Health & Disease Prediction", "Machine-learning projects for malaria, diabetes, PCOS, image classification, and movie-script genre prediction.", ["Python", "Django", "Jupyter", "Machine Learni[...]"]],

  ["BigData Analytics Journey", "Big data coursework and projects covering processing, statistics, Spark, and Hadoop.", ["Python", "Jupyter", "Apache Spark", "Hadoop"], ["https://github.com/Prince[...]"]],
  ["Data Analytics Bootcamp", "Practical analytics training and real-world datasets across Excel, Python, SQL, and Tableau.", ["Excel", "Python", "SQL", "Tableau"], ["https://github.com/PrinceMUGA[...]"]],
  ["Flutter Mobile Projects", "A calculator, household employee management app, and mobile programming assignments.", ["Flutter", "Dart", "Mobile"], ["https://github.com/PrinceMUGABE/Flutter-Calcu[...]"]],
  ["Portfolio & Product Websites", "Personal portfolios, a crystal bracelet shop, navigation practice, and a Kigali cleaning services website.", ["React", "JavaScript", "HTML", "CSS"], ["https://g[...]"]],
];

const LiveDemoButton = ({ url }) => {
  if (!url) return null;
  
  return (
    <a className="project-demo-button" href={url} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
      View Live Demo <FaArrowUpRightFromSquare />
    </a>
  );
};

const RepositoryLinks = ({ links = [], compact = false }) => {
  const safeLinks = Array.isArray(links) ? links : [];

  return (
    <div className={compact ? "repository-links compact" : "repository-links"}>
      {safeLinks.map(({ label, url }) => (
        <a className="text-link" href={url} target="_blank" rel="noopener noreferrer" key={url}>
          {label} <FaGithub />
        </a>
      ))}
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="section-shell">
      <div className="section-heading" data-aos="fade-up">
        <p className="eyebrow">Selected work</p>
        <h2>Projects built for real questions.</h2>
        <p>From public-safety intelligence to operational workflow tools, these are the systems where product thinking meets engineering.</p>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <article className="featured-project" key={project.title} data-aos="fade-up">
            <div className="project-number">{project.number}</div>
            <div className="project-content">
              <p className="project-kicker">Featured case study</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technology-list">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="project-actions">
                <RepositoryLinks links={project.githubLinks} />
                <LiveDemoButton url={project.liveDemo} />
              </div>
            </div>
            <FaCodeBranch className="project-mark" aria-hidden="true" />
          </article>
        ))}
      </div>

      <div className="archive-heading" data-aos="fade-up">
        <div>
          <p className="eyebrow">The archive</p>
          <h2>More work, more range.</h2>
        </div>
        <span>{otherProjects.length} additional projects</span>
      </div>
      <div className="project-archive">
        {otherProjects.map(([title, description, technologies, githubLinks]) => (
          <article className="archive-project" key={title} data-aos="fade-up">
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="archive-footer">
              <div className="technology-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <RepositoryLinks compact links={githubLinks.map((url, index) => ({ label: githubLinks.length > 1 ? (index === 0 ? "Frontend" : "Backend") : "Source", url }))} />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
