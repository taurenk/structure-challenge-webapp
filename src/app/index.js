
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { login } from './actions/AuthActions';
import routes from './routes';

import configureStore from './store/configureStore';
const store = configureStore();

import { readCookie } from './utils';
let authToken = readCookie('structurewebapp');
if (authToken) {
  store.dispatch(login(authToken));
}

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
