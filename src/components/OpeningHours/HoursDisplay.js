import React from "react";
import PropTypes from "prop-types";
import { formatUnixTime } from "../../utils";
import Paragraph from "../ui/Paragraph";

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

  return (
    <Paragraph
      addClass={`hour ${hoursDisplayText === "Closed" ? "closed" : ""}`}
      content={hoursDisplayText}
    />
  );
};

HoursDisplay.propTypes = {
  hours: PropTypes.array.isRequired
};

export default HoursDisplay;
