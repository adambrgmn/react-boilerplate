import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './index.jsx';

storiesOf('core.Button', module)
  .add('Normal', () => (
    <Button clickAction={action('Clicking')} buttonLabel="A button" />
  ))
  .add('Disabled', () => (
    <Button clickAction={action('Clicking')} buttonLabel="A disabled button" disabled />
  ));
