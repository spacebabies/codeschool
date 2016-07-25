import axios from 'axios';
import Api from '../api';

import {
    CODE,
    JS,
    HTML,
    CSS
} from './types'

export function updateCode(type, code) {
     return function(dispatch, getState) {

        // Send to action creator
        dispatch(previewCode(type, code));

        // Save in API
        Api.save(getState());

    }
}

export function previewCode(type, code) {
    return {
      type: type,
      payload: code
    };
}