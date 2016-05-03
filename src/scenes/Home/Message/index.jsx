import React from 'react';

export default function Message({ message }) {
  return (
    <p>{message}</p>
  );
}

Message.propTypes = {
  message: React.PropTypes.string.isRequired,
};
