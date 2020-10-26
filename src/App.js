import AppHeader from "./components/layout/app-header/app-header.component";
import HomePage from "./components/pages/home-page/home-page.component";
import UpperNav from "./components/utils/upper-header/upper-header.component";

const { Switch, Route } = require("react-router-dom");

function App() {
  return (
    <div className="App">
      <UpperNav />
      <AppHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
