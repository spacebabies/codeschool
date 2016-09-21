import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import BottomBar from './bottom-bar';

import '../../style/AssignmentNav.scss';

class AssignmentNav extends Component {

  render() {

    if(this.props.correct) {
      return (
        <div className="AssignmentNav">
          <div className="assignment_nav">
            <h2 className="animated pulse">Klik op verder om door te gaan</h2>
              <button onClick={this.nextAssignment.bind(this)}>Verder</button>
          </div>
        </div>
      );
    }
    return null;
  }

  nextAssignment() {
    this.props.getApiData();
  }

}

function mapStateToProps({code}) {
  return { correct: code.correct }
}

export default connect(mapStateToProps, actions)(AssignmentNav);
