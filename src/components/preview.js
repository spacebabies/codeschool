import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import PreviewScript from './preview-script';

import '../../style/Preview.scss';

class Preview extends Component {

    constructor(props) {

        super(props);
        
    }

    render() {
        return (
            <codeschool-code>

                <codeschool-css>
                    <style>
                        {this.props.code.css}
                    </style>
                </codeschool-css>

                <codeschool-html dangerouslySetInnerHTML={{__html: this.props.code.html}} />

                <PreviewScript></PreviewScript>

            </codeschool-code>
        );
    }
}

function mapStateToProps({code}) {
    return { code }
}

export default connect(mapStateToProps)(Preview);