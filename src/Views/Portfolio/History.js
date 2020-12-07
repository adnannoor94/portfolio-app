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
              description="Some job description. To tell about the experience and
            stuff."
            />
            <TimelineItem
              title="Nayatel"
              subtitle="Senior Software Engineer"
              date="nov 2016 - sep 2019"
              description="Some job description. To tell about the experience and
            stuff."
            />
            <TimelineItem
              title="Foundation Unversity"
              subtitle="Bachelor of Sofware Engineering"
              date="aug 2012 - june 2016"
              description="Some job description. To tell about the experience and
            stuff."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default History;
