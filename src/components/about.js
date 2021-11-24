import React from "react";
import "../styles/about.css";
import Footer from "./footer"

export default function renderAbout() {
  return (
    <section id="about">
      <div id="avatar" className="contents">
        <img
          id="me"
          src="./images/recent-photo2.JPG" 
          alt="Elena"
        />
        <div id="intro">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            hic voluptas vitae eaque, odit reprehenderit nemo? Eos officia
            voluptates perspiciatis quo, laudantium, odit tempora explicabo
            magni, totam dolor maiores cumque.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            hic voluptas vitae eaque, odit reprehenderit nemo?
          </p>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
