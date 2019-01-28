import React from "react";
import PropTypes from "prop-types";
import { geteOpeningHours, isToday } from "../../utils/index";
import DayDisplay from "./DayDisplay";
import HoursDisplay from "./HoursDisplay";

const InfoItem = ({ currentDay, nextDay }) => {
  const openingHours = geteOpeningHours(currentDay.hours, nextDay.hours);
  const today = isToday(currentDay.dayOfWeek);

  console.log(openingHours, today);
  console.log("=======");

  return (
    <div>
      <DayDisplay day={currentDay.dayOfWeek} today={today} />
      <HoursDisplay hours={openingHours} />
    </div>
  );
};

/* {props.hours.length ? (
  props.hours.map((item, index) => <div key={index}>{item}</div>)
) : (
  <div>Closed</div>
)} */
InfoItem.propTypes = {
  currentDay: PropTypes.object,
  nextDay: PropTypes.object
};

export default InfoItem;