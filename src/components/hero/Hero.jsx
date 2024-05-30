import React, { useState, useEffect } from "react";
import "./hero.css";
import portrait from "../../images/portrait.png";
import link from "../../images/link.png";

const Hero = ({ activeContent }) => {
  const [slideState, setSlideState] = useState({
    portrait: "active",
    education: "slideoutright",
    projects: "slideoutright",
    skills: "slideoutright",
  });

  function resetAnimation(element) {
    if (!element || !element.style) {
      return;
    }

    // Clear existing animation
    element.style.animation = "none";

    element.offsetHeight;

    element.style.animation = null;

    const childElements = element.children;
    for (let i = 0; i < childElements.length; i++) {
      resetAnimation(childElements[i]);
    }
  }

  function updateslide(direction) {
    if (direction === "right") {
      setSlideState((prevState) => ({
        ...prevState,
        [Object.keys(slideState).find((key) => slideState[key] === "active")]:
          "slideoutleft",
      }));
      setSlideState((prevState) => ({
        ...prevState,
        [activeContent]: "active",
      }));
    } else {
      setSlideState((prevState) => ({
        ...prevState,
        [Object.keys(slideState).find((key) => slideState[key] === "active")]:
          "slideoutright",
      }));
      setSlideState((prevState) => ({
        ...prevState,
        [activeContent]: "active",
      }));
    }
  }

  useEffect(() => {
    const selector = `.${activeContent}Slide`;
    console.log(selector);
    const element = document.querySelector(selector);
    resetAnimation(element);
  }, [activeContent]);

  if (slideState[activeContent] === "active") {
    // Do something if activeContent is "active"
  } else if (slideState[activeContent] === "slideoutright") {
    updateslide("right");
  } else if (slideState[activeContent] === "slideoutleft") {
    updateslide("left");
  }

  return (
    <div className="hero">
      <div
        className={`slide portraitContainer portrait ${slideState.portrait}`}
      >
        <div className="introduction">
          <p>
            Hello, I'm <span>Haseeb</span> <br /> — A frontend architect shaping
            digital experiences.
          </p>
        </div>
        <div className="circle">
          <img className="portraitImage" src={portrait} alt="" />
        </div>
      </div>

      <div className={`slide educationSlide  ${slideState.education}`}>
        <h1 className="slideTitle">Education</h1>
        <div className="collegeEducation educationDiv">
          <h3 className="educationTitle">Islamia Govt College Sukkur</h3>
          <p className="educationDescription">
            I have completed my intermediate from Govt Islamia Science College
            Sukkur, Pakistan
          </p>
        </div>
        <div className="universityEducation educationDiv">
          <h3 className="educationTitle">Sukkur IBA</h3>
          <p className="educationDescription">
            I am currently in 6th semester, studying Computer Science from IBA
            Sukkur, Pakistan
          </p>
        </div>
      </div>

      <div className={`slide skillsSlide  ${slideState.skills}`}>
        <h1 className="slideTitle">Skills</h1>
        <div className="skillsContainer">
          <div className="skillType">
            <h3 className="skillTitle">Front-End</h3>
            <div className="skill">
              <p className="skillName">HTML</p>
              <div className="skillBar ">
                <div className="fill html"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">CSS</p>
              <div className="skillBar">
                <div className="fill css"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">JS</p>
              <div className="skillBar">
                <div className="fill js"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">React</p>
              <div className="skillBar">
                <div className="fill react"></div>
              </div>
            </div>
          </div>
          <div className="skillType">
            <h3 className="skillTitle">Coding</h3>
            <div className="skill">
              <p className="skillName">js</p>
              <div className="skillBar ">
                <div className="fill js-lang"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">Java</p>
              <div className="skillBar">
                <div className="fill java"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">C++</p>
              <div className="skillBar">
                <div className="fill cpp"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">Python</p>
              <div className="skillBar">
                <div className="fill python"></div>
              </div>
            </div>
          </div>
          <div className="skillType">
            <h3 className="skillTitle">Back-End</h3>
            <div className="skill">
              <p className="skillName">Node JS</p>
              <div className="skillBar ">
                <div className="fill nodejs"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">Sockets</p>
              <div className="skillBar">
                <div className="fill sockets"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">Express</p>
              <div className="skillBar">
                <div className="fill express"></div>
              </div>
            </div>
          </div>
          <div className="skillType databaseskill">
            <h3 className="skillTitle">Databases</h3>
            <div className="skill">
              <p className="skillName">MySql</p>
              <div className="skillBar ">
                <div className="fill mysql"></div>
              </div>
            </div>
          </div>
          <div className="skillType">
            <h3 className="skillTitle">Others</h3>
            <div className="skill">
              <p className="skillName">Unity 2d</p>
              <div className="skillBar ">
                <div className="fill unity"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">OS</p>
              <div className="skillBar ">
                <div className="fill os"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">CLI</p>
              <div className="skillBar ">
                <div className="fill cli"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">AI Skills</p>
              <div className="skillBar ">
                <div className="fill ai"></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">Problem Solving</p>
              <div className="skillBar ">
                <div className="fill problemsolving"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`slide projectsSlide  ${slideState.projects}`}>
        <h1 className="slideTitle">Projects</h1>
        <table className="projectTable">
          <thead>
            <tr>
              <th>Year</th>
              <th>Project Name</th>
              <th className="hideOnSmall2">Type</th>
              <th className="hideOnSmall1">Members</th>
              <th className="">Build with</th>
              <th className="hideOnSmall3">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" tableRow docStatus">
              <td className="greyOut">2024</td>
              <td>
                <p className="projectTitle"> UI-Architect</p>

                <a
                  className="projectTableLink"
                  target="_blank"
                  href="https://uiarchitect.netlify.app/"
                >
                  UI-Architect<img src={link} alt="" />
                </a>
              </td>
              <td className="hideOnSmall2">Ready Made UI Elements</td>
              <td className="greyOut hideOnSmall1">Solo</td>
              <td className="buildWith">
                <ul className="projectToolsList">
                  <li>React Js</li>
                </ul>
              </td>
              <td className="greyOut projectLink hideOnSmall3">
                <a target="_blank" href="https://uiarchitect.netlify.app/">
                  UI-Architect <img src={link} alt="" />
                </a>
              </td>
            </tr>
            <tr className=" tableRow docStatus">
              <td className="greyOut">2024</td>
              <td>DocStatus</td>
              <td className="hideOnSmall2">Doctor Inquiry System</td>
              <td className="greyOut hideOnSmall1">Solo</td>
              <td className="buildWith">
                <ul className="projectToolsList">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Js</li>
                  <li>Node Js</li>
                  <li>MySql</li>
                </ul>
              </td>
              <td className="greyOut projectLink hideOnSmall3">
                <a target="-blank" style={{ pointerEvents: "none" }} href="">
                  DocStatus
                </a>
              </td>
            </tr>
            <tr className=" tableRow docStatus">
              <td className="greyOut">2023</td>
              <td>
                <p className="projectTitle"> Code-X</p>

                <a
                  className="projectTableLink"
                  target="_blank"
                  href="https://drive.google.com/file/d/1qPizmob5eJ4ijV-lUwYAYmOkFgB6-Uxy/view?usp=drivesdk"
                >
                  Code-X<img src={link} alt="" />
                </a>
              </td>
              <td className="hideOnSmall2">Cryptography based 2d word game</td>
              <td className="greyOut hideOnSmall1">Two</td>
              <td className="buildWith">
                <ul className="projectToolsList">
                  <li>Unity Engine</li>
                  <li>Illustrator</li>
                  <li>Audacity</li>
                </ul>
              </td>
              <td className="greyOut projectLink hideOnSmall3">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1qPizmob5eJ4ijV-lUwYAYmOkFgB6-Uxy/view?usp=drivesdk"
                >
                  Code-X <img src={link} alt="" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hero;
