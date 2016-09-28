import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import cookie_helper from 'js-cookie';

const ROOT_URL = 'http://10.10.105.0:3000';

const CONFIG = {
    headers: {
        'content-type': 'application/json',
        'Authorization': `Token token=${cookie_helper.get('code_school')}`
    }
};


class BottomBar extends Component {

  constructor(props) {
    super(props);
    this.continue = this.continue.bind(this);
    this.goBack = this.goBack.bind(this);
    this.greenClick = this.greenClick.bind(this);
  }

  continue() {
    console.log(this.props)
    console.log(this.props.rootUrl)
    this.props.nextStep()
  }

  goBack() {
    this.props.previousStep()
  }

  greenClick() {
    if (this.props.lastStep) {
      console.log("SENDING REQUEST...")

      axios.get(`${ROOT_URL}/cloud_codes/onboard.json`, CONFIG)
        .then(response => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
        window.location = '/';
    } else {
      this.continue();
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="animated bounceInLeft">
            <div className="continue-bar">
              <h2 className="animated pulse">Klik op verder om door te gaan</h2>
              <div className="animated flash">
                <div id="red">
                  <button hidden={this.props.hide} onClick={this.goBack}>Terug</button>
                </div>
                <div id="green">
                  <button onClick={this.greenClick}>Verder</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default connect()(BottomBar);
