import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../style/Preview.scss';

const ID_JS_CONTAINER = "CodeSchool-JS-container";
const ID_HTML_CONTAINER = "CodeSchool-HTML-container";

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
        let oldScript = iframeDocument.getElementById(ID_JS_CONTAINER);
        if(oldScript) oldScript.remove();  

        // Create new one
        let script = iframeDocument.createElement("script");
        script.type  = "text/javascript";
        script.text  = this.props.code.javascript;
        script.setAttribute("id", ID_JS_CONTAINER);    

        // Insert into Iframe   
        iframeDocument.body.appendChild(script);
    }

    render() {
        return (
            <div className="Preview" ref="preview">
                <style>
                    {this.props.code.css}
                </style>
                <div 
                    id={ID_HTML_CONTAINER} 
                    style={{height: '100vh'}} 
                    dangerouslySetInnerHTML={{__html: this.props.code.html}} />
            </div>
        );
    }
}

function mapStateToProps({code}) {
    return { code }
}

export default connect(mapStateToProps)(Preview);