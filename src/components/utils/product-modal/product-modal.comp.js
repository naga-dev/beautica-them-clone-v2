import React from "react";

// Components
import { MdStar, MdStarHalf } from "react-icons/md";
import { motion } from "framer-motion";
import Img from "../../../assets/images/products/product-10.jpg";

// Styles
import "./product-modal.styles.scss";

const ProductModal = ({ closeModal }) => {
  return (
    <motion.div id="product-modal-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="product-modal-content">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-img-wrapper">
              <img src={Img} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-details">
              <h3>productName</h3>

              <div className="product-price">
                <span className="new-price">
                  <b>100</b>
                </span>
              </div>

              <div className="product-rating">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStarHalf />
              </div>

              <p className="product-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni illo earum
                nisi mollitia sequi rerum fuga distinctio in, similique necessitatibus quaerat
                voluptatum quia, esse accusantium modi possimus adipisci maxime?
              </p>

              <div id="addToCart">
                <button>add to cart</button>
              </div>
            </div>
          </div>
        </div>

        <span id="closeModal" onClick={() => closeModal()}>
          X
        </span>
      </div>
    </motion.div>
  );
};

export default ProductModal;
