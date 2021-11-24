import React from "react";
import "../styles/about.css";

export default function renderAbout() {
  return (
    <section id="about">
      <h2 className="heading">About</h2>
      <div id="avatar" className="contents">
        <img
          id="me"
          src="./Assets/css/recent-photo.JPG"
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
    </section>
  );
}
