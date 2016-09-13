import React, { Component } from 'react';
import { connect } from 'react-redux';

class SecondExplanation extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="explanation">
            <h1>Uitleg 2</h1>
            <p>Locavore man bun meditation vice scenester, cliche glossier authentic. Raw denim enamel pin raclette, lumbersexual schlitz cold-pressed church-key portland disrupt typewriter. Chicharrones chillwave cronut, master cleanse kogi disrupt normcore XOXO humblebrag. Williamsburg polaroid skateboard slow-carb gastropub. Pour-over actually tbh, la croix single-origin coffee cred cronut bushwick retro stumptown pickled pug kinfolk beard. Farm-to-table raw denim pickled, mlkshk +1 you probably haven't heard of them activated charcoal lomo. Pok pok kombucha selvage etsy taxidermy literally.</p>

            <div className="video-container">
              <iframe src="https://www.youtube.com/embed/VIpmkeqJhmQ" frameBorder="0" allowFullScreen></iframe>
            </div>
            <p></p>
            </div>
        </div>
        <div className="col-3"></div>
      </div>
    );
  }

}

export default connect()(SecondExplanation);
