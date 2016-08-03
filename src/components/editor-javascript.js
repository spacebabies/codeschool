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

    editor() {
        if(this.props.code !== 'loading') return <Codemirror ref="editor" value={this.props.code} onChange={this.handleChange.bind(this)} options={options} />
    }

    render() {

        return (
            <div className="EditorJavascript">
                <div className="language"><label>Javascript</label></div>
                {this.editor()}
            </div>
        );

    }

}

function mapStateToProps({code}) {
    return { code: code.javascript }
}

export default connect(mapStateToProps, actions)(EditorJavascript);
