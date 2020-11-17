import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { connect } from "react-redux";

import AppLogo from "../../../assets/images/logo.webp";
import CartLogo from "../../../assets/svg/shopping-bag.svg";

// Styles
import "./scroll-navbar.styles.scss";
import { selectCartItemsCout } from "../../../redux/shopping-cart/cart.selectors";

const ScrollNavar = ({ cartItemsCount }) => {
  const [toggleSearchBar, setToggleSearchBar] = useState(true);
  const links = [
    "#trend-now",
    "makeup",
    "nail",
    "beauty accessories",
    "body art",
    "makeup tools",
    "fragrance",
  ];

  useEffect(() => {
    window.onscroll = scrollFunction;
  });

  // Toggl fixed navbar when scroll
  const scrollFunction = () => {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      document.getElementById("fixed-scroll-navigation").style.top = "0";
    } else {
      document.getElementById("fixed-scroll-navigation").style.top = "-100%";
    }
  };

  return (
    <div id="fixed-scroll-navigation">
      <div className="logo">
        <Link to="/">
          <img src={AppLogo} alt="app-logo" />
        </Link>
      </div>

      {toggleSearchBar ? (
        <div className="app-pages-navigation font">
          <ul>
            {links.map((link, idx) => (
              <li key={idx}>
                <Link to="/shop">{link}</Link>
              </li>
            ))}
            <li>
              <Link to="/lookbook">Lookbook</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="search-products">
          <input
            type="text"
            id="searchForProduct"
            placeholder="Search for products"
            autoComplete="off"
          />
        </div>
      )}

      <div className="shopping-cart-products-wrapper">
        <FaSearch onClick={() => setToggleSearchBar(!toggleSearchBar)} />
        <Link to="/cart">
          <img src={CartLogo} alt="shopping-cart-icon" />

          <div className="product-quantity">
            <span>{cartItemsCount}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItemsCount: selectCartItemsCout(state),
});

export default connect(mapStateToProps)(ScrollNavar);
