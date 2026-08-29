import React from "react";
import { FaArrowUpRightFromSquare, FaGithub, FaCodeBranch } from "react-icons/fa6";

const featuredProjects = [
  {
    number: "01",
    title: "Disaster Guard",
    description: "A full-stack public-safety platform that combines disaster trend prediction with real-time alerts and data visualization, helping people understand risk signals and respond to changing conditions.",
    technologies: ["React", "Django", "Python", "MySQL", "Machine Learning"],
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
    githubLinks: [
      { label: "Frontend", url: "https://github.com/PrinceMUGABE/HealthConnect-Management-System-Frontend" },
      { label: "Backend", url: "https://github.com/PrinceMUGABE/Health-Connect-management-System-Backend" },
    ],
  },
];

const otherProjects = [
  ["Policy Link Rwanda", "Institutional policy collection, comparison, and cross-reference workflows with remote server integration.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Policy_Link_Rwanda_Client_Project_with_Django"]],
  ["Farm Operations Management & Analytics", "Farm operations tracking, analytics, and reporting for better agricultural decisions.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Farm-Operations-Management-and-Analytics-Tool-Frontend", "https://github.com/PrinceMUGABE/Farm-Operations-Management-and-Analytics-Tool-Backend"]],
  ["Bridge to Legal Help System", "Legal consultation matching and case tracking for people seeking practical legal support.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/bridge-to-legal-help-system-frontend", "https://github.com/PrinceMUGABE/bridge-to-legal-help-system-backend"]],
  ["AI Access Control & Compliance", "AI-powered access control, compliance monitoring, and security management for Hammer Tech Ltd.", ["React", "Python", "Machine Learning", "MySQL"], ["https://github.com/PrinceMUGABE/AI-Enhanced-Access-Control-Compliance-System-for-Hammer-Tech-Ltd-Frontend", "https://github.com/PrinceMUGABE/AI-Enhanced-Access-Control-Compliance-System-for-Hammer-Tech-Ltd-Backend"]],
  ["Health Geo Track", "GPS-enabled health monitoring and location-based services for geographic health tracking.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/health-geo-track-frontend", "https://github.com/PrinceMUGABE/health-geo-track-backend"]],
  ["I-Tikaf Management System", "Retreat event management with participant tracking and resource allocation.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/I-Tikaf-Management-System-Frontend", "https://github.com/PrinceMUGABE/I-Tikaf-Management-System-Backend"]],
  ["BTSL Digital Mentorship", "Mentor-mentee matching, progress tracking, and communication workflows.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/btsl_digital-mentorship-frontend", "https://github.com/PrinceMUGABE/btsl_digital-mentorship-backend"]],
  ["Shaka Water E-Commerce", "Water product browsing, ordering, inventory, and payment workflows.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Shaka-water-e-commerce-management-system", "https://github.com/PrinceMUGABE/shaka-backend"]],
  ["Anaweza", "A community empowerment platform for engagement and resource sharing.", ["React", "Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/anaweza-frontend", "https://github.com/PrinceMUGABE/anaweza-backend"]],
  ["Agricultural Water Use Efficiency", "Water usage monitoring, efficiency analytics, and recommendations for agriculture.", ["React", "Python", "Machine Learning", "MySQL"], ["https://github.com/PrinceMUGABE/agricultural-water-user-efficiency-frontend", "https://github.com/PrinceMUGABE/Agricultural-Water-Use-Efficiency-Platform"]],
  ["Health Insurance Fraud Detection", "Fraud alerts, claim analysis, and reporting supported by machine-learning workflows.", ["React", "Python", "Machine Learning", "MySQL"], ["https://github.com/PrinceMUGABE/health_insurance_fraud_detection_frontent_with_react", "https://github.com/PrinceMUGABE/Healthy_insurance_fraud_detection_server"]],
  ["Infrastructure Plan Management", "Infrastructure project tracking, budget management, and timeline visualization.", ["React", "JavaScript", "MySQL"], ["https://github.com/PrinceMUGABE/infraplan-management-system-fronyend"]],
  ["Real-Time Agricultural Intelligence", "IoT data streaming, agricultural analytics, and operational alerts.", ["React", "JavaScript", "IoT", "MySQL"], ["https://github.com/PrinceMUGABE/Real-time-agricultural-intelligence"]],
  ["Security Awareness Platform", "Cybersecurity training, assessments, quizzes, and compliance progress tracking.", ["React", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/security-awareness-platform-frontend-ASP-", "https://github.com/PrinceMUGABE/security-awareness-platform-backend-ASP-"]],
  ["Ishuri AI School Management", "Student records, grade management, analytics, and communication for schools.", ["React", "JavaScript", "AI", "MySQL"], ["https://github.com/PrinceMUGABE/ishuri-AI-Powered-School-Management-System"]],
  ["Smart Sunflower Production & Marketing", "Production tracking, market analysis, and sales management across the agricultural supply chain.", ["React", "Python", "Machine Learning", "MySQL"], ["https://github.com/PrinceMUGABE/smart-sunflower-production-and-marketing-integration-system-frontend", "https://github.com/PrinceMUGABE/smart-sunflower-production-and-marketing-integration-system-backend"]],
  ["Advent Connect", "Community profiles, messaging, and event management in a modern engagement platform.", ["React", "Vite", "JavaScript"], ["https://github.com/PrinceMUGABE/advent-connect-frontend"]],
  ["Tenant Management System", "Lease management, payment tracking, and maintenance requests for property operations.", ["Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Tenant-Backend"]],
  ["Fleet Management", "Vehicle tracking, maintenance scheduling, and driver management for fleet operations.", ["Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/fleet-management-backend"]],
  ["Catholic Church Volunteer Management", "Volunteer registration, task assignment, and scheduling for church teams.", ["Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Catholic-Church-Volunteer-Management-System-Backend"]],
  ["Quran App", "Quranic content delivery with user preferences and search functionality.", ["Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Quran_App_Backend"]],
  ["Hospital Feedback Application", "Healthcare feedback collection, rating workflows, and analytics.", ["Django", "Python", "MySQL"], ["https://github.com/PrinceMUGABE/Hospital-feedback-app"]],
  ["Course Recommendation", "User profiling and machine-learning recommendations for course discovery.", ["Django", "Python", "Machine Learning", "MySQL"], ["https://github.com/PrinceMUGABE/course_recommendation_backend"]],
  ["Intelligent Workforce Performance Monitoring", "Employee performance metrics, AI analysis, and reporting workflows.", ["Python", "Machine Learning", "MySQL"], ["https://github.com/PrinceMUGABE/Intelligent-Workforce-Performance-Monitoring-backend"]],
  ["CCI Rwanda Time Sync", "AI-powered real-time employee monitoring, time tracking, and compliance analysis.", ["Python", "Machine Learning", "MySQL"], ["https://github.com/PrinceMUGABE/CCI-Rwanda-Time-Sync-AI-Powered-Real-Time-Employee-Monitoring-System-Backend"]],
  ["NIDA APIs", "Identity verification and data management APIs for national identification workflows.", ["Python", "REST API", "MySQL"], ["https://github.com/PrinceMUGABE/NIDAAPIs"]],
  ["GoGo App", "Route optimization and delivery tracking for transportation and logistics workflows.", ["Python", "MySQL"], ["https://github.com/PrinceMUGABE/gogo_app"]],
  ["Quiz App", "Quiz creation, scoring, user management, and a Flutter mobile experience.", ["Spring Boot", "Flutter", "Java", "MySQL"], ["https://github.com/PrinceMUGABE/MobileQuizAppWithFlutterAndSpringboot"]],
  ["Hotel Management System", "Booking, room allocation, and billing workflows for hotel operations.", ["Spring Boot", "Java", "MySQL"], ["https://github.com/PrinceMUGABE/SpringBoot-HotelManagement-Project"]],
  ["Gym Management System", "Member management, membership tracking, and billing for fitness centers.", ["Spring Boot", "Java", "MySQL"], ["https://github.com/PrinceMUGABE/SpringBoot-GymManagement-project"]],
  ["E-Commerce Platform", "Product catalog, shopping cart, payments, and order management.", ["ASP.NET Core", "C#", "MySQL"], ["https://github.com/AganzeFelicite/e-commerce_platform", "https://github.com/PrinceMUGABE/eCommerceProject"]],
  ["Riddle Challenge", "A gamified riddle experience with scoring and printable certificate generation.", ["ASP.NET Core", "C#", "MySQL"], ["https://github.com/PrinceMUGABE/Riddles-Challenging-system-with-C-"]],
  ["Health & Disease Prediction", "Machine-learning projects for malaria, diabetes, PCOS, image classification, and movie-script genre prediction.", ["Python", "Django", "Jupyter", "Machine Learning"], ["https://github.com/PrinceMUGABE/MalariaPrediction", "https://github.com/PrinceMUGABE/Diabete-Prediction-system-with-python", "https://github.com/PrinceMUGABE/PCOS-Detection-with-Django", "https://github.com/PrinceMUGABE/Image-Classification-with-python-Django", "https://github.com/PrinceMUGABE/Movie-Script-Genre_predection"]],
  ["BigData Analytics Journey", "Big data coursework and projects covering processing, statistics, Spark, and Hadoop.", ["Python", "Jupyter", "Apache Spark", "Hadoop"], ["https://github.com/PrinceMUGABE/BigData-Analytics-Journey-Master-Program-AUCA"]],
  ["Data Analytics Bootcamp", "Practical analytics training and real-world datasets across Excel, Python, SQL, and Tableau.", ["Excel", "Python", "SQL", "Tableau"], ["https://github.com/PrinceMUGABE/data-analytics-bootcamp"]],
  ["Flutter Mobile Projects", "A calculator, household employee management app, and mobile programming assignments.", ["Flutter", "Dart", "Mobile"], ["https://github.com/PrinceMUGABE/Flutter-Calculator-Mobile-app", "https://github.com/PrinceMUGABE/house-hold-employee-management-system-with-flutter", "https://github.com/PrinceMUGABE/mobile-programming-second-assignment", "https://github.com/PrinceMUGABE/mobile-app-third-assignment", "https://github.com/PrinceMUGABE/mobile-app-fourth-assignment"]],
  ["Portfolio & Product Websites", "Personal portfolios, a crystal bracelet shop, navigation practice, and a Kigali cleaning services website.", ["React", "JavaScript", "HTML", "CSS"], ["https://github.com/PrinceMUGABE/prince_mugabe_portfolio-", "https://github.com/PrinceMUGABE/Prince_MUgabe_Resume", "https://github.com/PrinceMUGABE/crystal-bracelet", "https://github.com/PrinceMUGABE/HTML-CSS-and-JavaScript-Navigations", "https://github.com/PrinceMUGABE/Kigali-cleanless", "https://github.com/PrinceMUGABE/Fanny"]],
];

const LiveDemoButton = () => (
  <a className="project-demo-button" href="#contact" aria-label="Add a live demo link in the contact section">
    Add live link https://smart-logistic-management-system-one.vercel.app/ <FaArrowUpRightFromSquare />
  </a>
);

const RepositoryLinks = ({ links, compact = false }) => (
  <div className={compact ? "repository-links compact" : "repository-links"}>
    {links.map(({ label, url }) => (
      <a className="text-link" href={url} target="_blank" rel="noopener noreferrer" key={url}>
        {label} <FaGithub />
      </a>
    ))}
  </div>
);

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
                <LiveDemoButton />
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