import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import menu from "/menu-icon.png";
import { Link } from "react-router-dom";
import "./Glass.css";

export default function Glass() {
  return (
    <div>
      <div className="header-container">
        <h1 id="site-name">Italo Peralta</h1>
        <div className="flex">
          <a className="drop-down-menu container">
            <img className="menu-icon" src={menu} />
          </a>
          <ul className="dropdown">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-glass">
                GLASS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#more-about-glass">
                MORE ABOUT GLASS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#paper-poster">
                PAPER/POSTER
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section id="about-glass" className="left-pad">
        <div className="pad-bot">
          <h6 className="section-name">About GLASS</h6>
          <h3 className="section-title">What is GLASS?</h3>
        </div>
        <div className="large-container">
          <img
            src="./public/nyu-glass.jpg"
            alt="nyu glass image"
            className="section-pic"
          />
          <p>
            In the Global Leaders & Scholars in STEM (<b>GLASS</b>) program at
            Tandon Honors, students engage in diverse experiences, research, and
            exploration aligned with Tandon's Areas of Research Excellence.
            Their projects are designed to integrate with the NAE Grand
            Challenges and consider the United Nations Sustainability
            Development Goals. Over the course of three years in the GLASS
            Program, students gain a profound comprehension of their potential
            impact in creating positive global change. Emerging as socially
            responsible innovators and engineers, GLASS students are
            well-equipped to contribute meaningfully to the world.
          </p>
        </div>
      </section>
      <section id="more-about-glass" className="left-pad">
        <div className="pad-bot">
          <h3 className="section-name">More About GLASS</h3>
          <h6 className="section-title">
            As a glass honor student I strive to adhere our academic journey and
            everything our careers to the following:
          </h6>
        </div>
        <div className="container">
          <div
            className="large-container"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <img
              src="./SDG.jpg"
              alt="picture of nyu glass sustainable goals"
              className="section-pic"
            />
            <div>
              <h6 className="card-title">UN Sustainable Goals</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                neque mi, dapibus quis nibh ut, molestie sagittis nisl.
                Pellentesque augue risus, dictum vitae velit in, commodo semper
                ipsum. Aliquam et ex luctus, mollis lectus in, pretium purus.
                Phasellus enim urna, sagittis eget magna id, tincidunt rutrum
                ex. Quisque non arcu vehicula, imperdiet arcu sit amet, maximus
                elit. Duis ac dignissim sapien. Donec nec finibus mauris, ut
                congue elit. Aliquam eleifend lorem eu magna dapibus semper.
                Nulla sit amet dapibus nibh. Maecenas justo turpis, posuere ut
                sollicitudin vitae, scelerisque ac quam. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Duis id sodales metus.
                Sed a orci nec erat dapibus gravida ut eget ligula. Nulla quis
                dignissim ligula.
              </p>
            </div>
          </div>
          <div
            className="large-container"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <img
              src="./nyu-area-of-excellence.jpg"
              alt="nyu areas of excellence diagram"
              className="section-pic"
            />
            <div>
              <h6 className="card-title">NYU Area Of Excellence </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                neque mi, dapibus quis nibh ut, molestie sagittis nisl.
                Pellentesque augue risus, dictum vitae velit in, commodo semper
                ipsum. Aliquam et ex luctus, mollis lectus in, pretium purus.
                Phasellus enim urna, sagittis eget magna id, tincidunt rutrum
                ex. Quisque non arcu vehicula, imperdiet arcu sit amet, maximus
                elit. Duis ac dignissim sapien. Donec nec finibus mauris, ut
                congue elit. Aliquam eleifend lorem eu magna dapibus semper.
                Nulla sit amet dapibus nibh. Maecenas justo turpis, posuere ut
                sollicitudin vitae, scelerisque ac quam. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Duis id sodales metus.
                Sed a orci nec erat dapibus gravida ut eget ligula. Nulla quis
                dignissim ligula.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="paper-poster" className="left-pad">
        <h3 className="section-title">Final Paper</h3>
        <div
          className="place-holder"
          data-aos="fade-up"
          data-aos-duration="750"
        ></div>
        <h3 className="section-title">Poster</h3>
        <div
          className="place-holder"
          data-aos="fade-up"
          data-aos-duration="750"
        ></div>
      </section>
      <Contact></Contact>
    </div>
  );
}
