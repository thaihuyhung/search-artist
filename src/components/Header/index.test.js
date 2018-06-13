import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from './index';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import configureStore from '../../containers/App/configureStore';
import rootSaga from '../../containers/App/saga';

const middlewares = []
const mockStore = configureStore(middlewares)

const initialState = {};

const history = createHistory();
const store = configureStore(initialState, history);
store.runSaga(rootSaga);

it('it should renders without crashing', () => {
  const props = {
    classes: {}
  }
  mount(<Provider store={store}>
    <Header {...props} />
  </Provider>);
});