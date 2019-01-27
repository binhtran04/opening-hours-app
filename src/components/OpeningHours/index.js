import React, { Component } from "react";
import PropTypes from "prop-types";
import HourInfoList from "./HourInfoList";

import { connect } from "react-redux";

class OpeningHours extends Component {
  static defaultProps = {
    openingHours: []
  };
  render() {
    return (
      <div>
        <div>Opening hours</div>
        <HourInfoList openingHours={this.props.openingHours} />
      </div>
    );
  }
}

OpeningHours.propTypes = {
  openingHours: PropTypes.array
};

const mapStateToProps = ({ openingHours }) => {
  return {
    openingHours: openingHours.data
  };
};
export default connect(mapStateToProps)(OpeningHours);
