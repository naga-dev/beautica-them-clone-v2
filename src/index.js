import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Style
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

// Hot module replacement
const rootEl = document.getElementById("root");
const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>,
    rootEl
  );

if (module.hot) module.hot.accept("./App.js", () => setTimeout(render));
render();

reportWebVitals();
