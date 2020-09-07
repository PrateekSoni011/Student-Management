import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from "./reducers";
import { BrowserRouter } from 'react-router-dom';
import routes from './router';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <React.StrictMode>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </ React.StrictMode>
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
