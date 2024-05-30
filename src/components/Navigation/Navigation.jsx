import React, { useState } from "react";
import "./navigation.css";
import arrow from "../../images/arrow.png";

const Navigation = ({ handleNavigation }) => {
  const [currentPage, setCurrentPage] = useState("portrait");

  const handleClick = (content) => {
    setCurrentPage(content);
    handleNavigation(content);
  };

  return (
    <div className="navigation">
      <div className="option portrait" onClick={() => handleClick("portrait")}>
        <a href="#" className={currentPage === "portrait" ? "activated" : ""}>
          Home
        </a>
        <img src={arrow} alt="" />
      </div>

      <div className="option education" onClick={() => handleClick("education")}>
        <a href="#" className={currentPage === "education" ? "activated" : ""}>
         Education
        </a>
        <img src={arrow} alt="" />
      </div>


      <div
        className="option skills"
        onClick={() => handleClick("skills")}
      >
        <a
          href="#"
          className={currentPage === "skills" ? "activated" : ""}
        >
          Skills
        </a>
        <img src={arrow} alt="" />
      </div>

      <div className="option projects" onClick={() => handleClick("projects")}>
        <a href="#" className={currentPage === "projects" ? "activated" : ""}>
          Projects
        </a>
        <img src={arrow} alt="" />
      </div>

    </div>
  );
};

export default Navigation;
