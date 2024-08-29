import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <>
      <section id="experience" className="left-pad">
        <h6 className="section-name">About</h6>
        <h3 className="section-title">My Education & Experience</h3>
        <div className="split ">
          <div>
            <h5 className="subheading">Education</h5>
            <div id="education-card-container" className="card-catalog">
              <div
                className="card card-info "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h5 className="card-title">
                  Bachelor in Mechanical Engineering
                </h5>
                <h6 className="date">New York University (2021-2025)</h6>
              </div>
              <div
                className="card card-info"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h5 className="card-title">Bachelor of Science</h5>
                <h6 className="date">Denmarks Tekniske Universitet 2023</h6>
                <p className="description">
                  A Study Abroad venture in coordination with NYU GLASS , school
                  located in Coppenhagen (Denmark). Some notable achivements was
                  completing a PhD class in Finite Elements with ABAQUS CAE
                </p>
              </div>
              <div
                className="card card-info "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h5 className="card-title">
                  Certification of Technical Experience
                </h5>
                <h6 className="date">Aviation HighSchool</h6>
                <p>
                  Don't let the "Highschool" portion decieve you as this school
                  provided an opportunity to achive an FAA licence in accordance
                  to 14 CFR 140 regarding an Airframe and Powerplant licence, in
                  which I specialized in Powerplant, with a lot of knowledge in
                  Aircraft and Engine Systems
                </p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="subheading">Experience</h5>
            <div id="experience-card-container" className="card-catalog">
              <div
                className="card card-info "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h5 className="card-title">An engineer</h5>
                <h6 className="date">Lockhead Martin | Summer 2024</h6>
                <p>All i had to do was sell my soul. ;()</p>
              </div>
              <div
                className="card card-info "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h5 className="card-title">Propulsion Engineering</h5>
                <h6 className="date">Boeing | Summer 2023</h6>
                <p>
                  All we are more and design lorem ipsum dolor creativity sit
                  amet consectetur adipisicing elit
                </p>
              </div>
              <div
                className="card card-info "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h5 className="card-title">Undergraduate Researcher</h5>
                <h6 className="date">
                  University of Massachusetts Lowell | Summer 2022
                </h6>
                <p>
                  Composite research on the prediction of thermal-chemical
                  properties of a composite in post-process using the Icomp^2
                  framework: Funded by NASA Glenn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
