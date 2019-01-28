import React from "react";
import PropTypes from "prop-types";

const DayDisplay = ({ day, today }) => {
  return (
    <div className="">
      <div>{day}</div>

      {today && <span>TODAY</span>}
    </div>
  );
};

DayDisplay.propTypes = {
  day: PropTypes.string.isRequired,
  today: PropTypes.bool
};

export default DayDisplay;
