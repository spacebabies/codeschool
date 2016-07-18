import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../style/Preview.scss';

class Preview extends Component {

    constructor(props) {

        super(props);

    }

    render() {
        var containerStyle = {
            height: '100vh'
        };

        return (
            <div className="Preview">
                <style>
                    {this.props.code.css}
                </style>
                <div className="CodeSchool-HTML-container" style={containerStyle} dangerouslySetInnerHTML={{__html: this.props.code.html}} />
                <script type="text/javascript">{this.props.code.javascript}</script>
            </div>
        );
    }
}

function mapStateToProps({code}) {
    return { code }
}

export default connect(mapStateToProps)(Preview);