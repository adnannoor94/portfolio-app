import React from "react";

function ServiceCard({ label, text }) {
  return (
    <div className="service-card-container">
      <div className="service-card">
        <div className="service-card-content">
          <h5 className="mb-15"> {label} </h5>
          <p className="mb-15">{text}</p>
          <a href="#/contact" className="service-card-link with-chevron">
            <span>Order Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
