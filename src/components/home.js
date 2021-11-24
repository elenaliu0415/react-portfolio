import React from "react";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Footer from "./footer"

export default function renderHome() {
  return (
    <div>
      <section id="home">
        <div className="main">
          <h1>
            I AM <br />
            YI ELENA LIU
          </h1>
          <div className="icon-container">
            <a
              href="https://github.com/elenaliu0415"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" className="icon" href="https://github.com/elenaliu0415"
              target="_blank"
              rel="noreferrer"/>
            </a>
            <a
              href="https://www.linkedin.com/in/yi-elena-liu"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="icon"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
