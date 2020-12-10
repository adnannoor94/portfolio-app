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
                    Pixels Have Rights <br />
                    Too!
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
                    <a href="#/contact" className="main-banner-btn">
                      <span>Get in Touch</span>
                    </a>
                  </div>
                </div>
                <img
                  src="/assets/logo.png"
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
            text="Share your idea with the world through modern and responsive web sites. A beyond beautiful design to give your brand a voice. Lets see your creativity grow."
          />
          <ServiceCard
            label="Hybrid Mobile App Development"
            text="Now is the time to start your business through mobile app for both android and iOS. Reveal what is possible. Lets hear about that business idea of yours."
          />
          <ServiceCard
            label="Desktop App Development"
            text="Smoothen your day to day task efficiently by automating it through a desktop app for windows and macOS. Solve your complex needs. Lets make the pixels productive for you."
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
              title="John Mundi"
              subTitle="Client at Upwork"
              content="Adnan Listens well and understands how Applications work and websites work. 
              He is innovative and definitely keeps in touch with the client. 
              He has truly been exceptional with what we have requested and has gone above and beyond what was requested. 
              Will be working with him on all of our projects from now on. AMAZING. 
              We highly recommend him as he will look into anything we need or wanted and completed it in a very proficient way. 
              He has helped definitely with all aspects of the website and app that he developed from the beginning to end. 
              THANK YOU YOUR SKILLS ARE EXCEPTIONAL."
              imgUrl="https://www.upwork.com/static/images/upwork-fb.png"
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
              title="Nayatel"
              content="During his stay in the company we found him to be a hardworking and dedicated employee. We wish him success in his future endeavors."
              imgUrl="/assets/nayatel-logo.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
