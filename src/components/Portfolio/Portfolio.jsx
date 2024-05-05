import React from "react";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();


const Portfolio = () => {
  return (
    <div className="portfolio dark__mode">
      <div className="portfolio__box container">
        <div className="portfolio__top" data-aos="fade-up">
          <h3>MY RECENT PORTFOLIO</h3>
          <h2>
            Elevate your brand to new <br /> heights with our portfolio expertise
          </h2>
        </div>
        <div className="portfolio__images_box">
          <div className="portfolio__images_box__card_first portfolio__images_box___card">
            <img src="https://zyan.vercel.app/images/portfolio/1.jpg" alt="" />
            <div className="portfolio__images_box__text">
                <h4>Sheet Metal Bending</h4>
                <div className="portfolio__images_box__text__sliniyey">
                    <div className="liniya__txt"></div>
                   <p>Youtube</p>
                </div>
            </div>
          </div>
          <div className="portfolio__images_box__card_second portfolio__images_box___card">
            <img src="https://zyan.vercel.app/images/portfolio/2.jpg" alt="" />
            <div className="portfolio__images_box__text">
                <h4>Sheet Metal Bending</h4>
                <div className="portfolio__images_box__text__sliniyey">
                    <div className="liniya__txt"></div>
                   <p>Vimeo</p>
                </div>
            </div>
          </div>
        </div>
        <div className="portfolio__images_box">
          <div className="portfolio__images_box__card_three portfolio__images_box___card">
            <img src="https://zyan.vercel.app/images/portfolio/3.jpg" alt="" />
            <div className="portfolio__images_box__text">
                <h4>Sheet Metal Bending</h4>
                <div className="portfolio__images_box__text__sliniyey">
                    <div className="liniya__txt"></div>
                   <p>Soundcloud</p>
                </div>
            </div>
          </div>
          <div className="portfolio__images_box__card_four portfolio__images_box___card">
            <img src="https://zyan.vercel.app/images/portfolio/4.jpg" alt="" />
            <div className="portfolio__images_box__text">
                <h4>Sheet Metal Bending</h4>
                <div className="portfolio__images_box__text__sliniyey">
                    <div className="liniya__txt"></div>
                   <p>Image</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
