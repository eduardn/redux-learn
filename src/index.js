import 'babel-polyfill';
import './styles/milligram.min.scss';
import './styles/main.scss';
import 'font-awesome-webpack';

import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './App';
import * as RepoActions from './actions/RepoActions';
import rootReducer from './reducers';

let store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);

store.dispatch(RepoActions.fetchRepos());
