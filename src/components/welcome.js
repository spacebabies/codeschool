import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import WelcomeHeader from './welcome-header';

import '../../style/Welcome.scss';

class Welcome extends Component {

  render() {
    return (
      <WelcomeHeader></WelcomeHeader>
    );
  }

}

export default connect(null, actions)(Welcome);
