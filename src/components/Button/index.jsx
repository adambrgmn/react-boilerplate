import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import './styles.scss';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.classNames = classNames({
      button: true,
      disabled: this.props.disabled,
    });
  }

  handleClick = () => {
    this.props.clickAction();
  }

  render() {
    return (
      <button
        className={this.classNames}
        disabled={this.props.disabled}
        onClick={this.handleClick}
      >
        {this.props.buttonLabel}
      </button>
    );
  }
}

Button.propTypes = {
  disabled: React.PropTypes.bool,
  buttonLabel: React.PropTypes.string.isRequired,
  clickAction: React.PropTypes.func.isRequired,
};
