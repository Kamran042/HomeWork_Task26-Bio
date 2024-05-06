import React, { useEffect, useState } from "react";
import "./scrollBtn.css";

const ProgressBar = () => {
  const [progressOffset, setProgressOffset] = useState(0);

  useEffect(() => {
    const progressPath = document.querySelector(".progress path");
    const progressContainer = document.querySelector(".progress");

    const updateProgressBar = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollPercentage =
        (scrollY / (documentHeight - windowHeight)) * 100;

      // Максимальное значение dashOffset будет равно обхвату круга
      const maxDashOffset = Math.PI * progressPath.getTotalLength();

      // Устанавливаем значение strokeDasharray
      progressPath.style.strokeDasharray = `${maxDashOffset}`;

      // Вычисляем значение strokeDashoffset
      const dashOffset = maxDashOffset * (1 - scrollPercentage / 100);

      setProgressOffset(dashOffset);
      scrollY > 50
        ? progressContainer.classList.add("active")
        : progressContainer.classList.remove("active");
    };

    window.addEventListener("scroll", updateProgressBar);
    window.addEventListener("resize", updateProgressBar);

    // Начальный вызов для установки положения прогресса
    updateProgressBar();

    return () => {
      window.removeEventListener("scroll", updateProgressBar);
      window.removeEventListener("resize", updateProgressBar);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="progress" onClick={handleScrollToTop}>
      <svg className="progress-svg" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{ transition: "stroke-dashoffset 10ms linear 0s", stroke: "white", strokeWidth: "2px", fill: "none", strokeDashoffset: progressOffset }}
        ></path>
       
      </svg>
    </div>
  );
};

export default ProgressBar;
