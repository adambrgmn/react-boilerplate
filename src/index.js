import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const stateMock = {
  title: 'Hello World!',
  message: 'This is an app',
};

ReactDOM.render(
  <App {...stateMock} />,
  document.getElementById('app')
);
