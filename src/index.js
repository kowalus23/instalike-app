import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Router} from "react-router-dom";
import {createStore, applyMiddleware , compose} from "redux";
import reducers from './reducers'
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import history from './history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <App/>
    </Router>
  </Provider>
  , document.getElementById('root'));

