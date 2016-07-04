import React, { Component } from 'react';
import Codemirror from 'react-codemirror';

import '../../node_modules/codemirror/mode/javascript/javascript';
import '../../node_modules/codemirror/mode/xml/xml';
import '../../node_modules/codemirror/mode/markdown/markdown';

let defaults = {
	content: '<strong>hoi</strong>',
	javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

export default class HTMLeditor extends Component {

    constructor(props) {

        super(props);

        this.updateCode = this.updateCode.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.toggleReadOnly = this.toggleReadOnly.bind(this);
        this.interact = this.interact.bind(this);

        this.state = {
          content: defaults.content,
          readOnly: false,
          mode: 'html',
        };  

    }

    updateCode(newCode) {
        this.setState({
            code: newCode
        });
    }

    changeMode(e) {
      var mode = e.target.value;
      this.setState({
        mode: mode,
        code: defaults[mode]
      });
    }

    toggleReadOnly () {
      this.setState({
        readOnly: !this.state.readOnly
      }, () => this.refs.editor.focus());
    }

    interact(cm){
      console.log(cm.getValue());
    }

    render() {
      var options = {
        lineNumbers: true,
        readOnly: this.state.readOnly,
        mode: this.state.mode
      };
      return (
        <div>
          <Codemirror ref="editor" value={this.state.content} onChange={this.updateCode} options={options} interact={this.interact}/>
          <div style={{ marginTop: 10 }}>
            <select onChange={this.changeMode} value={this.state.mode}>
              <option value="content">content</option>
              <option value="javascript">JavaScript</option>
            </select>
            <button onClick={this.toggleReadOnly}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
          </div>
        </div>
      );
    }

}
