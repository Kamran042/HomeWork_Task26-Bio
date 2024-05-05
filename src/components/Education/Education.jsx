import React from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Education = () => {
  return (
    <div className="education">
      <div className="education__box container">
        <div className="education__top" data-aos="fade-up"
     data-aos-duration="3000">
          <h3>EDUCATION & SKILL</h3>
          <h2>Showcasing your talent amplifying your impact</h2>
        </div>
        <div className="education__achivment" data-aos="fade-up" >
          <div className="education__achivment__card">
            <span>2014 - 2018</span>
            <h4>Wordpress and End Developer</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem
            </p>
          </div>
          <div className="education__achivment__card">
            <span>2012 - 2014</span>
            <h4>Python Developer</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem
            </p>
          </div>
          <div className="education__achivment__card">
            <span>2005 - 2009</span>
            <h4>Kent State University</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem
            </p>
          </div>
          <div className="education__achivment__card">
            <span>2009 - 2012</span>
            <h4>User Experience Design</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem
            </p>
          </div>
        </div>
        <div className="education__progrDil">
          <div className="education__progrDil__card" >
            <div className="education__progrDil__card__into" >
              <h3>HTML</h3>
              <div className="bar__liniya" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="education__progrDil__card">
            <div className="education__progrDil__card__into">
              <h3>Python</h3>
              <div className="bar__liniya" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="education__progrDil__card">
            <div className="education__progrDil__card__into">
              <h3>CSS</h3>
              <div className="bar__liniya" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="education__progrDil__card">
            <div className="education__progrDil__card__into">
              <h3>Photoshop</h3>
              <div className="bar__liniya" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="education__progrDil__card">
            <div className="education__progrDil__card__into">
              <h3>Java Script</h3>
              <div className="bar__liniya" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="education__progrDil__card">
            <div className="education__progrDil__card__into">
              <h3>Figma</h3>
              <div className="bar__liniya" data-aos="fade-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
