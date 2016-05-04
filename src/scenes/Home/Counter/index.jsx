import React from 'react';

export default function Counter({ count }) {
  return <p>Counting: {count}</p>;
}

Counter.propTypes = {
  count: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
};
