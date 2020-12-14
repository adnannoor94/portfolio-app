import React, { useContext } from "react";
import cx from "classnames";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider from "../../Components/AnimatedProgressProvider";
import HardSkillBar from "../../Components/HardSkillBar";

import RightMenuContext from "../../Context/RightMenu";

function LeftInfoPanel() {
  const { isInfoPanelOpen, setInfoPanelStatus, isMenuOpen } = useContext(
    RightMenuContext
  );

  const infoPanelToggleBtnClasses = cx(
    "info-panel-toggle-btn",
    isMenuOpen ? "in-active" : null
  );

  const langProgressStyle = buildStyles({
    pathColor: "#ffc107",
    textColor: "#cacace",
    trailColor: "#191923",
    pathTransition: "none",
  });

  return (
    <div className="padding-horizontal-15">
      <div className="info-panel-top-bar">
        <div
          className={infoPanelToggleBtnClasses}
          onClick={() => setInfoPanelStatus(!isInfoPanelOpen)}
        >
          <i className="fa fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="info-panel-header">
        <div className="info-panel-avatar">
          <div className="avatar-curtain">
            <img src="/assets/top-thumbnail.png" alt="avatar" />
          </div>
        </div>
        <h5 className="info-panel-name mb-10">
          <a href="#/main">Adnan Noor</a>
        </h5>
        <div className="info-sm-text">
          Front-end Developer
          <br />
          React Developer
        </div>
      </div>
      <div className="info-scroll-frame">
        <div className="info-table p-15-15">
          <ul>
            <li>
              <h6>Residence:</h6>
              <span>Pakistan</span>
            </li>
            <li>
              <h6>City:</h6>
              <span>Islamabad</span>
            </li>
            <li>
              <h6>Age:</h6>
              <span>26</span>
            </li>
          </ul>
        </div>
        <div className="horizontal-divider"></div>
        <div className="lang-skills-container p-30-15">
          <div className="lang-skills-item">
            <div className="lang-skills-progress">
              <AnimatedProgressProvider valueEnd={100}>
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={value}
                      text={`${roundedValue}%`}
                      styles={langProgressStyle}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>
            <h6>Urdu</h6>
          </div>
          <div className="lang-skills-item">
            <div className="lang-skills-progress">
              <AnimatedProgressProvider valueEnd={90}>
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={value}
                      text={`${roundedValue}%`}
                      styles={langProgressStyle}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>
            <h6>English</h6>
          </div>
        </div>
        <div className="horizontal-divider"></div>
        <div className="hard-skills-container p-30-15">
          <HardSkillBar label="React" value={90} />
          <HardSkillBar label="Node.js / Javascript" value={80} />
          <HardSkillBar label="PHP" value={80} />
          <HardSkillBar label="CSS" value={85} />
          <HardSkillBar label="MySQL" value={65} />
        </div>
        <div className="horizontal-divider"></div>
        <ul className="knowledge-list padding-left-none p-15-0">
          <li>UI/UX Designing</li>
          <li>Bootstrap</li>
          <li>Sass</li>
          <li>GIT Knowledge</li>
          <li>Dockerization</li>
        </ul>
        <div className="horizontal-divider"></div>
        <div className="links-frame p-15-15">
          <a
            href="/assets/resume.pdf"
            className="art-link"
            download="Adnan Resume"
          >
            Download CV <i className="fa fa-download"></i>
          </a>
        </div>
      </div>
      <div className="social-links">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://dribble.com"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <i className="fa fa-dribbble"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default LeftInfoPanel;
