import {
    CODE
} from '../actions/types';

let defaults = {
        html: '<div class="block"><h1>Hello, World!</h1></div>',
        css: '.block {\n\twidth: 300px;\n\theight:70px;\n\tbackground-color: pink;\n}\nh1 {\n\tpadding: 10px;\n}',
        javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

export default function(state = defaults, action) {

    switch(action.type) {
        case CODE:
            return { ...state, code: action.payload }
    }

    return state;

}