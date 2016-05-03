import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';

import Home from './scenes/Home';

const stateMock = Map({
  title: 'Hello World!',
  message: 'This is an app',
});

ReactDOM.render(
  <Home title={stateMock.get('title')} message={stateMock.get('message')} />,
  document.getElementById('app')
);
