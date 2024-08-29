import React from "react";
import "./Header.css";
import menu from "/menu-icon.png";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header-container">
      <h1 id="site-name">Italo Peralta</h1>
      <div className="flex">
        <a className="drop-down-menu container">
          <img className="menu-icon" src={menu} />
        </a>
        <ul className="dropdown">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <Link to={"/Glass"} className="nav-link">
              GLASS
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about-me">
              ABOUT ME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work">
              WORK
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">
              EXPERIENCE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default header;
