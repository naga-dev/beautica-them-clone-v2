import React from "react";
import { Link } from "react-router-dom";

const ShoppingCardItem = ({ cartItem: { productName, originalImg, price, quantity } }) => {
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
      <td className="font-bold remove-item">
        <span>X</span>
      </td>
    </tr>
  );
};

export default ShoppingCardItem;
