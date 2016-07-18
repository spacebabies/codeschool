import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../style/Preview.scss';

class Preview extends Component {

    constructor(props) {

        super(props);

    }

    componentWillReceiveProps(nextProps) {
        this.executeJS(this.props.code);
    }

    componentDidMount() {
        this.executeJS(this.props.code);
    }

    executeJS(code) {
        let iframe = document.getElementById('Frame');
        
        if(!iframe) return false; // Empty in Karma

        let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Clean up old code
        let oldScript = iframeDocument.getElementById("scriptPreview");
        if(oldScript) oldScript.remove();  

        // Create new one
        let script = iframeDocument.createElement("script");
        script.type  = "text/javascript";
        script.text  = this.props.code.javascript;
        script.setAttribute("id", "scriptPreview");    

        // Insert into Iframe   
        iframeDocument.body.appendChild(script);
    }

    render() {
        var containerStyle = {
            height: '100vh'
        };

        return (
            <div className="Preview" ref="preview">
                <style>
                    {this.props.code.css}
                </style>
                <div className="CodeSchool-HTML-container" style={containerStyle} dangerouslySetInnerHTML={{__html: this.props.code.html}} />
            </div>
        );
    }
}

function mapStateToProps({code}) {
    return { code }
}

export default connect(mapStateToProps)(Preview);