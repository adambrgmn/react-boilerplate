import React from 'react';

export default function Header({ title }) {
  return (
    <h1>{title}</h1>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};
