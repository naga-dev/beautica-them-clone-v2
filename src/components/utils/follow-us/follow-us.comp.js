import React, { useEffect } from "react";
import Swiper from "swiper";

import FollowUsItem1 from "../../../assets/images/follow-us/follow-us-1.jpg";
import FollowUsItem2 from "../../../assets/images/follow-us/follow-us-2.jpg";
import FollowUsItem3 from "../../../assets/images/follow-us/follow-us-3.jpg";
import FollowUsItem4 from "../../../assets/images/follow-us/follow-us-4.jpg";
import FollowUsItem5 from "../../../assets/images/follow-us/follow-us-5.jpg";
import FollowUsItem6 from "../../../assets/images/follow-us/follow-us-6.jpg";
import FollowUsItem7 from "../../../assets/images/follow-us/follow-us-7.jpg";

// Styles
import "swiper/swiper-bundle.css";
import "./follow-us.styles.scss";

const FollowUs = () => {
  useEffect(() => {
    new Swiper(".swiper-follow-us-container", {
      slidesPerView: 6,
      autoplay: {
        delay: 2000,
      },
    });
  });

  return (
    <div className="follow-us">
      <div className="swiper-follow-us-container" style={{ overflow: "hidden" }}>
        <div className="swiper-wrapper">
          <div className="swiper-slide follow-us-item">
            <img src={FollowUsItem1} alt="item" />
          </div>
          <div className="swiper-slide follow-us-item">
            <img src={FollowUsItem2} alt="item" />
          </div>
          <div className="swiper-slide follow-us-item">
            <img src={FollowUsItem3} alt="item" />
          </div>
          <div className="swiper-slide follow-us-item">
            <img src={FollowUsItem4} alt="item" />
          </div>
          <div className="swiper-slide follow-us-item">
            <img src={FollowUsItem5} alt="item" />
          </div>
          <div className="swiper-slide follow-us-item">
            <img src={FollowUsItem6} alt="item" />
          </div>
          <div className="swiper-slide follow-us-item">
            <img src={FollowUsItem7} alt="item" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
