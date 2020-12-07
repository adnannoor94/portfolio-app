import React from "react";

function TestimonialCard({ title, subTitle, content, imgUrl }) {
  return (
    <div className="mb-30">
      <div className="recommendation-box">
        <div className="testimonial-body">
          <img className="testimonial-face" src={imgUrl} alt={title} />
          <h5>{title}</h5>
          <div className="testimonial-subtitle mb-15">{subTitle}</div>
          <p className="mb-15">{content}</p>
        </div>
        <div className="testimonial-footer">
          <ul className="rate-star">
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
