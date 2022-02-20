import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import '@babel/polyfill';
import 'core-js/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './scss/style.scss';
import './app.less';
import 'react-toastify/dist/ReactToastify.min.css';
import { ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale/en_US';
import { history } from '@utils/index';
import initStore from './app/configureStore';
import App from './app';
import * as serviceWorker from './serviceWorker';

const store = initStore();

ReactDOM.render(
  <React.Fragment>
    <ConfigProvider locale={en_US}>
      <Provider store={store} context={ReactReduxContext}>
        <App history={history} context={ReactReduxContext} />
      </Provider>
    </ConfigProvider>
  </React.Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
