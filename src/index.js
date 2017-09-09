import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';
import configureStore from './configureStore';
import initialState from './initialState';

import "./styles/global.scss";

const store = configureStore(initialState);

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store);

const el = document.getElementById('app');
el && render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, el);