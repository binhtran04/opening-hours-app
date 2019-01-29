import React from "react";
import PropTypes from "prop-types";
import { getOpeningHours, isToday } from "../../utils/index";
import DayDisplay from "./DayDisplay";
import HoursDisplay from "./HoursDisplay";

const InfoItem = ({ currentDay, nextDay }) => {
  const openingHours = getOpeningHours(currentDay.hours, nextDay.hours);
  const today = isToday(currentDay.dayOfWeek);

  return (
    <div className="content__row">
      <DayDisplay day={currentDay.dayOfWeek} isToday={today} />
      <HoursDisplay hours={openingHours} />
    </div>
  );
};

InfoItem.propTypes = {
  currentDay: PropTypes.object,
  nextDay: PropTypes.object
};

export default InfoItem;
