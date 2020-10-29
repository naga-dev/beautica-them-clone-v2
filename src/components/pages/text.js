import React, { useEffect } from "react";
import Swiper from "swiper";

import "swiper/swiper-bundle.css";

import SliderOneImg from "../../assets/images/home-slide-1.jpg";
import SliderTwoImg from "../../assets/images/home-slide-2.jpg";

const TestPage = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      autoplay: true,
    });
  });

  return (
    <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={SliderOneImg} alt="" style={{ width: "100vw", height: "100vh" }} />
          </div>
          <div className="swiper-slide">
            <img src={SliderTwoImg} alt="" style={{ width: "100vw", height: "100vh" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
