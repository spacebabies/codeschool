import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import WelcomeHeader from './welcome-header';
import BottomBar from './bottom-bar';

import '../../style/Welcome.scss';

class Welcome extends Component {

  render() {
    return (
      <div className="grid">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <WelcomeHeader></WelcomeHeader>
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <BottomBar></BottomBar>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(null, actions)(Welcome);
