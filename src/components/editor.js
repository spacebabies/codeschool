import React, { Component } from 'react';
import Codemirror from 'react-codemirror';

import Preview from './preview';

import '../../node_modules/codemirror/mode/javascript/javascript';
import '../../node_modules/codemirror/mode/xml/xml';
import '../../node_modules/codemirror/mode/markdown/markdown';
import '../../node_modules/codemirror/mode/css/css';

import '../../style/Editor.scss';

// <html style="color: green"><head><title>HTML Example</title></head><body>
// </body></html>

let defaults = {
	html: '<div class="block"></div>',
    css: '.block { width: 30px; height:30px; background-color: pink  }',
	javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

export default class Editor extends Component {

    constructor(props) {

        super(props);

        this.state = {

            html: defaults.html,

            css: defaults.css,

            javascript: defaults.javascript

        };  

    }

    interact(cm){
      console.log(cm.getValue());
    }

    handleChange(type, code) {
        this.setState({
            [type]: code
        });

        this.preview();
    }

    preview() {
        
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
        <div>
            <div className="editor">
            <Codemirror ref="editor" value={this.state.html} onChange={this.handleChange.bind(this, 'html')} options={HTMLoptions} interact={this.interact}/>
            <Codemirror ref="editor" value={this.state.css} onChange={this.handleChange.bind(this, 'css')} options={CSSoptions} interact={this.interact}/>
            <Codemirror ref="editor" value={this.state.javascript} onChange={this.handleChange.bind(this, 'javascript')} options={JSoptions} interact={this.interact}/>
            </div>
            <Preview {...this.state}></Preview>  
        </div>
      );

    }

}
