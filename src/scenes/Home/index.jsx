import './styles.scss';
import React, { Component } from 'react';

import { appTitle } from '../../config';
import FirebaseConnection from '../../services/api';

import Header from './Header';
import Message from './Message';
import Counter from './Counter';
import Buttons from './Buttons';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.base = new FirebaseConnection();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.base.syncState('home', this);
  }

  handleClick = (method) => {
    let count = this.state.count;

    if (method === 'add') count++;
    else count --;

    this.base.updateState('home', this, { count });
  }

  render() {
    return (
      <div>
        <Header title={appTitle} />
        <Message message="A small counter for the world to behold and take to their hearts." />
        <Counter count={this.state.count} />
        <Buttons clickAction={this.handleClick} />
      </div>
    );
  }
}
