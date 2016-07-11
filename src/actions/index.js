import axios from 'axios';
import {
    CODE
} from './types'

const ROOT_URL = 'http://10.10.105.0:3000';
const POST_ID = '1';

export function previewCode(code) {
    return {
      type: CODE,
      payLoad: code
    };
}

export function saveCloudCode(code) {

    return function(dispatch) {

        let config = {
            headers: {'content-type': 'application/json'}
        };

        let model = {
            cloud_code: {
                results: code
            }
        };

        let JSONdata = JSON.stringify(model);

        // Submit to server
        axios.put(`${ROOT_URL}/cloud_codes/${POST_ID}.json`, JSONdata, config)
            .then(response => {
                // console.log(response);
            })
            .catch(() => {
                // console.log('error');
            });

    }

}