import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <section id="home" className="left-pad">
        <div className="flex ">
          <img src="/profileImg.jpg" id="profile-pic" />
        </div>
        <div className="primary-info-container container">
          <div className="container">
            <h4>
              <span>Hi! I'm Italo Peralta a </span> Mechanical Engineer
            </h4>
          </div>
          <div className="socials">
            <h5>Email: ip2022@nyu.edu</h5>
            <a
              href="https://www.linkedin.com/in/chandler-nauta-a3b732210"
              target="_blank"
            >
              <img src="/linkedInIcon.png" className="icon" />
            </a>
          </div>
          <div className="buttons-container">
            <a href="#work" className="button">
              Explore my work
            </a>
            <Link to={"/GLASS"} className="button">
              GLASS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
