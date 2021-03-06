import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {HashRouter} from "react-router-dom";
import {createStore, applyMiddleware , compose} from "redux";
import reducers from './reducers'
import {Provider} from "react-redux";
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename={process.env.PUBLIC_URL} >
      <App/>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));