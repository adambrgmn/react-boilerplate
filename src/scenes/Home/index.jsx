import './styles.scss';
import React, { Component } from 'react';
import Firebase from 'firebase';
import { appTitle, firebaseUrl } from '../../config';

import Header from './Header';
import Message from './Message';
import Button from '../../components/Button';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.ref = new Firebase(firebaseUrl);
    this.countRef = this.ref.child('count');
    this.ref.once('value', (snap) => {
      this.setState(() => {
        return { count: snap.val().count };
      });
    });

    this.state = {
      title: appTitle,
      message: 'A small message',
      count: 0,
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
        <Header title={this.state.title} />
        <Message message={this.state.message} />
        <Message message={`Counting: ${this.state.count}`} />
        <Button buttonLabel="-" clickAction={() => this.handleClick('remove')} />
        <Button buttonLabel="+" clickAction={() => this.handleClick('add')} />
      </div>
    );
  }
}
