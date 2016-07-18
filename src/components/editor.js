import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Codemirror from 'react-codemirror';
import Frame from 'react-frame-component';

import Preview from './preview';

import '../../node_modules/codemirror/mode/javascript/javascript';
import '../../node_modules/codemirror/mode/xml/xml';
import '../../node_modules/codemirror/mode/markdown/markdown';
import '../../node_modules/codemirror/mode/css/css';

import '../../style/Editor.scss';
import '../../style/CodeMirror.scss';

class Editor extends Component {

    constructor(props) {

        super(props);

    }

    handleChange(type, changedCode) {

        this.props.code[type] = changedCode

        this.props.previewCode(this.props.code);
        this.props.saveCloudCode(this.props.code); 

    }

    render() {

      var HTMLoptions = {
        lineNumbers: true,
        mode: 'xml',
        htmlMode: true
      };

      var CSSoptions = {
        lineNumbers: true,
        mode: 'css'
      };

       var JSoptions = {
        lineNumbers: true,
        mode: 'javascript'
      };

      return (
        <div className="Editor">
            <div className="codePanels">
                <Codemirror ref="editor" value={this.props.code.html} onChange={this.handleChange.bind(this, 'html')} options={HTMLoptions} interact={this.interact}/>
                <Codemirror ref="editor" value={this.props.code.css} onChange={this.handleChange.bind(this, 'css')} options={CSSoptions} interact={this.interact}/>
                <Codemirror ref="editor" value={this.props.code.javascript} onChange={this.handleChange.bind(this, 'javascript')} options={JSoptions} interact={this.interact}/>
            </div>
            <Frame id="Frame" className="Frame" ref='iframe'>
                <Preview></Preview>
            </Frame>
        </div>
      );

    }

}

function mapStateToProps({code}) {
    return { code }
}

export default connect(mapStateToProps, actions)(Editor);