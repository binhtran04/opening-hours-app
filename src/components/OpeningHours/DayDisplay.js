import React from "react";
import PropTypes from "prop-types";
import Typography from "../ui/Typography";

const DayDisplay = ({ day, isToday }) => {
  return (
    <div className="day__wrapper">
      <Typography variant="heading3" className="day__dayoftheweek">
        {day}
      </Typography>

      {isToday && (
        <Typography variant="heading4" className="day__today">
          TODAY
        </Typography>
      )}
    </div>
  );
};

DayDisplay.propTypes = {
  day: PropTypes.string.isRequired,
  isToday: PropTypes.bool
};

export default DayDisplay;
