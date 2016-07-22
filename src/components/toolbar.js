import React, { Component } from 'react';

import '../../style/Toolbar.scss';

export default class Toolbar extends Component {

  render() {
    return (
      <div className="Toolbar">
        <div className="name">
            Code School powered by <a href="https://www.dedigitaletopschool.nl/">De Digitale Topschool</a>
        </div>
        <div className="user">
            <img className="avatar" src="style/images/unknown.gif" alt="Unknown" /> Melanie
        </div>
      </div>
    );
  }

}
