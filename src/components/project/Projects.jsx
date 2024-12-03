import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Project 1 - Web Development</h3>
        <p>
          A full-stack web application built using React and Node.js. It features user authentication and a CRUD interface.
        </p>
      </div>
      <div className="project">
        <h3>Project 2 - Mobile Application</h3>
        <p>
          A mobile application built with Flutter, offering real-time notifications and chat functionality.
        </p>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
};

export default Projects;
