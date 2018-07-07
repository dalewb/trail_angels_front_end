import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import postReducer from './reduxComponents/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
  postReducer,
  applyMiddleware(thunk)
)

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
