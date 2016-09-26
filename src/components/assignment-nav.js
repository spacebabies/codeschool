import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import BottomBar from './bottom-bar';

import '../../style/AssignmentNav.scss';

class AssignmentNav extends Component {

  render() {
    if(this.props.correct) {
      if (document.getElementById("BottomBar") !== null) {
        document.getElementById("BottomBar").style.visibility = "visible";
      };
      return (
        <div id="BottomBar">
          <div className="AssignmentNav">
            <div className="assignment_nav">
              <h2 className="animated pulse">Heel goed! Klik op verder</h2>
                <button onClick={this.nextAssignment.bind(this)}>Verder</button>
            </div>
          </div>
        </div>
      );

    }
    return null;
  }

  nextAssignment() {
    this.props.getApiData();
    document.getElementById("BottomBar").style.visibility = "hidden";
    return false;
  }

}

function mapStateToProps({code}) {
  return { correct: code.correct }
}

export default connect(mapStateToProps, actions)(AssignmentNav);
