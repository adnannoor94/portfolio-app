import React from "react";
import { Chrono } from "react-chrono";

function Main() {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
    },
  ];

  return (
    <div className="inner-content-wrapper">
      <section className="main-panel-section">
        <div className="row">
          <div className="section-title">
            <h4>History</h4>
          </div>
          <Chrono items={items} mode="VERTICAL_ALTERNATING">
            <div>
              <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
            </div>
          </Chrono>
        </div>
      </section>
    </div>
  );
}

export default Main;
