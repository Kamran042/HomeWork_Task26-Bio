import React from "react";
import "./AboutMe.css";
import Button from "../Button";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const AboutMe = () => {
  return (
    <div className="about_me dark__mode">
      <div className="about_me_box container">
        <div className="about_me_box__left" data-aos="fade-right">
          <div className="about_me_box__left__top">
            <h3>ABOUT ME</h3>
            <h2>Transforming visions into exceptional portfolios</h2>
          </div>
          <div className="about_me_box__left__bootom">
            <div className="about_me_box__left__bootom__liniya"></div>
            <div className="about_me_box__left__bootom__tittle">
              <p>
                Nemo design enim ipsam voluptatem quim voluptas sit aspernatur
                aut odit auting fugit sed thisnquia consequuntur magni dolores
                eos designer heresm qui ratione
              </p>
              <Button>
                Download Cv <i class="fa-solid fa-download"></i>
              </Button>
            </div>
          </div>
        </div>
        <div className="about_me_box__right" data-aos="flip-right"> 
          <div className="about_me_box__right__box">
            <img src="https://zyan.vercel.app/images/about_img.jpg" alt="" />
            <div className="about_me_box__right__box__card">
              <div className="about_me_box__right__box__card__left">
                <div className="about_me_box__right__box__card__left__circle">
                  <img src="./images/pie-chart.png" alt="" />
                </div>
              </div>
              <div className="about_me_box__right__box__card__right">
                <h5>Daily Activity</h5>
                <p>Loream is ispam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
