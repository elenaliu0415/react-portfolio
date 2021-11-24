import "./App.css";
import { useState } from "react";
import About from "./components/about";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

const renderPage = (currentPage) => {
  switch (currentPage) {
    case "about":
      return <About />;
    case "portfolio":
      return <Portfolio />;
    case "contact":
      return <Contact />;
    default:
      return <Home />;
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <a href="/#home" onClick={() => setCurrentPage("home")}>Home</a>
          </li>
          <li>
            <a href="/#about" onClick={() => setCurrentPage("about")}>About</a>
          </li>
          <li>
            <a href="/#portfolio" onClick={() => setCurrentPage("portfolio")}>Portfolio</a>
          </li>
          <li>
            <a href="/#contact" onClick={() => setCurrentPage("contact")}>Contact</a>
          </li>
          <li>
            <a href="./Yi_Liu_Resume_15.PDF" download>
              Resume
            </a>
          </li>
        </ul>
      </nav>
      {renderPage(currentPage)}
    </div>
  );
}

export default App;
