import React from "react";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function renderContact() {
  return (
    <section id="contact">
      <h2 className="heading">Contact Me</h2>
      <div className="contents">
        <div>
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon2" />
          917-678-4276
          <FontAwesomeIcon />
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} size="2x" className="icon2" />
          elenaliu0415@gmail.com
          <FontAwesomeIcon />
        </div>
      </div>
      <Footer />
    </section>
  );
}
