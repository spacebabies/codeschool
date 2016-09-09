import React, { Component } from 'react';
import { connect } from 'react-redux';

class BottomBar extends Component {

  constructor(props) {
    super(props);
    this.continue = this.continue.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  continue() {
    this.props.nextStep()
  }

  goBack() {
    this.props.previousStep()
  }


  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="animated bounceInLeft">
            <div className="continue-bar">
              <h2 className="animated pulse">Klik op verder om door te gaan</h2>
              <div className="animated flash">
                <div id="green">
                  <button onClick={this.continue}>Verder</button>
                </div>
                <div id="red">
                  <button onClick={this.goBack}>Terug</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default connect()(BottomBar);
