import React, { Component } from 'react';

import '../../style/Preview.scss';

export default class Preview extends Component {

    constructor(props) {

        super(props);

        this.iframe = document.getElementById('previewIframe');

        this.state = {
            code: '...loading...'
        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            code: this.generate(nextProps)
        });   
    }

    componentDidMount() {
         this.state = {
            code: this.generate(this.props)
        }
    }

    generate(props) {
        let code = '<html style="color: green"><head><title>HTML Example</title>' +
            '<style>'+props.css+'</style>' +
            '</head>' +
            '<body>'+props.html+'<script type="text/javascript">'+props.javascript+'</script>' +
            '</body></html>';

        this.updateIframe(code);
    }

    updateIframe(code) {
        let iframe = this.refs.chart;

        iframe.contentWindow.document.open('text/html', 'replace');
        iframe.contentWindow.document.write(code);
        iframe.contentWindow.document.close();
    }

    render() {
        return (
            <div>
                <iframe id="previewIframe" ref='chart' src="about:blank"></iframe>
            </div>
        );
    }
}