import React, { Component } from "react";
import PropTypes from "prop-types";
import InfoList from "./InfoList";

import { connect } from "react-redux";

class OpeningHours extends Component {
  static defaultProps = {
    weeklyOpeningHours: []
  };

  render() {
    return (
      <div>
        <div>Opening hours</div>
        <InfoList weeklyOpeningHours={this.props.weeklyOpeningHours} />
      </div>
    );
  }
}

OpeningHours.propTypes = {
  weeklyOpeningHours: PropTypes.array
};

const mapStateToProps = ({ weeklyOpeningHours }) => {
  return {
    weeklyOpeningHours: weeklyOpeningHours.data
  };
};
export default connect(mapStateToProps)(OpeningHours);
