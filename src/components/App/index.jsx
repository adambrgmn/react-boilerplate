import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../Header';
import Paragraph from '../Paragraph';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <Header title={this.props.title} />
        <Paragraph message={this.props.message} />
      </div>
    );
  }
}
