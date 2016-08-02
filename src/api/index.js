import axios from 'axios';

import {
    CODE,
    JS,
    HTML,
    CSS,
    USER
} from '../actions/types'

let throttleTimeOut; 
const throttleTime = 2000;
let store, user;

const ROOT_URL = 'http://10.10.105.0:3000';
const POST_ID = '1';

const config = {
    headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer 6c2a1470dd4d2e8ddc413bab9d708eba'
    }
};

const model = {
    cloud_code: {
        results: false
    }
};

class Api {

    constructor() {
        // Save code on refresh or close
        window.addEventListener("beforeunload", this.send.bind(this));
    }

    storeData(data) {
        store = data;
    }

    getData() {
        return store;
    }

    save(data) {

        // Temporary store data in Api Class
        this.storeData(data);

        // Wait till user has finised typing
        this.throttle();

    }

    send() {

        let data = this.getData();

        model.cloud_code.results = {
            css: data.code.css,
            html: data.code.html,
    	    javascript: data.code.javascript
        }

        let JSONdata = JSON.stringify(model);

        // Submit to server
        axios.put(`${ROOT_URL}/cloud_codes/${data.code.user.latest_cloud_code}.json`, JSONdata, config)
            .then(response => {
                // console.log(response);
            })
            .catch(() => {
                console.log('error');
            });
    }

    getApiData(dispatch) {

        // Submit to server
        axios.get(`${ROOT_URL}/users/${POST_ID}.json`, config)
            .then(response => {

                this.storeData(response.data);

                // dispatch({
                //     type: CODE,
                //     payload: response.data.results
                // })

                dispatch({
                    type: JS,
                    payload: response.data.results.javascript
                })

                dispatch({
                    type: HTML,
                    payload: response.data.results.html
                })

                dispatch({
                    type: CSS,
                    payload: response.data.results.css
                })

                dispatch({
                    type: USER,
                    payload: response.data.user
                })

            })
            .catch((error) => {
                console.log(error);

                // Temporary data for development
                dispatch({
                    type: JS,
                    payload: "var i = 0;"
                })

                dispatch({
                    type: HTML,
                    payload: '<div class="block"><h1>Space Babies</h1></div>'
                })

                dispatch({
                    type: CSS,
                    payload: 'html, body { margin:0; padding:0; background-color: #a8d8b6; color: #fff; font-family: "Helvetica"; height:100%}\n\ \n\.block {\n\ text-align:center;\n\ width:100%;\n\ align-items: center;\n\ display:flex;\n\ height:100%;}\n\ \n\h1 {\n\ padding: 0;\n\ width:100%;\n\ letter-spacing: 30px;\n\ text-transform: uppercase;}'
                })

                dispatch({
                    type: USER,
                    payload: {name: "Vincent"}
                })

            });

    }

    requestSend() {
        requestAnimationFrame(this.send.bind(this));    
    }

    throttle() {
        
        clearTimeout(throttleTimeOut);
        throttleTimeOut = setTimeout(this.requestSend.bind(this), throttleTime);

    }


}

export default new Api();