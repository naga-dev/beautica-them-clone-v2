import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";

// Styles
import "swiper/swiper-bundle.css";
import "./home-carousel.styles.scss";

import SliderOneImg from "../../../assets/images/home-slide-1.jpg";
import SliderTwoImg from "../../../assets/images/home-slide-2.jpg";

const HomePageCarousel = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      autoplay: {
        delay: 2000,
      },
    });
  });

  return (
    <div className="home-page-sliser-wrapper container">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slider-item carousel">
              <img src={SliderOneImg} alt="slide-1" />
              <div className="carousel-content">
                <h1>
                  Beautifully Bare <br /> Collection
                </h1>
                <div className="carousel-description">
                  <p>It’s the Lightweight, Natural-Looking Collection You Love</p>
                </div>
                <div className="show-now-btn">
                  <Link to="/shop">shop now</Link>
                </div>
              </div>

              {/* Show content from 0 to 991px  */}

              <div className="mobile-carousel-content">
                <h1>Beautifully Bare Collection</h1>
                <div className="carousel-description">
                  <p>It’s the Lightweight, Natural-Looking Collection You Love</p>
                </div>
                <div className="show-now-btn">
                  <Link to="/shop">shop now</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slider-item secondCarousel">
              <img src={SliderTwoImg} alt="slider-2" />
              <div className="secondCarousel-content">
                <h1>Le Fragrances</h1>
                <div className="secondCarousel-description">
                  <p>
                    Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia
                    andos tincidunt risus delous an consequat lorem quisquemos sodales.
                  </p>
                </div>
                <div className="show-now-btn">
                  <Link to="/shop">shop now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel;
