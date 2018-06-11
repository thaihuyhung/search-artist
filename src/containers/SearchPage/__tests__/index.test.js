import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';
import { SearchPage } from '../index';

it('it should renders without crashing', () => {
  const props = {
    classes: {}
  }
  shallow(<SearchPage {...props} />);
});