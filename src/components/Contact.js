import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';  

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 section-title">Contact Me</h2>

        <div className="contact-info row justify-content-center mb-4">
          <div className="col-md-4 text-center">
            <div className="contact-info-item">
              <FaEnvelope size={40} />
              <p><a href="mailto:chengzhixin6@gmail.com">Email: chengzhixin6.com</a>
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="contact-info-item">
              <FaGithub size={40} />
              <p><a href="https://github.com/ZhiXin9" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="contact-info-item">
              <FaLinkedin size={40} />
              <p><a href="https://www.linkedin.com/in/zhi-xin-cheng-3b9b85264/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

  