import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../style/Messagebar.scss';

class Messagebar extends Component {

  constructor(props) {

    super(props);

  }

  render() {
    return (
      <div className="Messagebar">
        <div className="message">
            Opdracht: De Ansichtkaart
            <br />
            <div className="assignment">
            Stap {this.props.user.initial_assignment_step}
            </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps({code}) {
    return { user: code.user }
}

export default connect(mapStateToProps)(Messagebar);
