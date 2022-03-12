import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import 'tachyons';
import thunkMiddleware from 'redux-thunk';
import { searchRobots, requestRobots } from './reducers';

import App from "./containers/App.js";
import reportWebVitals from './reportWebVitals';
import './index.css';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

