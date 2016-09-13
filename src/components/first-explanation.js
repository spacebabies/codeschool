import React, { Component } from 'react';
import { connect } from 'react-redux';

class FirstExplanation extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="explanation">
            <h1>Uitleg 1</h1>
            <p> Microdosing seitan bicycle rights, subway tile viral fingerstache chia cray hot chicken pour-over roof party. Ethical ut eiusmod cliche, hella tempor sapiente edison bulb laboris sartorial craft beer iPhone pariatur. Mumblecore hexagon sustainable, aliqua seitan keffiyeh tumeric cray man braid blog 8-bit quinoa. In glossier id, single-origin coffee aute placeat brunch brooklyn. Odio readymade drinking vinegar locavore before they sold out, raclette craft beer yuccie post-ironic iceland vero. Kogi blog tempor, farm-to-table listicle accusamus do proident iceland tbh sartorial tumeric. Meditation 90's chartreuse ullamco velit, direct trade craft beer artisan dolore food truck helvetica beard heirloom occaecat.</p>

            <div className="explanation-image">
              <img src="http://core0.staticworld.net/images/article/2015/07/free_programming_resources_for_kids-100599515-gallery.idge.jpg"/>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}

export default connect()(FirstExplanation);
