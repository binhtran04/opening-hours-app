import React from "react";
import PropTypes from "prop-types";
import { formatUnixTime } from "../../utils";
import Typography from "../ui/Typography";
import classNames from "classnames";

const HoursDisplay = ({ hours }) => {
  const generateHoursDisplayText = formattedHours => {
    if (!formattedHours.length) {
      return "Closed";
    }

    let hourDisplayText = "";
    formattedHours.forEach((item, index) => {
      if (index === 0) {
        hourDisplayText += item;
        return;
      }
      if (index % 2 === 0) {
        hourDisplayText += `, ${item}`;
      } else {
        hourDisplayText += ` - ${item}`;
      }
    });

    return hourDisplayText;
  };

  const formattedHours = hours.map(h => formatUnixTime(h.value));
  const hoursDisplayText = generateHoursDisplayText(formattedHours);

  const hourClass = classNames({
    hour: true,
    closed: hoursDisplayText === "Closed"
  });
  return (
    <Typography variant="paragraph" className={hourClass}>
      {hoursDisplayText}
    </Typography>
  );
};

HoursDisplay.propTypes = {
  hours: PropTypes.array.isRequired
};

export default HoursDisplay;
