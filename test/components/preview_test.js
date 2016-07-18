import { renderComponent } from '../test_helper';
import Preview from '../../src/components/preview';
import React from 'react';
import $ from 'cheerio';

describe('Preview' , () => {
  let component,
      code, // Full code in Iframe CSS + HTML + JS
      html; // Only HTML section in Iframe

  beforeEach(() => {
  	component  = renderComponent(Preview);
    code = component.html();
    html = component.find('.CodeSchool-HTML-container').html();
  });

  it('renders CodeSchool-HTML-container', () => {
      expect(component.find('#CodeSchool-HTML-container')).to.have.length(1);
  });

  it('renders html code from props', () => {
      expect($('.block', html)).to.have.length(1);
  });
});