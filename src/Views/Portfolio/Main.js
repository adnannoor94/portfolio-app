import React, { useState } from "react";

import Typist from "react-typist";
import "react-typist/dist/Typist.css";

import StatTag from "../../Components/StatTag";
import ServiceCard from "../../Components/ServiceCard";
import TestimonialCard from "../../Components/TestimonialCard";

const IBuildString = [
  "web interfaces.",
  "ios and android applications.",
  "automation tools.",
];

function Main() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div className="inner-content-wrapper">
      <section className="main-panel-section">
        <div className="row top-image-padding">
          <div className="col">
            <div className="main-art">
              <div className="main-banner-overlay">
                <div className="main-banner-content">
                  <h1 className="main-banner-title mb-15">
                    Discover my Amazing <br />
                    Art Space!
                  </h1>
                  <div className="main-banner-caption mb-25">
                    {"<"}
                    <i>code</i>
                    {"> "} I build{" "}
                    {!refresh && (
                      <Typist
                        startDelay={2000}
                        onTypingDone={() => {
                          setRefresh(true);
                          setTimeout(() => {
                            setRefresh(false);
                          }, 500);
                        }}
                      >
                        {IBuildString.map((typeString, index) => {
                          return (
                            <span key={index + "-type-string"}>
                              {typeString}
                              <Typist.Backspace
                                count={typeString.length}
                                delay={2000}
                              />
                            </span>
                          );
                        })}
                      </Typist>
                    )}
                    {" </"}
                    <i>code</i>
                    {">"}
                  </div>
                  <div className="banner-btn-wrapper">
                    <a href="#/portfolio/contact" className="main-banner-btn">
                      <span>Get in Touch</span>
                    </a>
                  </div>
                </div>
                <img
                  src="https://bslthemes.com/arter-wp/wp-content/uploads/2020/09/face-2-min.png"
                  className="main-banner-photo"
                  alt="Adnan Noor"
                />
              </div>
            </div>
            <div className="main-banner-back"></div>
          </div>
        </div>
      </section>
      <section className="main-panel-section">
        <div className="row">
          <StatTag label="Years Experience" value="4" />
          <StatTag label="Completed Projects" value="34" />
          <StatTag label="Happy Customers" value="8" />
          <StatTag label="Honors and Awards" value="15" />
        </div>
      </section>
      <section className="main-panel-section">
        <div className="row">
          <div className="section-title">
            <h4>My Services</h4>
          </div>
          <ServiceCard
            label="Web Development"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
          />
          <ServiceCard
            label="Hybrid Mobile App Development"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
          />
          <ServiceCard
            label="Desktop (Electron.js) Development"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
          />
        </div>
      </section>
      <section className="main-panel-section mb-15">
        <div className="row">
          <div className="section-title">
            <h4>Recommendations</h4>
          </div>
          <div className="testimonial-wrapper">
            <TestimonialCard
              title="John Mundi."
              subTitle="Client at Upwork"
              content="Adnan Listens well and understands how Applications work and websites work. He is innovative and definitely keeps in touch with the client. He has truly been exceptional with what we have requested and has gone above and beyond what was requested. Will be working with him on all of our projects from now on. AMAZING. We highly recommend him as he will look into anything we need or wanted and completed it in a very proficient way. He has helped definitely with all aspects of the website and app that he developed from the beginning to end. THANK YOU YOUR SKILLS ARE EXCEPTIONAL."
              imgUrl="https://www.upwork.com/static/images/upwork-fb.png"
            />
            <TestimonialCard
              title="Nayatel"
              content="Excellent coder fast replies good work."
              imgUrl="https://lemotivate.com/portfolio/nayatel-logo.png"
            />
          </div>
          <div className="testimonial-wrapper">
            <TestimonialCard
              title="Antonios Voulvoulis"
              subTitle="Client at Upwork"
              content="Excellent coder fast replies good work."
              imgUrl="https://www.upwork.com/static/images/upwork-fb.png"
            />
            <TestimonialCard
              title="TransWorld"
              content="Adnan Listens well and understands how Applications work and websites work. He is innovative and definitely keeps in touch with the client. He has truly been exceptional with what we have requested and has gone above and beyond what was requested. Will be working with him on all of our projects from now on. AMAZING. We highly recommend him as he will look into anything we need or wanted and completed it in a very proficient way. He has helped definitely with all aspects of the website and app that he developed from the beginning to end. THANK YOU YOUR SKILLS ARE EXCEPTIONAL."
              imgUrl="https://lemotivate.com/portfolio/transworld-logo.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
