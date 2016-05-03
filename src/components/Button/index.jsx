import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  handleClick = () => {
    this.props.clickAction();
  }

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.props.disabled}>{this.props.buttonLabel}</button>
    );
  }
}
