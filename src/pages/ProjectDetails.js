import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  
  const projects = [
    { id: 1, title: 'VR Escape Room', category: 'Virtual Reality (VR) Development', description: 'Using Unity to create a virtual escape room', image: `${process.env.PUBLIC_URL}/images/EscapeRoom.png` },
    { id: 2, title: 'Mobile App Quiz', category: 'Mobile App Development', description: 'Using WebStorm and Android Studio to create a Mobile App Quiz', image: `${process.env.PUBLIC_URL}/images/MobileAppQuiz.jpg` },
    { id: 3, title: 'Portfolio Design', category: 'Graphic Design', description: 'Using Adobe Illustrator to design namecards, stickers, and a portfolio website', image: `${process.env.PUBLIC_URL}/images/PortfolioDesign.jpg` },
    { id: 4, title: 'Avatars Design', category: 'Graphic Design', description: 'Using AI generative tools and Adobe Illustrator to design Avatars and styles', image: `${process.env.PUBLIC_URL}/images/Avatars.jpg` },
  ];
  

  const project = projects.find(p => p.id === parseInt(id));

  return (
    <div className="project-details-container">
      <div className="project-details">
        {project ? (
          <>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <div className="project-category">{project.category}</div>
              <div className="project-title">{project.title}</div>
              <div className="project-description">{project.description}</div>
            </div>
          </>
        ) : (
          <p>Project not found.</p>
        )}
      </div>
    </div>
  );
};  

export default ProjectDetails;
