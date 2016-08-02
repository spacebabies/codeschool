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
            css: encodeURIComponent(data.code.css),
            html: encodeURIComponent(data.code.html),
    	    javascript: encodeURIComponent(data.code.javascript)
        }

        let JSONdata = JSON.stringify(model);

        // Submit to server
        axios.put(`${ROOT_URL}/cloud_codes/${data.code.user.latest_cloud_code}.json`, JSONdata, config)
            .then(response => {
                // console.log(response);
            })
            .catch((error) => {
                console.log(error);
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
                    payload: decodeURIComponent(response.data.results.javascript)
                })

                dispatch({
                    type: HTML,
                    payload: decodeURIComponent(response.data.results.html)
                })

                dispatch({
                    type: CSS,
                    payload: decodeURIComponent(response.data.results.css)
                })

                dispatch({
                    type: USER,
                    payload: response.data.user
                })

            })
            .catch((error) => {
                console.log(error);

                // Temporary data for development
                let JS_code = "var%20i%20%3D%20%22Test%20JS%20editor%22%3B%0A%0Afunction%20test()%20%7B%0A%20%20console.log(i)%3B%0A%7D%0A%0Atest()%3B";
                let HTML_code = "%3Cdiv%20class%3D%22block%22%3E%3Ch1%3ESpace%20Babie%20%22%22%20''s%3C%2Fh1%3E%3C%2Fdiv%3E";
                let CSS_code = encodeURIComponent('html, body { margin:0; padding:0; background-color: #a8d8b6; color: #fff; font-family: "Helvetica"; height:100%}\n\ \n\.block {\n\ text-align:center;\n\ width:100%;\n\ align-items: center;\n\ display:flex;\n\ height:100%;}\n\ \n\h1 {\n\ padding: 0;\n\ width:100%;\n\ letter-spacing: 30px;\n\ text-transform: uppercase;}');

                dispatch({
                    type: JS,
                    payload: decodeURIComponent(JS_code)
                })

                dispatch({
                    type: HTML,
                    payload: decodeURIComponent(HTML_code)
                })

                dispatch({
                    type: CSS,
                    payload: decodeURIComponent(CSS_code)
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