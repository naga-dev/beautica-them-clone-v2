import React from "react";

// Assets
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

// Components
import MobileMainHeader from "../../utils/mobile-main-header/mobile-main-header.comp";
import CartDropDownMenu from "../../utils/card-drop-down-menu/card-drop-down-menu.comp";
import AppLogo from "../../../assets/images/logo.webp";
import ShoppingBag from "../../../assets/svg/shopping-bag.svg";
import { selectCartItemsCout } from "../../../redux/shopping-cart/cart.selectors";

// Styles
import "./main-header.styles.scss";
import { connect } from "react-redux";
import { toggleCardMenuHidden } from "../../../redux/card-menu/card-menu.actions";

const MainHeader = ({ toggleCardMenuHidden, hidden, cartItemsCount }) => {
  return (
    <>
      <div className="main-header">
        <div className="container">
          <div className="main-header-content">
            <div className="search-products">
              <input
                type="text"
                id="searchForProduct"
                placeholder="Search for products"
                autoComplete="off"
              />
            </div>

            <div className="logo">
              <Link to="/">
                <img src={AppLogo} alt="logo" />
              </Link>
            </div>

            <div className="user-actions">
              <div className="hi-customer">
                <div>Hi Customer</div>
                <Link to="/user/account">Login</Link>
                <span className="or-sperator">or</span>
                <Link to="/user/account" className="font-bold">
                  Register
                </Link>
              </div>
              <div className="vertical-line"></div>
              <div className="shopping-cart font" onClick={toggleCardMenuHidden}>
                <Link to="#" className="wishlist">
                  <FaHeart />
                </Link>

                {/* Drop down cart menu   */}
                <div className="in-your-cart">
                  <img src={ShoppingBag} id="header-shopping-cart" alt="" />
                  <span className="cart-products">{cartItemsCount}</span>

                  <CartDropDownMenu toggleCardHidden={hidden} />
                </div>
                {/* Drop down cart menu */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileMainHeader />
    </>
  );
};

const mapStateToProps = state => ({
  hidden: state.toggleCardHidden.hidden,
  cartItemsCount: selectCartItemsCout(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCardMenuHidden: () => dispatch(toggleCardMenuHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
