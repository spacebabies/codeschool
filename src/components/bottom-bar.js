import React, { Component } from 'react';
import { connect } from 'react-redux';

class BottomBar extends Component {

  constructor(props) {
    super(props);
    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  saveAndContinue() {
    this.props.nextStep()
  }


  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="animated bounceInLeft">
            <div className="continue-bar">
              <h2 className="animated pulse">Klik op verder om door te gaan</h2>
              <div className="animated flash">
                <button onClick={this.saveAndContinue}>Verder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default connect()(BottomBar);
