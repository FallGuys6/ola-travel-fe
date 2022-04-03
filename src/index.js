import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import '@babel/polyfill';
import 'core-js/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';
import './scss/style.scss';
import './app.less';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ConfigProvider } from 'antd';
import vi_VN from 'antd/lib/locale/vi_VN';
import { history } from '@utils/index';
import initStore from './app/configureStore';
import App from './app';
import * as serviceWorker from './serviceWorker';

const store = initStore();

toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  limit:3
})

ReactDOM.render(
  <React.Fragment>
    <ConfigProvider locale={vi_VN}>
      <Provider store={store} context={ReactReduxContext}>
        <App history={history} context={ReactReduxContext} />
      </Provider>
    </ConfigProvider>
  </React.Fragment>,
  document.getElementById('root-app')
);

serviceWorker.unregister();
