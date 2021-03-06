import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
