import React from "react";
import PropTypes from "prop-types";
import H3 from "../ui/H3";
import H4 from "../ui/H4";

const DayDisplay = ({ day, isToday }) => {
  return (
    <div className="day__wrapper">
      <H3 addClass="day__dayoftheweek" title={day} />

      {isToday && <H4 addClass="day__today" title="TODAY" />}
    </div>
  );
};

DayDisplay.propTypes = {
  day: PropTypes.string.isRequired,
  isToday: PropTypes.bool
};

export default DayDisplay;
