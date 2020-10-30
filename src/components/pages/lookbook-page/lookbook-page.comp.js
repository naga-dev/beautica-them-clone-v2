import React, { useEffect } from "react";
import Swiper from "swiper";

import Slide1 from "../../../assets/images/lookbook/slideshow-1.jpg";
import Slide2 from "../../../assets/images/lookbook/slideshow-2.jpg";
import Slide3 from "../../../assets/images/lookbook/slideshow-3.jpg";

const LookBook = () => {
  useEffect(() => {
    new Swiper(".swiper-lookbook-container", {
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      loop: true,
    });
  });

  return (
    <div className="container lookbook-page-wrapper" style={{ margin: "50px auto" }}>
      <h1 style={{ marginBottom: "10px" }}>Look Book</h1>
      <div className="swiper-lookbook-container" style={{ overflow: "hidden" }}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={Slide1} alt="slide-1" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="swiper-slide">
            <img src={Slide2} alt="slide-2" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="swiper-slide">
            <img src={Slide3} alt="slide-3" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookBook;
