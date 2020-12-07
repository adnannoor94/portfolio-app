import React from "react";

function StatTag({ label, value }) {
  return (
    <div className="front-stat">
      <div className="stat-frame">
        <div className="stat-counter-box">
          <div className="stat-counter">{value}</div>
        </div>
        <h6> {label} </h6>
      </div>
    </div>
  );
}

export default StatTag;
