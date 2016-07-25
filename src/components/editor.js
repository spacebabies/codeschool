import React, { Component } from 'react';

import EditorHTML from './editor-html';
import EditorJavascript from './editor-javascript';
import EditorCSS from './editor-css';

import Frame from './frame';
import Preview from './preview';

import '../../style/Editor.scss';
import '../../style/CodeMirror.scss';

export default class Editor extends Component {

    render() {
        
      return (
        <div className="Editor">
            <div className="codePanels">
                <EditorHTML></EditorHTML>
                <EditorCSS></EditorCSS>
                <EditorJavascript></EditorJavascript>
            </div>
            <Frame id="Frame" className="Frame" ref='iframe' initialContent='<CodeSchool></CodeSchool>' mountTarget='CodeSchool'>
                <Preview></Preview>
            </Frame>
        </div>
      );

    }

}