import React, { Component } from "react";
import PropTypes from "prop-types";
import InfoList from "./InfoList";
import "./OpeningHours.css";
import Typography from "../ui/Typography";
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
            <Typography variant="heading1">Opening hours</Typography>
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
