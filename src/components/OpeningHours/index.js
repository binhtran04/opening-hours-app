import React, { Component } from "react";
import PropTypes from "prop-types";
import InfoList from "./InfoList";
import "./OpeningHours.css";
import H1 from "../ui/H1";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clockIcon from "../../assets/icons/clock-regular.svg";

import { connect } from "react-redux";

class OpeningHours extends Component {
  static defaultProps = {
    weeklyOpeningHours: []
  };

  render() {
    return (
      <div className="hourwidget">
        <div className="hourwidget__wrapper">
          <div className="hourwidget__header">
            <div className="icon__wrapper">
              <img className="clock-icon" src={clockIcon} alt="clock icon" />
            </div>
            <H1 title="Opening hours" />
          </div>
          <div className="hourwidget__content">
            <InfoList weeklyOpeningHours={this.props.weeklyOpeningHours} />
          </div>
        </div>
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
