import React from "react";
import "./Newsletter.css";
import Button from "../Button";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__box">
        <div className="newsletter__box__top"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" >
          <h5>SUBSCRIBE MY NEWSLETTER</h5>
        </div>
        <div className="newsletter__inp_box">
          <input type="email" name="" id="" placeholder="Enter Your Email" />
          <div className="newsletter_btn">
            <Button className="newsletter_btn">Notify Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
