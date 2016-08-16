import axios from 'axios';
import cookie_helper from 'js-cookie';


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


const model = {
    cloud_code: {
        results: false
    }
};

class Api {
    getCookie() {
      return cookie_helper.get('code_school');
      }

    config: {}

    constructor() {
        const config = {
            params: {
              user_id: ''
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer 6c2a1470dd4d2e8ddc413bab9d708eba'
            }
        }

        config.params.user_id = this.getCookie();

        this.config = config;

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

        // Submit changed code to server
        axios.put(`${ROOT_URL}/cloud_codes/${data.code.user.id}.json`, JSONdata, this.config)
            .then(response => {
              console.log(data.code);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    getApiData(dispatch) {
        // Submit cookie to server to find user's name and latest code
        axios.get(`${ROOT_URL}/users.json`, this.config)
            .then(response => {
              console.log(response);

                this.storeData(response.data);

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
                    payload: {name: response.data.user.name, id: response.data.user.latest_cloud_code}
                })

            })
            .catch((error) => {
              console.log('error');
                console.log(error);

                // Temporary data for development
                let JS_code = "var%20i%20%3D%20%22Test%20JS%20editor%22%3B%0A%0Afunction%20test()%20%7B%0A%20%20console.log(i)%3B%0A%7D%0A%0Atest()%3B";
                let HTML_code = "%3Cdiv%20class%3D%22block%22%3E%3Ch1%3EWelkom%20bij%20Code%20School%3C%2Fh1%3E%3C%2Fdiv%3E";
                let CSS_code = encodeURIComponent('html, body {\n margin:0;\n padding:0;\n background-color: #a8d8b6;\n color: #000;\n font-family: "Helvetica";\n height:100%}\n\ \n\.block {\n\ text-align:center;\n\ width:100%;\n\ align-items: center;\n\ display:flex;\n\ height:100%;}\n\ \n\h1 {\n\ padding: 0;\n\ width:100%;\n\ letter-spacing: 10px;}');

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
                    payload: {name: "Anonieme Gebruiker"}
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
