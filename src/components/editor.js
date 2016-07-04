import React, { Component } from 'react';
import Codemirror from 'react-codemirror';

import '../../node_modules/codemirror/mode/javascript/javascript';
import '../../node_modules/codemirror/mode/xml/xml';
import '../../node_modules/codemirror/mode/markdown/markdown';
import '../../node_modules/codemirror/mode/css/css';

import '../../style/Editor.scss';

let defaults = {
	html: '<html style="color: green"><head><title>HTML Example</title></head><body><div class="block"></div></body></html>',
    css: '.block { width: 30px; height:30px; background-color: pink  }',
	javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

export default class Editor extends Component {

    constructor(props) {

        super(props);

        this.interact = this.interact.bind(this);

        this.state = {

            html: {
                content: defaults.html
            },

            css: {
                content: defaults.css
            },

            javascript: {
                content: defaults.javascript
            }

        };  

    }

    interact(cm){
      console.log(cm.getValue());
    }

    render() {
      var HTMLoptions = {
        lineNumbers: true,
        mode: 'xml',
        htmlMode: true
      };

      var CSSoptions = {
        lineNumbers: true,
        mode: 'css'
      };
    
       var JSoptions = {
        lineNumbers: true,
        mode: 'javascript'
      };
    
      return (
        <div className="editor">
          <Codemirror ref="editor" value={this.state.html.content} onChange={this.updateCode} options={HTMLoptions} interact={this.interact}/>
          <Codemirror ref="editor" value={this.state.css.content} onChange={this.updateCode} options={CSSoptions} interact={this.interact}/>
          <Codemirror ref="editor" value={this.state.javascript.content} onChange={this.updateCode} options={JSoptions} interact={this.interact}/>
        </div>
      );
    }

}
