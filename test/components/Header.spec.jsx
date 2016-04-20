import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
} from 'react-addons-test-utils';
import { Map } from 'immutable';
import { expect } from 'chai';

import Header from '../../src/components/Header';

describe('Component: Header', () => {
  it('should render a header', () => {
    const state = Map({ title: 'React Boilerplate' });
    const component = renderIntoDocument(<Header title={state.get('title')} />);
    const items = scryRenderedDOMComponentsWithTag(component, 'h1');

    expect(items[0].textContent).to.contain('React Boilerplate');
  });
});
