import React from "react";

import TimelineItem from "../../Components/TimelineItem";

function History() {
  return (
    <div className="inner-content-wrapper">
      <section className="main-panel-section">
        <div className="row">
          <div className="section-title">
            <h4>History</h4>
          </div>
          <div className="history-panel">
          <TimelineItem
              title="Dubicars.com"
              subtitle="Senior Software Engineer - Frontend"
              date="since Feb 2021"
              description="Fontend Developer - UI/UX Designer - Vue.js Developer"
            />
            <TimelineItem
              title="Transworld Associates"
              subtitle="Senior Software Developer"
              date="Sep 2019 - Jan 2021"
              description="Part of the in-house development team as a full-stack developer along with managing a team of juniors to accomplish organization goals using trending and optimal technologies as well as practices."
            />
            <TimelineItem
              title="Nayatel"
              subtitle="Senior Software Engineer"
              date="Nov 2016 - Sep 2019"
              description="Revamped frontend and backend of the inhouse CRM; developed new features for automation of processes and provided support."
            />
            <TimelineItem
              title="Foundation Unversity"
              subtitle="Student"
              date="Aug 2012 - June 2016"
              description="Bachelor's degree in Software Engineering. In-depth study courses for each phase of software development life cycle."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default History;
