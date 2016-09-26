import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Editor from './editor';
import Toolbar from './toolbar';
import Messagebar from './messagebar';
import AssignmentNav from './assignment-nav';

import '../../style/App.scss';

class App extends Component {

  componentDidMount() {
      this.props.getApiData();
  }

  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <Messagebar></Messagebar>
        <Editor></Editor>
        <AssignmentNav></AssignmentNav>
      </div>
    );
  }

}

export default connect(null, actions)(App);
