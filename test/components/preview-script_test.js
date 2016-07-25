import { renderComponent } from '../test_helper';
import PreviewScript from '../../src/components/preview-script';

describe('PreviewScript' , () => {
    let component;

    let props = { 
        code: {
            html: '<div class="block">Space Babies</div>',
            css: '.block { width:40px; height: 40px; }',
            javascript: 'var counted; function count(number) { counted = number }; count(5);'
        }
    };
    
    before(() => {
        // component  = renderComponent(PreviewScript, null, props);
    });

    it('runs the count function and returns nr 5');

}); 