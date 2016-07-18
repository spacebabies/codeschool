import React, { Component } from 'react';
import { connect } from 'react-redux';

let scriptDOM;

class Script extends Component {

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
        // Clean up old code
        if(scriptDOM) scriptDOM.remove();  

        // Create new one
        let script = document.createElement("script");
        script.type  = "text/javascript";
        script.text  = this.props.code.javascript;

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
    return { code }
}

export default connect(mapStateToProps)(Script);