import React, { useState } from 'react';

const projects = [
  {
    title: "VR Escape Room",
    description: "Using Unity to create a virtual escape room",
    img: "/images/EscapeRoom.png",
  },
  {
    title: "Moile App Quiz",
    description: "Using WebStorm and Android studio to create a Mobile App Quiz",
    img: "/images/MobileAppQuiz.jpg",  
  },
  {
    title: "Portfolio Design",
    description: "Using Adobe Illustrator to design namecard, stickers and portfolio website",
    img: "/images/PortfolioDesign.jpg", 
  },
  {
    title: "Avatars Design",
    description: "Using AI generative tools and Adobe Illustrator to design Avatars and styles",
    img: "/images/Avatars.jpg",
  }
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <section id="portfolio" className="portfolio-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 section-title">My Work</h2>
        <p className="text-center section-subtitle">Here are some of the projects I have worked on:</p>
        
        <div className="row">
          <div className="col-md-4">
            <ul className="project-tabs list-unstyled">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className={`tab-item ${currentProject === index ? "active" : ""}`}
                  onMouseEnter={() => setCurrentProject(index)} 
                >
                  {project.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-8">
            <div className="card custom-card">
              <img
                src={projects[currentProject].img}
                className="card-img-top"
                alt={projects[currentProject].title}
              />
              <div className="card-body">
                <h5 className="card-title">{projects[currentProject].title}</h5>
                <p className="card-text">{projects[currentProject].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
