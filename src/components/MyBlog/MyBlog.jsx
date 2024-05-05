import React from "react";
import "./MyBlog.css";
import Button from "../Button";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const MyBlog = () => {
  return (
    <div className="myBlog dark__mode" >
      <div className="container" >
        <div className="myBlog__top" data-aos="fade-up-right" data-aos-duration="3000">
          <div className="myBlog__top__left">
            <h3>MY BLOG</h3>
            <h2>Unlocking the potential of your personal brand</h2>
          </div>
          <div className="myBlog__top__right">
            <Button>More Blog +</Button>
          </div>
        </div>
        <div className="myBlog__box" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <div className="myBlog__box__card_out__flex">
            <div className="myBlog__box__card_out">
              <div className="myBlog__box__card">
                <img src="https://zyan.vercel.app/images/blog/1.jpg" alt="" />
                <div className="myBlog__box__card__tittle">
                  <div className="myBlog__box__card__tittle__top">
                    <div className="myBlog__box__card__tittle__top__card">
                      <i class="fa-solid fa-circle-user"></i>
                      <h5>By admin</h5>
                    </div>
                    <div className="myBlog__box__card__tittle__top__card">
                      <i class="fa-solid fa-comments"></i>
                      <h5>Comments (05)</h5>
                    </div>
                  </div>
                  <h6>The standard personal My portfolio</h6>
                </div>
                <div className="myBlog__box__card__tittle_top_continer">
                  <p>31 December,2022</p>
                </div>
              </div>
            </div>
            <div className="myBlog__box__card_out">
              <div className="myBlog__box__card">
                <img src="https://zyan.vercel.app/images/blog/2.jpg" alt="" />
                <div className="myBlog__box__card__tittle">
                  <div className="myBlog__box__card__tittle__top">
                    <div className="myBlog__box__card__tittle__top__card">
                      <i class="fa-solid fa-circle-user"></i>
                      <h5>By admin</h5>
                    </div>
                    <div className="myBlog__box__card__tittle__top__card">
                      <i class="fa-solid fa-comments"></i>
                      <h5>Comments (05)</h5>
                    </div>
                  </div>
                  <h6>The standard personal My portfolio</h6>
                </div>
                <div className="myBlog__box__card__tittle_top_continer">
                  <p>31 December,2022</p>
                </div>
              </div>
            </div>
            <div className="myBlog__box__card_out">
              <div className="myBlog__box__card">
                <img src="https://zyan.vercel.app/images/blog/3.jpg" alt="" />
                <div className="myBlog__box__card__tittle">
                  <div className="myBlog__box__card__tittle__top">
                    <div className="myBlog__box__card__tittle__top__card">
                      <i class="fa-solid fa-circle-user"></i>
                      <h5>By admin</h5>
                    </div>
                    <div className="myBlog__box__card__tittle__top__card">
                      <i class="fa-solid fa-comments"></i>
                      <h5>Comments (05)</h5>
                    </div>
                  </div>
                  <h6>The standard personal My portfolio</h6>
                </div>
                <div className="myBlog__box__card__tittle_top_continer">
                  <p>31 December,2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
