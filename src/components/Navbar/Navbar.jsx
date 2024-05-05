import React from "react";
import "./Navbar.css";

const Navbar = () => {
  function openRightNav() {
    const rightnavBg = document.getElementById("rightnavBg"); // Получаем элемент по id
    console.log(rightnavBg);
    rightnavBg.classList.toggle('rightnav__bgActiv')
  }
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src="/images/loqo.png" alt="" />
      </div>
      <div className="navbar__center">
        <ul className="navbar__nav">
          <li>
            <a href="./index.html" className="activ_navbar">
              HOME<i className="fa-solid fa-chevron-down"></i>
            </a>
          </li>
          <li>
            <a href="./index.html">ABOUT US</a>
          </li>
          <li>
            <a href="./index.html">SERVICES</a>
          </li>
          <li>
            <a href="./index.html">PROJECTS</a>
          </li>
          <li>
            <a href="./index.html">
              BLOG<i className="fa-solid fa-chevron-down"></i>
            </a>
          </li>
          <li>
            <a href="./index.html">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar__right" onClick={openRightNav}>
          <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
