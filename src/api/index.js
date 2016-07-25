import axios from 'axios';

let throttleTimeOut; 
const throttleTime = 2000;
let store;

const ROOT_URL = 'http://10.10.105.0:3000';
const POST_ID = '1';

const config = {
    headers: {'content-type': 'application/json'}
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

        model.cloud_code.results = this.getData();
        
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

    requestSend() {
        requestAnimationFrame(this.send.bind(this));    
    }

    throttle() {
        
        clearTimeout(throttleTimeOut);
        throttleTimeOut = setTimeout(this.requestSend.bind(this), throttleTime);

    }


}

export default new Api();