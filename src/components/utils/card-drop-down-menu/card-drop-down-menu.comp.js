import React from "react";
import { Link } from "react-router-dom";

import PayPalCheckout from "../../../assets/images/checkout-logo-small.png";
import img from "../../../assets/images/products/product-12.webp";

import { motion } from "framer-motion";

// Styles
import "./card-drop-down-menu.styles.scss";

const CartDropDownMenu = ({ toggleCardHidden }) => {
  return (
    <>
      {toggleCardHidden && (
        <motion.div
          className="product-in-your-cart"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
        >
          <div className="cart-product-details">
            <div className="product-img">
              <img src={img} id="product-example-img" alt="cart-product" />
            </div>

            <div className="product-details">
              <div className="product-name">coco lee</div>
              <Link to="#" className="product-category">
                productName
              </Link>
              <div className="product-qty">
                <span>1 X</span>
                <span className="product-price"> 100</span>
              </div>
            </div>
          </div>

          <Link to="/cart" id="view-your-cart">
            view cart
          </Link>

          <Link to="#" id="checkout-now">
            check out now
          </Link>

          <span className="or-use">-- or use --</span>
          <Link to="#" className="checkout-with-paypal">
            <img src={PayPalCheckout} alt="paypal-chckout" />
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default CartDropDownMenu;
