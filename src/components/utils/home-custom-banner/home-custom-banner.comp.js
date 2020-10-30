import React from "react";
import { Link } from "react-router-dom";

import BannerItem1 from "../../../assets/images/home-custom-banner-1.jpg";
import BannerItem2 from "../../../assets/images/home-custom-banner-2.jpg";

import HorizantalSeparator from "../../utils/horizontal-separator/horizontal-separator.comp";

// Styles
import "./home-custom-banner.styles.scss";

const HomeCustomBanner = () => {
  return (
    <>
      <div className="home-custom-banner-wrapper container">
        <div className="home-custom-banner-content">
          <div className="banner-item">
            <img src={BannerItem1} alt="banner-item-1" />
            <Link to="/shop" className="shop-now">
              shop now
            </Link>
          </div>
          <div className="banner-item">
            <img src={BannerItem2} alt="banner-item-2" />
            <Link to="/shop" className="shop-now">
              shop now
            </Link>
          </div>
        </div>
      </div>
      <HorizantalSeparator />
    </>
  );
};

export default HomeCustomBanner;
