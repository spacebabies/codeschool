import React, { Component } from 'react';
import { connect } from 'react-redux';

class BottomBar extends Component {

  constructor(props) {
    super(props);
    this.continue = this.continue.bind(this);
    this.goBack = this.goBack.bind(this);
    this.greenClick = this.greenClick.bind(this);
  }

  continue() {
    console.log(this.props)
    this.props.nextStep()
  }

  goBack() {
    this.props.previousStep()
  }

  greenClick() {
    if (this.props.lastStep) {
      window.location = '/';
    } else {
      this.continue();
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="animated bounceInLeft">
            <div className="continue-bar">
              <h2 className="animated pulse">Klik op verder om door te gaan</h2>
              <div className="animated flash">
                <div id="red">
                  <button hidden={this.props.hide} onClick={this.goBack}>Terug</button>
                </div>
                <div id="green">
                  <button onClick={this.greenClick}>Verder</button>
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
