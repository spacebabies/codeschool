import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { JS } from '../actions/types';

import '../../node_modules/codemirror/mode/javascript/javascript';

import Codemirror from 'react-codemirror';

const options = {
    lineNumbers: true,
    mode: 'javascript'
};

class EditorJavascript extends Component {

    handleChange = (code) => this.props.updateCode(JS, code); 

    render() {

        return (
            <div className="EditorJavascript">
                <div className="language"><label>Javascript</label></div>
                <Codemirror ref="editor" value={this.props.code} onChange={this.handleChange.bind(this)} options={options} />
            </div>
        );

    }

}

function mapStateToProps({code}) {
    return { code: code.javascript }
}

export default connect(mapStateToProps, actions)(EditorJavascript);
