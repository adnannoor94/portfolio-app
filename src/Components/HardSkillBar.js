import React from "react";

import Progress from "react-progressbar";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

function HardSkillBar({ label, value }) {
  return (
    <div className="hard-skill-item">
      <div className="hard-skill-heading">
        <h6>{label}</h6>
        <span>{value}%</span>
      </div>
      <AnimatedProgressProvider valueEnd={value}>
        {(value) => {
          return <Progress completed={value} />;
        }}
      </AnimatedProgressProvider>
    </div>
  );
}

export default HardSkillBar;
