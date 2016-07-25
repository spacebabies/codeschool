import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { HTML } from '../actions/types';

import '../../node_modules/codemirror/mode/xml/xml';

import Codemirror from 'react-codemirror';

const options = {
    lineNumbers: true,
    mode: 'xml',
    htmlMode: true
};

class EditorHTML extends Component {

    handleChange = (code) => this.props.updateCode(HTML, code); 

    render() {

        return (
            <div className="EditorHTML">
                <div className="language"><label>Html</label></div>
                <Codemirror ref="editor" value={this.props.code} onChange={this.handleChange.bind(this)} options={options} />
            </div>
        );

    }

}

function mapStateToProps({code}) {
    return { code: code.html }
}

export default connect(mapStateToProps, actions)(EditorHTML);
