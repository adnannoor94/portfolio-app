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
              title="Transworld Associates"
              subtitle="Senior Software Developer"
              date="since sep 2019"
              description="Part of the in-house development team as a full-stack developer along with managing a team of juniors to accomplish organization goals using trending and optimal technologies as well as practices."
            />
            <TimelineItem
              title="Nayatel"
              subtitle="Senior Software Engineer"
              date="nov 2016 - sep 2019"
              description="Revamped frontend and backend of the inhouse CRM; developed new features for automation of processes and provided support."
            />
            <TimelineItem
              title="Foundation Unversity"
              subtitle="Student"
              date="aug 2012 - june 2016"
              description="Bachelor's degree in Software Engineering. In-depth study courses for each phase of software development life cycle."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default History;
