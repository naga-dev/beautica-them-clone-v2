import React from "react";
import { Link } from "react-router-dom";

import PayPalCheckout from "../../../assets/images/checkout-logo-small.png";
import { connect } from "react-redux";

import { motion } from "framer-motion";

// Styles
import "./card-drop-down-menu.styles.scss";

const CartDropDownMenu = ({ toggleCardHidden, cartItems }) => {
  console.log(cartItems);
  return (
    <>
      {toggleCardHidden && (
        <motion.div
          className="product-in-your-cart"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
        >
          {cartItems
            .filter((cartItem, idx) => idx < 3)
            .map(({ id, productName, price, originalImg, quantity }, idx) => (
              <div className="cart-product-details" key={idx}>
                <div className="product-img">
                  <img src={originalImg} id="product-example-img" alt="cart-product" />
                </div>

                <div className="product-details">
                  <div className="product-name">coco lee</div>
                  <Link to="#" className="product-category">
                    {productName}
                  </Link>
                  <div className="product-qty">
                    <span>{quantity} X</span>
                    <span className="product-price"> {price}</span>
                  </div>
                </div>
              </div>
            ))}

          {cartItems.length < 1 ? (
            <span className="no-item-in-cart">No items in your Cart</span>
          ) : (
            <>
              <Link to="/cart" id="view-your-cart">
                view cart
              </Link>
              <Link to="#" id="checkout-now">
                check out now
              </Link>
              <span className="or-use">-- or use --</span>
              <Link to="#" className="checkout-with-paypal">
                <img src={PayPalCheckout} alt="paypal-chckout" />
              </Link>{" "}
            </>
          )}
        </motion.div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cartItems.cartItems,
});

export default connect(mapStateToProps)(CartDropDownMenu);
