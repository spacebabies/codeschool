import {
    CODE,
    JS,
    HTML,
    CSS,
    USER
} from '../actions/types';

let defaults = {

    cloud_code_id: 0,

    html: false,
    css: false,
    javascript: false,

    user: {
        name: "Name false later",
        user_id: 0
    }

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
    }

    return state;

}