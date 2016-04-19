require('./main.css');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const component = <App message="Hello World" />;
const mountPoint = document.getElementById('app');

ReactDOM.render(component, mountPoint);
