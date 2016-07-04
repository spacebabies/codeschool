import React, { Component } from 'react';
import Codemirror from 'react-codemirror';

import '../../node_modules/codemirror/mode/javascript/javascript';
import '../../node_modules/codemirror/mode/xml/xml';
import '../../node_modules/codemirror/mode/markdown/markdown';

let defaults = {
	content: '<strong>hoi</strong>',
	javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

export default class Editor extends Component {

    constructor(props) {

        super(props);

        this.interact = this.interact.bind(this);

        this.state = {

            html: {
                content: defaults.content,
                readOnly: false
            },

            css: {
                content: defaults.content,
                readOnly: false
            },

            js: {
                content: defaults.content,
                readOnly: false
            }

        };  

    }

    changeMode(e) {
      var mode = e.target.value;
      this.setState({
        mode: mode,
        code: defaults[mode]
      });
    }

    interact(cm){
      console.log(cm.getValue());
    }

    render() {
      var HTMLoptions = {
        lineNumbers: true,
        mode: 'html'
      };

      var CSSoptions = {
        lineNumbers: true,
        mode: 'css'
      };
    
       var JSoptions = {
        lineNumbers: true,
        mode: 'js'
      };
    
      return (
        <div>
          <Codemirror ref="editor" value={this.state.html.content} onChange={this.updateCode} options={HTMLoptions} interact={this.interact}/>
          <Codemirror ref="editor" value={this.state.html.content} onChange={this.updateCode} options={CSSoptions} interact={this.interact}/>
          <Codemirror ref="editor" value={this.state.html.content} onChange={this.updateCode} options={JSoptions} interact={this.interact}/>
        </div>
      );
    }

}
