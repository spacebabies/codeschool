import { renderComponent } from '../test_helper';
import Preview from '../../src/components/preview';
import React from 'react';
import $ from 'cheerio';

describe('Preview' , () => {
    let component,
        code, // Full code in Iframe CSS + HTML + JS
        html; // Only HTML section in Iframe

    let props = { 
        code: {
            html: '<div class="block">Space Babies</div>',
            css: '.block { width:40px; height: 40px; }',
            javascript: 'function count(number) { return number }; count(5);'
        }
    };

    before(() => {
        component  = renderComponent(Preview, null, props);
        html = component.find('codeschool-html').html();
    });

    it('renders <codeschool-code>', () => {
        expect(component.find('codeschool-code')).to.have.length(1);
    });

    describe('<codeschool-css>' , () => {

        it('renders <codeschool-css>', () => {
            expect(component.find('codeschool-css')).to.have.length(1);
        });

        it('inserts CSS from props', () => {
            expect(component.find('codeschool-css').text()).to.equal('.block { width:40px; height: 40px; }');
        });

    });

    describe('<codeschool-html>' , () => {

        it('renders <codeschool-html>', () => {
            expect(component.find('codeschool-html')).to.have.length(1);
        });

        it('inserts div with class .block from props', () => {
            expect($('.block', html)).to.have.length(1);
        }); 

        it('has a block of 40px width and 40px height'); 

    });

    describe('<codeschool-script>' , () => {

        it('renders <codeschool-script>', () => {
            expect(component.find('codeschool-script')).to.have.length(1);
        });

        it('inserts JS from props', () => {
            expect(component.find('codeschool-script').text()).to.equal('function count(number) { return number }; count(5);');
        });

    });

});