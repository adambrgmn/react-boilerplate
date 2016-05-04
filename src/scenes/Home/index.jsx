import './styles.scss';
import React, { Component } from 'react';
import Firebase from 'firebase';
import { appTitle, firebaseUrl } from '../../config';

import Header from './Header';
import Message from './Message';
import Counter from './Counter';
import Buttons from './Buttons';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.ref = new Firebase(firebaseUrl);
    this.countRef = this.ref.child('count');
    this.ref.on('value', (snap) => {
      this.setState(() => {
        const count = snap.val().count;
        return { count };
      });
    });

    this.state = {
      count: '',
    };
  }

  handleClick = (method) => {
    this.setState((prevState) => {
      let count = prevState.count;

      if (method === 'add') count++;
      else count--;

      this.countRef.set(count);
      return { count };
    });
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
