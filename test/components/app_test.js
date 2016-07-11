import { renderComponent } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  before(() => {
    component  = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});