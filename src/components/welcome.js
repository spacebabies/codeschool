import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../../style/Welcome.scss';

class Welcome extends Component {


  render() {
    return (
      <div className="Welcome">
        <h1>Hello World!</h1>
      </div>
    );
  }

}

export default connect(null, actions)(Welcome);
