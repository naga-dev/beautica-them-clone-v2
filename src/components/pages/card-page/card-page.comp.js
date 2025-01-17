import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartItem from "../../utils/shopping-card/shopping-card-items.comp";
import { connect } from "react-redux";

// Styles
import "./card-page.styles.scss";

const ShoppingCard = ({ cartItems, cartItemCount }) => {
  return (
    <div className="cart-page-wrapper container">
      <div className="cart-page-content-wrapper font">
        <div className="cart-page-content">
          <h3>
            your cart <span className="items-count-in-shopping-cart">({cartItemCount} items)</span>
          </h3>
        </div>

        {cartItemCount ? (
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
                {cartItems.map(cartItem => (
                  <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-cart">
            <h1>No items in your cart!!</h1>
            <Link to="/shop">Continue Shopping</Link>
          </div>
        )}
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

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
  cartItemCount: cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0),
});

export default connect(mapStateToProps)(ShoppingCard);
