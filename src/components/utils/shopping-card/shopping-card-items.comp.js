import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../../../redux/shopping-cart/cart.actions";

const ShoppingCardItem = ({ cartItem, removeItem }) => {
  const { productName, originalImg, price, quantity } = cartItem;

  return (
    <tr>
      <td className="product-preview">
        <img src={originalImg} alt="product" />
        <div className="product-quick-info">
          <span className="product-category">collette</span>
          <Link to="#" className="product-name">
            {productName}
          </Link>
        </div>
      </td>
      <td className="font-bold">{price}</td>
      <td className="font-bold">
        <div className="product-quantity">
          <button>-</button>
          <div>{quantity}</div>
          <button>+</button>
        </div>
      </td>
      <td className="font-bold">{price}</td>
      <td className="font-bold remove-item" onClick={() => removeItem(cartItem)}>
        <span>X</span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(ShoppingCardItem);
