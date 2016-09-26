import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../style/Messagebar.scss';

class Messagebar extends Component {

  constructor(props) {

    super(props);

  }





  render() {
    if (this.props.user.name == "Anonieme Gebruiker") {
      return (
      <div className="Messagebar">
        <div className="message">
          <div className="assignment">
            Je bent niet ingelogd op de Digitale Topschool. Vorderingen worden niet opgeslagen.
          </div>
        </div>
      </div>
      );
    }
    else {
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

}

function mapStateToProps({code}) {
    return {
        user: code.user
    }
}

export default connect(mapStateToProps)(Messagebar);
