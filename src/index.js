import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Style
import "./index.scss";

// Hot module replacement
const rootEl = document.getElementById("root");
const render = () =>
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
    rootEl
  );

if (module.hot) module.hot.accept("./App.js", () => setTimeout(render));
render();

reportWebVitals();
