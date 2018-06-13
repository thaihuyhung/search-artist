import React from 'react';
import { mount } from 'enzyme';
import Footer from './index';

it('it should renders without crashing', () => {
  const props = {
    classes: {}
  }
  mount(<Footer {...props} />);
});