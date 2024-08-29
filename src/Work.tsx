import React from "react";
import sparkCompetiton from "/project-2.jpg";
import abaqusLogo from "/abaqus-logo.jpg";
import vexRobot from "/vex-robot.jpg";
import roboticsRobot from "/robot.jpg";
import compositesPic from "/project-3.jpg";
import { Link } from "react-router-dom";

import "./Work.css";

function Work() {
  return (
    <>
      <section id="work" className="left-pad">
        <h6 className="section-name">Work</h6>
        <h3 className="section-title">My Recent Projects</h3>
        <div className="card-catalog">
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <img src="" alt="slkorksy lockhead logo" className="card-pic" />
            <div className="card-info">
              <div>
                <h5 className="card-title">Black Hawk Program UH-60</h5>
                <h6 className="date">May 2024 - August 2024</h6>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam neque mi, dapibus quis nibh ut, molestie sagittis
                  nisl. Pellentesque augue risus, dictum vitae velit in, commodo
                  semper ipsum. Aliquam et ex luctus, mollis lectus in, pretium
                  purus. Phasellus enim urna, sagittis eget magna id, tincidunt
                  rutrum ex. Quisque non arcu vehicula, imperdiet arcu sit amet,
                  maximus elit. Duis ac dignissim sapien. Donec nec finibus
                  mauris, ut congue elit. Aliquam eleifend lorem eu magna
                  dapibus semper. Nulla sit amet dapibus nibh. Maecenas justo
                  turpis, posuere ut sollicitudin vitae, scelerisque ac quam.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Duis id sodales metus. Sed a orci nec erat dapibus gravida ut
                  eget ligula. Nulla quis dignissim ligula.
                </p>
              </div>
              <div className="link-container">
                <Link to={"/Projects"} className="link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <img src="" alt="img of capstone project" className="card-pic" />
            <div className="card-info">
              <div>
                <h5 className="card-title">Capstone Project</h5>
                <h6 className="date">January 2024 - May 2024</h6>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam neque mi, dapibus quis nibh ut, molestie sagittis
                  nisl. Pellentesque augue risus, dictum vitae velit in, commodo
                  semper ipsum. Aliquam et ex luctus, mollis lectus in, pretium
                  purus. Phasellus enim urna, sagittis eget magna id, tincidunt
                  rutrum ex. Quisque non arcu vehicula, imperdiet arcu sit amet,
                  maximus elit. Duis ac dignissim sapien. Donec nec finibus
                  mauris, ut congue elit. Aliquam eleifend lorem eu magna
                  dapibus semper. Nulla sit amet dapibus nibh. Maecenas justo
                  turpis, posuere ut sollicitudin vitae, scelerisque ac quam.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Duis id sodales metus. Sed a orci nec erat dapibus gravida ut
                  eget ligula. Nulla quis dignissim ligula.
                </p>
              </div>
              <div className="link-container">
                <Link to={"/Projects"} className="link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <img src="" alt="boeing logo" className="card-pic" />
            <div className="card-info">
              <div>
                <h5 className="card-title">
                  777x Program [9/8F]- Propulsion Engineering integration
                </h5>
                <h6 className="date">June 2023 - September 2023</h6>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam neque mi, dapibus quis nibh ut, molestie sagittis
                  nisl. Pellentesque augue risus, dictum vitae velit in, commodo
                  semper ipsum. Aliquam et ex luctus, mollis lectus in, pretium
                  purus. Phasellus enim urna, sagittis eget magna id, tincidunt
                  rutrum ex. Quisque non arcu vehicula, imperdiet arcu sit amet,
                  maximus elit. Duis ac dignissim sapien. Donec nec finibus
                  mauris, ut congue elit. Aliquam eleifend lorem eu magna
                  dapibus semper. Nulla sit amet dapibus nibh. Maecenas justo
                  turpis, posuere ut sollicitudin vitae, scelerisque ac quam.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Duis id sodales metus. Sed a orci nec erat dapibus gravida ut
                  eget ligula. Nulla quis dignissim ligula.
                </p>
              </div>
              <div className="link-container">
                <Link to={"/Projects"} className="link">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <img src={abaqusLogo} alt="Abaqus Logo" className="card-pic" />
            <div className="card-info">
              <div>
                <h5 className="card-title">
                  Abaqus PhD Report Overview (FEA/FEM Analysis)
                </h5>
                <h6 className="date">Janurary 2023 - May 2023</h6>
                <p className="description">
                  This is in coordination with DTU my study abroad location,
                  where I was able to get into a specialized PhD course in
                  Finite Elements with the usage of Abaqus CAE. I deep dive in
                  different load cases, such as Tensile loads, Buckling
                  conditions, and Induce a Crack-tip Analysis.
                </p>
              </div>
              <div className="link-container">
                <Link to={"/Projects"} className="link">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <img
              src={roboticsRobot}
              alt="picture of the robot "
              className="card-pic"
            />
            <div className="card-info">
              <div>
                <h5 className="card-title">Robotics Design Team</h5>
                <h6 className="date">September 2021 - January 2024</h6>
                <p className="description">
                  This is in coordination with the NYU Robotic Design Team.
                  Where I started off as a integration member using CAD and
                  doing FEA Analysis as well manufacturing parts. After two
                  years of being a member i became a mentor for CAD and
                  manufacturing.
                </p>
              </div>
              <div className="link-container">
                <Link to={"/Projects"} className="link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <img
              src={sparkCompetiton}
              alt="me and the other spark competition winners"
              className="card-pic"
            />
            <div className="card-info">
              <div>
                <h5 className="card-title">Spark Competition</h5>
                <h6 className="date">September 2022</h6>
                <p className="description">
                  Engineering and Design Competition regarding Cyrus based Data
                  Centers and their intitative of reducing their carbon
                  footprint. In collaboration with Cyrus One and Ramboll.
                </p>
              </div>
              <div className="link-container">
                <Link to={"/Projects"} className="link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <img src={compositesPic} alt="picture " className="card-pic" />
            <div className="card-info">
              <div>
                <h5 className="card-title">
                  Predicting Thermal- Chemical Properties in Composites
                </h5>
                <h6 className="date">Summer of 2022</h6>
                <p className="description">
                  An Overview of the Summer of 2022, where I embark in a journey
                  of working with many brilliant individuals. My project
                  consisted in the macro-scale analysis of composites and their
                  Thermal-chemical properties after post-processing using the
                  Icomp^2 framework.
                </p>
              </div>
              <div className="link-container">
                <Link to={"/Projects"} className="link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <img src={vexRobot} alt="Vex Robot" className="card-pic" />
            <div className="card-info">
              <div>
                <h5 className="card-title">Vex Robotics</h5>
                <h6 className="date">Janurary 2022 - May 2022</h6>
                <p className="description">
                  Given the prompt to provide a solution to worlder hunger for
                  my semester long project. GIven that half of the habitable
                  land on earth is utilzed for agricultre, a new location is
                  needed. Since Nasa DIscovered lunar agrictulture ccan produce
                  70% of the earths food supply. NASA had issued a request for a
                  proposal for a rover capable of find and transporting crops on
                  the moon. With teem coordination we designed a robot capable
                  of these requirements.
                </p>
              </div>
              <div className="link-container">
                <Link to={"/Projects"} className="link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
