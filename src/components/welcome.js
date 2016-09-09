import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import WelcomeHeader from './welcome-header';
import BottomBar from './bottom-bar';
import FirstExplanation from './first-explanation'
import SecondExplanation from './second-explanation'
import ThirdExplanation from './third-explanation'

import '../../style/Welcome.scss';

class Welcome extends Component {

  constructor() {
    super();
    this.state = { step: 1 };
  }

  nextStep() {
    this.setState({
      step : this.state.step + 1
    });
  }

  previousStep() {
    this.setState({
      step : this.state.step - 1
    });
  }

	render() {
		switch (this.state.step) {
			case 1:
				return (
          <div className="Welcome">
            <WelcomeHeader></WelcomeHeader>
            <BottomBar nextStep={this.nextStep.bind(this)} hide={true} lastStep={false}></BottomBar>
          </div>
        )
      case 2:
				return (
          <div className="Welcome">
            <FirstExplanation></FirstExplanation>
            <BottomBar nextStep={this.nextStep.bind(this)} previousStep={this.previousStep.bind(this)} hide={false} lastStep={false}></BottomBar>
          </div>
        )
      case 3:
				return (
          <div className="Welcome">
            <SecondExplanation></SecondExplanation>
            <BottomBar nextStep={this.nextStep.bind(this)} previousStep={this.previousStep.bind(this)} hide={false} lastStep={false}></BottomBar>
          </div>
        )
      case 4:
				return (
          <div className="Welcome">
            <ThirdExplanation></ThirdExplanation>
            <BottomBar nextStep={this.nextStep.bind(this)} previousStep={this.previousStep.bind(this)} hide={false} lastStep={true}></BottomBar>
          </div>
        )
  		}
    }
  }


export default connect()(Welcome);
