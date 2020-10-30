// Components
import { Route, Switch } from "react-router-dom";
// import AppFooter from "./components/layout/app-footer/app-footer.comp";
import MainHeader from "./components/layout/main-header/main-header.comp";
import MainNavbar from "./components/layout/main-navbar/main-navbar.comp";
import ShoppingCard from "./components/pages/card-page/card-page.comp";
import HomePage from "./components/pages/home-page/home-page.comp";
import UserAccount from "./components/pages/login-and-register/login-and-register.comp";
import LookBook from "./components/pages/lookbook-page/lookbook-page.comp";
import PageNotFound from "./components/pages/page-not-found/page-not-found.comp";
import ShopPage from "./components/pages/shop-page/shop-page.comp";
import TestPage from "./components/pages/text";
import UpperHeader from "./components/utils/upper-header/upper-header.comp";

function App() {
  return (
    <div className="App">
      <UpperHeader />
      <MainHeader />
      <MainNavbar />

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
      {/* <AppFooter /> */}
    </div>
  );
}

export default App;
