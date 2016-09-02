import React, { Component } from 'react';
import { connect } from 'react-redux';

class BottomBar extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="animated bounceInLeft">
            <div className="continue-bar">
              <h2 className="animated pulse">Klik op verder om door te gaan</h2>
              <div className="animated flash">
                <a className="button" href="#">verder</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

function  mapStateToProps(state){

    return state
}

export default connect(mapStateToProps)(BottomBar);
