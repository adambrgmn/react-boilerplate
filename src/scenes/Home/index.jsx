import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Map } from 'immutable';

import Header from './Header';
import Message from './Message';
import Button from '../../components/Button';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: Map({
        title: 'Hello world',
        message: 'Welcome to this small app. It doesn\'t do much, but what it does it does good!',
        count: 0,
      }),
    };
  }

  handleClick = () => {
    console.log('Hello');
    this.state.data = this.state.data.update('count', n => n + 1);
  }

  render() {
    return (
      <div>
        <Header title={this.state.data.get('title')} />
        <Message message={this.state.data.get('message')} />
        <Button buttonLabel={this.state.data.get('count')} clickAction={this.handleClick} />
      </div>
    );
  }
}
