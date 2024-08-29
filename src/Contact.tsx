import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section id="contact" className="left-pad">
        <h6 className="section-name">Contact</h6>
        <h3 className="section-title">Interested? Lets talk</h3>
        <div className="socials-container">
          <div className="social-item">
            <a
              href="https://www.linkedin.com/in/chandler-nauta-a3b732210"
              target="_blank"
              className="social-link"
            >
              <img
                src="/linkedInIcon.png"
                className="icon"
                alt="linkedIn Icon"
              />
              LinkedIn
            </a>
          </div>
          <div className="social-item">
            <a href="mailto:nautachandler@gmail.com" className="social-link">
              <img className="icon" src="/email_icon.jpg" alt="email icon" />
              Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
