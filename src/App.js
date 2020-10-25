import HomePage from "./components/pages/HomePage";

const { Switch, Route } = require("react-router-dom");

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
