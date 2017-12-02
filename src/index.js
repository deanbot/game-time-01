import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';
import initialState from './initialState';
import getRoutes from './routes';

import './styles/global.scss';

const store = configureStore(initialState);
const routes = getRoutes(store);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const el = document.getElementById('app');
el && render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, el);