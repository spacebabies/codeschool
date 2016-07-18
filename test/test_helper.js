import TestUtils from 'react-addons-test-utils';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import { mount } from 'enzyme';

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  mount(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return componentInstance;
}

export {renderComponent};
