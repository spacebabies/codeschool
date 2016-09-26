import axios from 'axios';
import Api from '../api';

import {
    CODE,
    JS,
    HTML,
    CSS,
    USER,
    CORRECT
} from './types';

export function getApiData(type, code) {
     return function(dispatch) {

        // Save in API
        Api.getApiData(dispatch);

    }
}

export function updateCode(type, code) {
     return function(dispatch, getState) {

        // Send to action creator
        dispatch(previewCode(type, code));

        // Save in API
        Api.save(getState(), dispatch);

    }
}

export function previewCode(type, code) {
    return {
      type: type,
      payload: code
    };
}
