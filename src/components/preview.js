import React, { Component } from 'react';

import '../../style/Preview.scss';

export default class Preview extends Component {

    constructor(props) {

        super(props);

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
        let CSS = '<style>'+props.css+'</style>';
        let JS = '<script type="text/javascript">'+props.javascript+'</script>';
        let HTML = props.html;
        let code = '<!DOCTYPE html>' + '<html><head><title>Rendered HTML from Pattern</title>' + CSS + '</head><body>' + HTML + JS + '</body></html>';

        this.updateIframe(code);
    }

    updateIframe(code) {
        let iframe = this.refs.iframe;

        iframe.contentWindow.document.open('text/html', 'replace');
        iframe.contentWindow.document.write(code);
        iframe.contentWindow.document.close();
    }

    render() {
        return (
            <div className="Preview">
                <iframe ref='iframe' frameBorder="0" src="about:blank"></iframe>
            </div>
        );
    }
}