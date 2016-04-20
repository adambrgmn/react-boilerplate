import React from 'react';

// export default function Header(props) {
//   return (<h1>{props.title}</h1>);
// }

export default class Header extends React.Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}
