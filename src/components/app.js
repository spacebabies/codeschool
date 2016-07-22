import React, { Component } from 'react';
import Editor from './editor';
import Toolbar from './toolbar';

import '../../style/App.scss';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <Editor></Editor>
      </div>
    );
  }

}
