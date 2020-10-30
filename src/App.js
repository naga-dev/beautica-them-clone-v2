// Components
import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/layout/main-header/main-header.comp";
import MainNavbar from "./components/layout/main-navbar/main-navbar.comp";
import HomePage from "./components/pages/home-page/home-page.comp";
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
        <Route exact path="/test" component={TestPage} />
      </Switch>
    </div>
  );
}

export default App;
