import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import BottomBar from './bottom-bar';

class AssignmentNav extends Component {

  render() {

    if(this.props.correct) {
      return (
        <div className="AssignmentNav">
          <BottomBar nextStep={this.nextAssignment.bind(this)} hide={false} lastStep={true}></BottomBar>
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