import React from "react";

import { MdStar, MdStarHalf } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Styles
import "./shop-product.styles.scss";
import { addItem } from "../../../redux/shopping-cart/cart.actions";

const ShopProduct = ({ view, item, addItem }) => {
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
            <button onClick={() => addItem(item)}>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopProduct);
