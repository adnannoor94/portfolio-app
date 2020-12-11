import React from "react";

function TimelineItem({ title, subtitle, date, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-mark"></div>
      <div className="timeline-content-wrapper">
        <div className="timeline-content">
          <div className="content-header">
            <div className="header-left">
              <h5>{title}</h5>
              <div className="testimonial-subtitle mb-15">{subtitle}</div>
            </div>
            <div className="header-right">
              <div className="header-date">{date}</div>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
