import React, { Component } from 'react';

import '../../style/Preview.scss';

export default class Preview extends Component {

    constructor(props) {

        super(props);

        this.state = {
            code: this.generate()
        }

    }

    componentWillReceiveProps() {
        this.setState({
            code: this.generate()
        });   
    }

    generate() {
        return '<html style="color: green"><head><title>HTML Example</title>' +
            '<style>'+this.props.css+'</style>' +
            '</head>' +
            '<body>'+this.props.html+'<script type="text/javascript">'+this.props.javascript+'</script>' +
            '</body></html>';
    }

    render() {
    return (
        <textarea className="Preview" value={this.state.code}></textarea>
    );
    }
}