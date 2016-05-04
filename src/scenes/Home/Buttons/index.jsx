import React from 'react';
import Button from '../../../components/Button';

export default function Buttons({ clickAction }) {
  return (
    <div>
      <Button buttonLabel="-" clickAction={() => clickAction('remove')} />
      <Button buttonLabel="+" clickAction={() => clickAction('add')} />
    </div>
  );
}

Buttons.propTypes = {
  clickAction: React.PropTypes.func.isRequired,
};
