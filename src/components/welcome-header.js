import React, { Component } from 'react';
import { connect } from 'react-redux';

class WelcomeHeader extends Component {

  render() {
    return (
        <div className="welcome-box">
          <div className="animated bounceInDown">
            <h1 className="animated swing">Welkom bij</h1>
            <div className="topschool-logo">
              <img src="style/images/topschool_banner.png"></img>
            </div>
          </div>
        </div>
    );
  }

}

function  mapStateToProps(state){

    return state
}

export default connect(mapStateToProps)(WelcomeHeader);
