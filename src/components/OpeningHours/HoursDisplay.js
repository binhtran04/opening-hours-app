import React from "react";
import PropTypes from "prop-types";
import { formatUnixTime, generateHoursDisplayText } from "../../utils";

const HoursDisplay = ({ hours }) => {
  const formattedHours = hours.map(h => formatUnixTime(h.value));
  console.log(formattedHours);
  const hoursDisplayText = generateHoursDisplayText(formattedHours);

  return <div className="hours">{hoursDisplayText}</div>;
};

HoursDisplay.propTypes = {
  hours: PropTypes.array.isRequired
};

export default HoursDisplay;
