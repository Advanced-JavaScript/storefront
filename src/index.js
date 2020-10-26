/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>

  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
