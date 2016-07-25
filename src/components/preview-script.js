import React, { Component } from 'react';
import { connect } from 'react-redux';

let scriptDOM;

class Script extends Component {

    constructor(props) {

        super(props);

    }

    componentWillReceiveProps(nextProps) {
        this.executeJS(nextProps.code.javascript);
    }

    componentDidMount() {
        this.executeJS(this.props.code.javascript);
    }

    executeJS(code) {
        // Clean up old code
        if(scriptDOM) scriptDOM.remove();  

        // Create new one
        let script = document.createElement("script");
        script.type  = "text/javascript";
        script.text  = code;

        // Insert into Iframe   
        scriptDOM = this.refs.Script.appendChild(script);
    }

    render() {
        return ( 
           <codeschool-script ref="Script"></codeschool-script> 
        );
    }
}

function mapStateToProps({code}) {
    return { code: code }
}

export default connect(mapStateToProps)(Script);