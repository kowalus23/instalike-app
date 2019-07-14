import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Router} from "react-router-dom";
import {createStore, compose} from "redux";
import reducers from './redcuers'
import {Provider} from "react-redux";
import history from './history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
  , document.getElementById('root'));

