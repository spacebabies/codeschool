import axios from 'axios';
import {
    CODE
} from './types'

const ROOT_URL = 'https://www.dedigitaletopschool.nl';

export function previewCode(code) {
    return {
      type: CODE,
      payLoad: code
    };
}

export function saveCloudCode(code) {

    return function(dispatch) {

        var config = {
            headers: {'content-type': 'application/json'}
        };

        // Submit to server
        axios.post(`${ROOT_URL}/cloud_codes.json`, code, config)
            .then(response => {
                // console.log(response);
            })
            .catch(() => {
                // console.log('error');
            });

    }

}