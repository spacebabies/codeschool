import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../style/Preview.scss';

class Preview extends Component {

    constructor(props) {

        super(props);

    }

    componentWillReceiveProps(nextProps) {
        this.generate(this.props.code);
    }

    componentDidMount() {
        this.generate(this.props.code);
    }

    generate(props) {
        let CSS = '<style>'+props.css+'</style>';
        let JS = '<script type="text/javascript">'+props.javascript+'</script>';
        let HTML = props.html;
        let code = '<!DOCTYPE html>' + '<html><head><title>Rendered HTML from Pattern</title>' + CSS + '</head><body>' + HTML + JS + '</body></html>';

        this.updateIframe(code);
    }

    updateIframe(code) {
        let iframeRef = this.refs.iframe;
        let iframe = iframeRef.contentDocument; // TODO: IE version = || contentWindow.document

        if(!iframe) return false; // TODO: Karma does not find iframe

        iframe.open('text/html', 'replace');
        iframe.write(code);
        iframe.close();
    }

    render() {
        return (
            <div className="Preview">
                <iframe ref='iframe' frameBorder="0" src="about:blank"></iframe>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { code: state.code }
}

export default connect(mapStateToProps)(Preview);