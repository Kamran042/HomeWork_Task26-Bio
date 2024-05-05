import React from "react";
import "./RightNav.css";
import Button from "../Button";

const RightNav = () => {
    function openRightNav() {
        const rightnavBg = document.getElementById("rightnavBg"); // Получаем элемент по id
        console.log(rightnavBg);
        rightnavBg.classList.toggle('rightnav__bgActiv')
      }
  return (
    <div className="rightnav__bg"  id="rightnavBg"> 
      <div className="rightnav">
        <div className="rightnav__top">
          <div className="rightnav__top__left">
            <img src="./images/unnamed.png" alt="" />
          </div>
          <div className="rightnav__top__right">
            <div className="rightnav__top__right__icon" onClick={openRightNav}>
              <Button>
                <i className="fa-solid fa-xmark"></i>
              </Button>
            </div>
          </div>
        </div>
        <div className="rightnav__container">
          <div className="rightnav__container__text">
            <h4>ABOUT US</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
              incididunt ut labore et magna aliqua. Ut enim ad minim veniam
              laboris.
            </p>
            <h4>GET IN TOUCH</h4>
          </div>

          <div className="design__box__right rightNavBox">
            <form action="">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Your Number" />
              <textarea name="" id="" placeholder="Message"></textarea>
              <div className="formSubmitBtn">
                <Button>submit now</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
