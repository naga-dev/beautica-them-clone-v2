import React, { useEffect, useState } from "react";
import ItemImg from "../../../assets/images/products/product-8.webp";
import { Link } from "react-router-dom";

// Styles
import "./popup-product.styles.scss";

const PopupProduct = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const second = 1000;
    setInterval(() => {
      setShow(true);
    }, second * 60);
  });

  const close = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="popup-product-wrapper">
          <div className="product-img-wrapper">
            <img src={ItemImg} alt="" />
          </div>
          <div className="popup-content">
            <Link to="#">
              <div className="product-name">[Sample] Coco Lee, wedges with sweet chilli sauce0</div>
            </Link>
            <div className="product-price">$200.00</div>

            <span className="close" onClick={() => close()}>
              x
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupProduct;
