import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../style/Toolbar.scss';

class Toolbar extends Component {

  constructor(props) {

    super(props);
        
  }

  render() {
    return (
      <div className="Toolbar">
        <div className="name">
            Code School powered by <a href="https://www.dedigitaletopschool.nl/">De Digitale Topschool</a>
        </div>
        <div className="user">
            <img className="avatar" src="style/images/unknown.gif" alt="Unknown" /> {this.props.user.name}
        </div>
      </div>
    );
  }

}

function mapStateToProps({code}) {
    return { user: code.user }
}

export default connect(mapStateToProps)(Toolbar);