import React, { useRef } from "react";
import Slider from "react-slick";

function AutoPlayMethods() {
  let  sliderRef = useRef(null);
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider-container slider_xz">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div className="slider__card">
          <div className="slider__top">
            <div className="slider__top__left">
              <div className="slider__top__left__star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h5>Eleanor pena</h5>
              <h6>Marketing Coordinator</h6>
            </div>
            <div className="slider__top__right">
              <img
                src="https://zyan.vercel.app/images/testimonial/1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="slider__button">
            <div className="slider__button__left">
              <p>
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
            </div>
            <div className="slider__button__right">
              <img src="https://zyan.vercel.app/images/icon/quot.png" alt="" />
            </div>
          </div>
        </div>
        <div className="slider__card">
          <div className="slider__top">
            <div className="slider__top__left">
              <div className="slider__top__left__star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h5>Eleanor pena</h5>
              <h6>Marketing Coordinator</h6>
            </div>
            <div className="slider__top__right">
              <img
                src="https://zyan.vercel.app/images/testimonial/2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="slider__button">
            <div className="slider__button__left">
              <p>
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
            </div>
            <div className="slider__button__right">
              <img src="https://zyan.vercel.app/images/icon/quot.png" alt="" />
            </div>
          </div>
        </div>
        <div className="slider__card">
          <div className="slider__top">
            <div className="slider__top__left">
              <div className="slider__top__left__star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h5>Eleanor pena</h5>
              <h6>Marketing Coordinator</h6>
            </div>
            <div className="slider__top__right">
              <img
                src="https://zyan.vercel.app/images/testimonial/1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="slider__button">
            <div className="slider__button__left">
              <p>
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
            </div>
            <div className="slider__button__right">
              <img src="https://zyan.vercel.app/images/icon/quot.png" alt="" />
            </div>
          </div>
        </div>
        <div className="slider__card">
          <div className="slider__top">
            <div className="slider__top__left">
              <div className="slider__top__left__star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h5>Eleanor pena</h5>
              <h6>Marketing Coordinator</h6>
            </div>
            <div className="slider__top__right">
              <img
                src="https://zyan.vercel.app/images/testimonial/1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="slider__button">
            <div className="slider__button__left">
              <p>
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
            </div>
            <div className="slider__button__right">
              <img src="https://zyan.vercel.app/images/icon/quot.png" alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default AutoPlayMethods;
