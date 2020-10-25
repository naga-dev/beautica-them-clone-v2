import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Hot Module Replacement
const rootEl = document.getElementById("root");
const render = () =>
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootEl
  );

if (module.hot) module.hot.accept("./App.js", () => setTimeout(render));
render();

reportWebVitals();
