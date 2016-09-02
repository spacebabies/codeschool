import React, { Component } from 'react';
import { connect } from 'react-redux';

class FirstExplanation extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h1>Uitleg 1</h1>
        </div>
        <div className="col-3"></div>
      </div>
    );
  }

}

function  mapStateToProps(state){

    return state
}

export default connect(mapStateToProps)(FirstExplanation);
