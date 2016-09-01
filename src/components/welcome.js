import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import WelcomeHeader from './welcome-header';

import '../../style/Welcome.scss';

class Welcome extends Component {

  render() {
    return (
      <div className="container-fluid">
        <WelcomeHeader></WelcomeHeader>
      </div>
    );
  }

}

export default connect(null, actions)(Welcome);
