import React, { Component } from "react";
import PropTypes from "prop-types";
import InfoList from "./InfoList";
import "./OpeningHours.css";
import H1 from "../ui/H1";

import { connect } from "react-redux";

class OpeningHours extends Component {
  static defaultProps = {
    weeklyOpeningHours: []
  };

  render() {
    return (
      <div>
        <H1 title="Opening hours" />
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
