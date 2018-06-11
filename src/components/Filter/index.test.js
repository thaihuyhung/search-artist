import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';
import Filter from './index';
import { jssPreset } from '@material-ui/core';

it('it should renders without crashing', () => {
  const props = {
    options: fromJS([{}]),
  }
  shallow(<Filter {...props} />);
});

it('it should update select value when onChange is triggered', () => {
  const props = {
    name: 'test-filter',
    options: fromJS([{}])
  }
  const wrapper = mount(<Filter {...props} />);
  const select = wrapper.find('[name="test-filter-select"]').filterWhere(n => n.name().toString() === 'Select');
  select.prop('onChange')({ target: { value: ['Test Value']}});
  wrapper.update();
  expect(wrapper.find('[name="test-filter-select"]').filterWhere(n => n.name().toString() === 'Select').prop('value')).toEqual(['Test Value']);
});

it('it should call onClose prop function when menu isExit', () => {
  const props = {
    name: 'test-filter',
    options: fromJS([{}]),
    onClose: jest.fn(),
  }
  const wrapper = mount(<Filter {...props} />);
  const menu = wrapper.find('[name="test-filter-menu"]').filterWhere(n => n.name().toString() === 'Menu');
  menu.prop('onExit')();
  expect(props.onClose.mock.calls.length).toBe(1);
});

it('it should update select value and has renderValue from props, that method should be call', () => {
  const props = {
    name: 'test-filter',
    options: fromJS([{}]),
    renderValue: jest.fn()
  }
  const wrapper = mount(<Filter {...props} />);
  const select = wrapper.find('[name="test-filter-select"]').filterWhere(n => n.name().toString() === 'Select');
  select.prop('onChange')({ target: { value: ['Test Value']}});
  wrapper.update();
  // 2 times because we updated the state
  expect(props.renderValue.mock.calls.length).toBe(2);
});