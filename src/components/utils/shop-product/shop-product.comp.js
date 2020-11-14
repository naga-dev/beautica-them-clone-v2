import React from "react";

import { MdStar, MdStarHalf } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

// Styles
import "./shop-product.styles.scss";

const ShopProduct = ({ view, item }) => {
  const { productName, originalImg, price, description } = item;

  return (
    <div className="single-product-wrapper">
      <div className={view === "row" ? "one-column-content" : "multi-columns-content"}>
        <div className="img-wrapper">
          <img src={originalImg} alt="" id="singleProductImg" />
          <div className="new-offer">new</div>

          <div className="add-to-wish-list">
            <FaHeart />
          </div>
          <div className="quick-view">Quick View</div>
        </div>

        <div className="product-details">
          <Link to={`/products/product`} className="brandName">
            {productName}
          </Link>
          <span className="product-price">
            <b>{price}</b>
          </span>

          <p className="product-description">{description}</p>
          <div className="product-rating">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
          </div>
          <div className="add-to-cart">
            <button>add to cart</button>
          </div>
        </div>
      </div>
      {/* {showModal && <ProductModal closeModal={this.closeModal} />} */}
    </div>
  );
};
export default ShopProduct;
