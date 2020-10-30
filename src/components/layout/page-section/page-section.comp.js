import React, { useEffect } from "react";
import Swiper from "swiper";
import SHOP_PRODUCTS from "../../../data/SHOP_PRODUCTS";
import HorizantalSeparator from "../../utils/horizontal-separator/horizontal-separator.comp";
import ShopProduct from "../../utils/shop-product/shop-product.comp";

// Styles
import "./page-section.styles.scss";

const PageSection = ({ title, subTitle }) => {
  useEffect(() => {
    new Swiper(".swiper-page-section-container", {
      slidesPerView: 4,
      loop: false,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        552: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 40,
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  });

  return (
    <>
      <div className="products-section-wrapper  container">
        <div className="swiper-page-section-container" style={{ overflow: "hidden" }}>
          <h1 className="title">{title}</h1>
          <p className="sub-title">{subTitle}</p>
          <div className="swiper-wrapper">
            {SHOP_PRODUCTS.map(item => (
              <div key={item.id} className="swiper-slide">
                <ShopProduct {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <HorizantalSeparator />
    </>
  );
};

export default PageSection;
