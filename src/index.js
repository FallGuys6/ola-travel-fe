import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "./App.less";
import "./scss/style.scss";
import { ConfigProvider } from "antd";
import en_US from 'antd/lib/locale/en_US';
import App from "./App";
// import { store } from "./app/store";
// import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.Fragment>
    <ConfigProvider locale={en_US}>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </ConfigProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
