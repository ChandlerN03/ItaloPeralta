import React from "react";
import aboutMe from "/aboutMeImg.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <section id="about-me" className="left-pad">
        <h6 className="section-name">About Me</h6>
        <h3 className="section-title">Who am I</h3>
        <div className="large-container">
          <img
            src={aboutMe}
            alt="me holding a camera outside"
            className="section-pic"
          />
          <p>
            Hello, I'm <b>Italo Peralta</b>, a native of Queens, New York, with
            Ecuadorian roots. I am studying mechanical engineering at NYU's
            Tandon School of Engineering, specializing in aerospace. <br />
            <br />
            Throughout my academic journey, I've actively participated in
            various organizations, notably including GLASS and being a part of
            the SPARK competition event in engineering and design. My
            experiences have been diverse, from studying abroad in Denmark,
            taking a PhD class in FEA with ABAQUS, to conducting research on
            composites funded by NASA Glenn. Currently, I am thrilled to be
            working with Boeing on the 777x program, an upcoming milestone in
            the commercial aircraft industry. <br />
            <br /> Aside from my engineering pursuits, I have a deep passion for
            music, food, and photography. Exploring different cultures and
            destinations has been a significant part of my life, and in 2023, I
            had the opportunity to visit incredible places such as Paris,
            London, and Copenhagen. Furthermore, I share a profound love for
            football (soccer), which led me and some friends to establish our
            own club. Our ultimate goal is to become a CJSL team, providing
            opportunities for young talents in New York City. Currently, we
            actively participate in matches against other teams within Queens.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
