import React, { Component } from 'react';
import { connect } from 'react-redux';

class BottomBar extends Component {

  constructor(props) {
    super(props);
    this._increaseAndContinue = this._increaseAndContinue.bind(this);
  }

  _increaseAndContinue() {
    console.log(this.props);
    this.setState({
      step: this.props.step + 1
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="animated bounceInLeft">
            <div className="continue-bar">
              <h2 className="animated pulse">Klik op verder om door te gaan</h2>
              <div className="animated flash">
                <button onClick={this._increaseAndContinue}>Verder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(BottomBar);
