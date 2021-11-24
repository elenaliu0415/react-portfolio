import React from "react";
import Footer from "./footer"
import "../styles/portfolio.css";

export default function renderPortfolio() {
    
  return (
    <section id="work">
      <div className="card-container contents">
        <div className="card">
          <a
            href="https://ericaleesnyder.github.io/meal-search-engine/"
            rel="project#1 link"
            target="blank"
          >
            <img
              id="first-project"
              src="./images/project-1-screenshot.png"
              alt="placeholder1"
            />
          </a>
          <div className="card-title">
            <h5>Rapid Recipes!</h5>
            <a
              href="https://github.com/ericaleesnyder/meal-search-engine"
              target="blank"
            >
              GitHub Pages
            </a>
          </div>
        </div>
        <div className="card">
          <a
            href="https://elenaliu0415.github.io/weather-dashboard/"
            rel="project#1 link"
            target="blank"
          >
            <img
              src="./Assets/images/weather-dashboard-screenshot.png"
              alt="placeholder2"
            />
          </a>
          <div className="card-title">
            <h5>Weather Dashboard</h5>
            <a
              href="https://github.com/elenaliu0415/weather-dashboard"
              target="blank"
            >
              GitHub Pages
            </a>
          </div>
        </div>
        <div className="card">
          <img src="./Assets/images/pic5.jpg" alt="placeholder3" />
          <div className="card-title">
            <h5>Project #3</h5>
            <p>Project #3 Describtion</p>
          </div>
        </div>
        <div className="card">
          <img src="./Assets/images/pic6.jpg" alt="placeholder4" />
          <div className="card-title">
            <h5>Project #4</h5>
            <p>Project #4 Describtion</p>
          </div>
        </div>
        <div className="card">
          <img src="./Assets/images/pic9.jpg" alt="placeholder5" />
          <div className="card-title">
            <h5>Project #5</h5>
            <p>Project #5 Describtion</p>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
