import {
    CODE,
    JS,
    HTML,
    CSS,
    USER,
    CORRECT,
    COMPLETED
} from '../actions/types';

let defaults = {
    
    html: 'loading',
    css: 'loading',
    javascript: 'loading',

    user: {
        name: "...",
        user_id: 0,
        cloud_code_id: 0
    },

    correct: false,
    completed: false

};

export default function(state = defaults, action) {

    switch(action.type) {
        case CODE:
            return { ...state, code: action.payload }
        case HTML:
            return { ...state, html: action.payload }
        case CSS:
            return { ...state, css: action.payload }
        case JS:
            return { ...state, javascript: action.payload }
        case USER:
            return { ...state, user: action.payload }
        case CORRECT:
            return { ...state, correct: action.payload }
    }

    return state;

}