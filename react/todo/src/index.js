import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './main/todoApp.js';
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
