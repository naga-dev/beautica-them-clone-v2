import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// Components
import AppFooter from "./components/layout/app-footer/app-footer.comp";
import MainHeader from "./components/layout/main-header/main-header.comp";
import MainNavbar from "./components/layout/main-navbar/main-navbar.comp";
import ShoppingCard from "./components/pages/card-page/card-page.comp";
import HomePage from "./components/pages/home-page/home-page.comp";
import UserAccount from "./components/pages/login-and-register/login-and-register.comp";
import LookBook from "./components/pages/lookbook-page/lookbook-page.comp";
import PageNotFound from "./components/pages/page-not-found/page-not-found.comp";
import ShopPage from "./components/pages/shop-page/shop-page.comp";
import TestPage from "./components/pages/text";
import GoToTopBtn from "./components/utils/go-to-top-btn/go-to-top-btn.comp";
import PopupProduct from "./components/utils/popup-product/popup-products.comp";
import ProductModal from "./components/utils/product-modal/product-modal.comp";
import ScrollNavar from "./components/utils/scroll-navbar/scroll-navbar.comp";
import UpperHeader from "./components/utils/upper-header/upper-header.comp";
import { closeModal } from "./redux/modal/modal.actions";

function App({ toggleModal, closeModal }) {
  return (
    <div className="App">
      <UpperHeader />
      <MainHeader />
      <MainNavbar />
      <ScrollNavar />

      {/*  Routting */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/lookbook" component={LookBook} />
        <Route path="/user/account" component={UserAccount} />
        <Route path="/cart" component={ShoppingCard} />
        <Route path="/test" component={TestPage} />
        <Route component={PageNotFound} />
      </Switch>

      <PopupProduct />
      <GoToTopBtn />
      <AppFooter />
      {toggleModal && <ProductModal closeModal={closeModal} />}
    </div>
  );
}

const mapStateToProps = state => ({
  toggleModal: state.modal.hiddenModal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
