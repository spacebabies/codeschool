import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CSS } from '../actions/types';

import '../../node_modules/codemirror/mode/css/css';

import Codemirror from 'react-codemirror';

const options = {
    lineNumbers: true,
    mode: 'css'
};

class EditorCSS extends Component {

    handleChange = (code) => this.props.updateCode(CSS, code); 

    editor() {
        if(this.props.code) return <Codemirror ref="editor" value={this.props.code} onChange={this.handleChange.bind(this)} options={options} />
    }

    render() {

        return (
            <div className="EditorCSS">
                <div className="language"><label>Css</label></div>
                {this.editor()}
            </div>
        );

    }

}

function mapStateToProps({code}) {
    return { code: code.css }
}

export default connect(mapStateToProps, actions)(EditorCSS);