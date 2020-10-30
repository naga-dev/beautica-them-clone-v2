import React from "react";
import { Link } from "react-router-dom";
import ShoppingCardItem from "../../utils/shopping-card/shopping-card-items.comp";

// Styles
import "./card-page.styles.scss";

const ShoppingCard = () => {
  return (
    <div className="cart-page-wrapper container">
      <div className="cart-page-content-wrapper font">
        <div className="cart-page-content">
          <h3>
            your cart <span className="items-count-in-shopping-cart">(1 items)</span>
          </h3>
        </div>

        <div className="shopping-cart-table">
          <table>
            <thead>
              <tr>
                <th>item</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
                <th>remove</th>
              </tr>
            </thead>
            <tbody>
              <ShoppingCardItem />
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ color: "#e7040f", margin: "20px 0" }}>
        "*This payment for development purpose only*"
        <br />
        "*Please, use this following test credit cart number*"
        <br />
        "4242 4242 4242 4242" - EXP: 11 / 20 - CVV: 123
      </div>

      <div className="proceed-to-checkout">
        <ul className="proceed-to-checkout-list">
          <li>
            <span>Subtotal:</span>
            <span>$100</span>
          </li>
          <li>
            <span>Shipping:</span>
            <Link to="#">Add Info</Link>
          </li>
          <li>
            <span>Tax:</span>
            <span>$39.60</span>
          </li>
          <li>
            <span>Coupon Code:</span>
            <Link to="#">Add Coupon</Link>
          </li>
          <li>
            <span>Gift Certificate:</span>
            <Link to="#">Gift Certificate</Link>
          </li>
          <li>
            <span>Grand total:</span>
            <span>$100</span>
          </li>
        </ul>

        {/* <StripeIndex price={`$${cartItemsPrices * cartItemsQty}`} /> */}
      </div>
    </div>
  );
};

export default ShoppingCard;
