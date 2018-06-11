import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';
import { App } from '../index';
import configureStore from 'redux-mock-store';

const middlewares = []
const mockStore = configureStore(middlewares)

it('it should renders without crashing', () => {
  const props = {
    classes: {},
    history: {},
    store: mockStore({})
  }
  shallow(<App {...props} />);
});