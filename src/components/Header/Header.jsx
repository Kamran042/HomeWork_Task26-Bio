import React, { useState, useEffect } from "react";
import "./Header.css";
import Button from "../Button";

const Header = () => {
  const jobs = ["player", "designer", "coder"];
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header">
      <div className="container containerForHeader">
        <div className="header__left">
          <h1>
            Hi, I'm KAMRAN! Creative
            <span className="job-conatiner">
              <span key={currentJobIndex} className="job current-job">
                {jobs[currentJobIndex]}
              </span>
            </span>
          </h1>
          <p>
            I'm a passionate UI/UX designer with a mission to create delightful
            and intuitive digital experiences. With a strong foundation in
            design principles and a keen eye for detail, I specialize in
            translating complex ideas into user-friendly interfaces that
            captivate and engage.
          </p>
          <div className="header__left__btns">
            <Button>
              Download Cv <i className="fa-solid fa-download"></i>
            </Button>
            <a className="header__left__btn_play" href="#">
              <i className="fa-solid fa-circle-play"></i> Watch the Video
            </a>
          </div>
        </div>
        <div className="header__right">
          <div className="img">
            <img src="./images/banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
