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
        <WelcomeHeader></WelcomeHeader>
        <BottomBar></BottomBar>
      </div>
    );
  }

}

export default connect(null, actions)(Welcome);
