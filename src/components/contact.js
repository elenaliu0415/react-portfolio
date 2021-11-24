import React from "react";

export default function renderContact() {
  return (
    <section id="contact">
      <h2 class="heading">Contact</h2>
      <div class="contents">
        <i class="fas fa-mobile-alt">
          <a href="#">917-678-4276</a>
        </i>
        <i class="fas fa-envelope">
          <a href="#">elenaliu0415@gmail.com</a>
        </i>
        <i class="fab fa-github-square">
          <a href="https://github.com/elenaliu0415" target="_blank">
            GitHub
          </a>
        </i>
        <i class="fab fa-instagram-square">
          <a href="https://www.instagram.com/" target="_blank">
            Instagram
          </a>
        </i>
        <i class="fab fa-linkedin">
          <a href="https://www.linkedin.com/in/yi-elena-liu" target="_blank">
            Linkedin
          </a>
        </i>
      </div>
    </section>
  );
}
