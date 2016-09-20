import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import BottomBar from './bottom-bar';

class AssignmentNav extends Component {

  render() {

    if(this.props.correct) {
      return (
        <div className="AssignmentNav">
          COMPLETED <button onClick={this.nextAssignment.bind(this)}>NEXT PLEASE</button>
        </div>
      );
    }

    return null;

  }

  nextAssignment() {

    this.props.setCompleted();

  }

}

function mapStateToProps({code}) {
  return { correct: code.correct }
}

export default connect(mapStateToProps, actions)(AssignmentNav);