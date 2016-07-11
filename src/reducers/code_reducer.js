import {
    CODE
} from '../actions/types';

let defaults = {
        html: '<div class="block"><h1>Hello, World!</h1></div>',
        css: 'html, body { margin:0; padding:0; background-color: lightcoral; color: #fff; font-family: "Helvetica"; height:100%}\n\ \n\.block {\n\ text-align:center;\n\ width:100%;\n\ align-items: center;\n\ display:flex;\n\ height:100%;}\n\ \n\h1 {\n\ padding: 0;\n\ width:100%;\n\}',
        javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

export default function(state = defaults, action) {

    switch(action.type) {
        case CODE:
            return { ...state, code: action.payload }
    }

    return state;

}