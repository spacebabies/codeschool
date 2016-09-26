import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../style/Messagebar.scss';

class Messagebar extends Component {

  constructor(props) {

    super(props);

  }
  render() {
    return (
      <div id="assignmentMessages">
        <div className="Messagebar">
          <div className="animated headShake">
            <div className="message">
                Je werkt aan: {this.props.user.assignment_name}
                <br />
                <div className="assignment">
                Code missie {this.props.user.initial_assignment_step}: {this.props.user.assignment_step_message}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps({code}) {
    return {
        user: code.user
    }
}

export default connect(mapStateToProps)(Messagebar);
