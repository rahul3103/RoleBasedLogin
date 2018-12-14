import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import userLogin from './redux/reducer/index';
import Nav from './Nav';

const store = createStore(userLogin, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Nav />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
