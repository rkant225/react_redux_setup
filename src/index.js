import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import AppPlainRedux from "./AppPlainRedux";
import AppReduxToolkit from "./AppReduxToolkit";
import { Provider } from "react-redux";

// import store from "./Redux/store"; // store from plain react-redux
import store from "./ReduxToolkit/store"; // store from redux toolkit




ReactDOM.render(
  <Provider store={store}>
    {/* <AppPlainRedux /> */}
    <AppReduxToolkit/>
  </Provider>,
  document.getElementById("root")
);
