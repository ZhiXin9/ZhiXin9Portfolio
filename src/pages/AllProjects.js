import React from 'react';
import { Link } from 'react-router-dom';
import './AllProjects.css';

const AllProjects = () => {
  
  const projects = [
    { id: 1, title: 'VR Escape Room', description: 'Using Unity to create a virtual escape room', image: '/images/EscapeRoom.png' },
    { id: 2, title: 'Mobile App Quiz', description: 'Using WebStorm and Android studio to create a Mobile App Quiz', image: '/images/MobileAppQuiz.jpg' },
    { id: 3, title: 'Portfolio Design', description: 'Using Adobe Illustrator to design namecard, stickers and portfolio website', image: '/images/PortfolioDesign.jpg' },
    { id: 4, title: 'Avatars Design', description: 'Using AI generative tools and Adobe Illustrator to design Avatars and styles', image: '/images/Avatars.jpg' },
  ];

  return (
    <div className="all-projects-container">
      <h1>All Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Link to={`/project/${project.id}`} className="view-project-button">View Project</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
