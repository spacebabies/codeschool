import axios from 'axios';
import cookie_helper from 'js-cookie';

import {
    CODE,
    JS,
    HTML,
    CSS,
    USER,
    CORRECT,
    COMPLETED
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
            headers: {
                'content-type': 'application/json',
                'Authorization': `Token token=${this.getCookie()}`
            }
        }

        // config.params.user_id = this.getCookie();

        this.config = config;

        window.addEventListener("beforeunload", this.send.bind(this));
    }

    storeData(data) {
        store = data;
    }

    getData() {
        return store;
    }

    setDefaults(dispatch) {
      // Temporary data for development
      let JS_code = "var%20i%20%3D%20%22Test%20JS%20editor%22%3B%0A%0Afunction%20test()%20%7B%0A%20%20console.log(i)%3B%0A%7D%0A%0Atest()%3B";
      let HTML_code = "%3Cdiv%20class%3D%22block%22%3E%3Ch1%3EWelkom%20bij%20Code%20School%3C%2Fh1%3E%3C%2Fdiv%3E";
      let CSS_code = "html%2C%20body%20%7B%0A%20margin%3A0%3B%0A%20padding%3A0%3B%0A%20background-color%3A%20%23FFF%3B%0A%20color%3A%20%23000%3B%0A%20font-family%3A%20%22Helvetica%22%3B%0A%20height%3A100%25%7D%0A%20%0A.block%20%7B%0A%20text-align%3Acenter%3B%0A%20width%3A100%25%3B%0A%20align-items%3A%20center%3B%0A%20display%3Aflex%3B%0A%20height%3A100%25%3B%7D%0A%20%0Ah1%20%7B%0A%20padding%3A%200%3B%0A%20width%3A100%25%3B%0A%20letter-spacing%3A%2010px%3B%7D";

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
    }


    save(data, dispatch) {

        // Temporary store data in Api Class
        this.storeData(data);

        // Wait till user has finised typing
        this.throttle(dispatch);

    }

    send(dispatch) {
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

                if(response.data.message_code == 200) {
                    // message_code: 200
                    dispatch({
                        type: CORRECT,
                        payload: {assignment_name: response.data.assignment_name, initial_assignment_step: response.data.assignment_step, assignment_step_message: response.data.assignment_step_message}
                    })
                } else {
                    // message_code: 400
                    dispatch({
                        type: CORRECT,
                        payload: false
                    })
                }

                console.log("send api response", response);
                console.log("send api data", data.code);
            })
            .catch((error) => {
                console.log("send api error", error);
            });

    }

    getApiData(dispatch) {
        // Submit cookie to server to find user's name and latest code
        if (this.getCookie() == undefined ) {
          this.setDefaults(dispatch);
        }
        else {
        axios.get(`${ROOT_URL}/cloud_codes/profile.json`, this.config)
            .then(response => {
              console.log("get api profile", response);

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
                    payload: {name: response.data.user.name, id: response.data.user.latest_cloud_code, assignment_name: response.data.assignment_name, initial_assignment_step: response.data.assignment_step, assignment_step_message: response.data.assignment_step_message}
                })
            })
            .catch((error) => {
              console.log('error');
                console.log(error);

                this.setDefaults(dispatch);

              });

          }
    }

    requestSend(dispatch) {
        requestAnimationFrame(this.send.bind(this, dispatch));
    }

    throttle(dispatch) {

        clearTimeout(throttleTimeOut);
        throttleTimeOut = setTimeout(this.requestSend.bind(this, dispatch), throttleTime);

    }


}

export default new Api();
