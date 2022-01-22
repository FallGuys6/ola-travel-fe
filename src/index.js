import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import "core-js/stable";
import "regenerator-runtime/runtime";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './App.less';
import './scss/style.scss';
import { ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale/en_US';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ConfigProvider locale={en_US}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
