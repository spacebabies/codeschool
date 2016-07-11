import axios from 'axios';

const ROOT_URL = 'https://www.dedigitaletopschool.nl';

export function sendCode(code) {

    return function(dispatch) {

        var config = {
            headers: {'content-type': 'application/json'}
        };

        // Submit to server
        axios.post(`${ROOT_URL}/cloud_codes.json`, code, config)
            .then(response => {
                console.log(response);
            })
            .catch(() => {
                console.log('error');
            });

    }

}
