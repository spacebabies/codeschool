import App from '../src/components/app';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

var component;
var spy = sinon.spy();

describe('App' , () => {
  let component;

  before(() => {
    component = TestUtils.renderIntoDocument(<App onRender={ spy } />);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});