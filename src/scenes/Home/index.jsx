import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Header from './Header';
import Message from './Message';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <Header title={this.props.title} />
        <Message message={this.props.message} />
      </div>
    );
  }
}

Home.propTypes = {
  title: React.propTypes.string.isRequired,
  message: React.propTypes.string.isRequired,
};
