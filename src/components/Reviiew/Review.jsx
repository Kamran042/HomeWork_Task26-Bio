import React from "react";
import "./Review.css";
import AutoPlayMethods from "./Slider";

const Review = () => {
  return (
    <div className="review dark__mode">
      <div className="review__box container">
        <div className="review__top" data-aos="flip-up">
          <h3>CLIENTS REVIEW</h3>
          <h2>My testomonial</h2>
        </div>
        <div className="review__slider">
          
          <AutoPlayMethods/>
        </div>
      </div>
    </div>
  );
};

export default Review;
