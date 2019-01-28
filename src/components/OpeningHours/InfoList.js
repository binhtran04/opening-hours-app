import React from "react";
import PropTypes from "prop-types";

import InfoItem from "./InfoItem";

const InfoList = props => {
  const renderOpeningHours = weeklyOpeningHours =>
    weeklyOpeningHours.map((item, index, array) => {
      // if current item is the last, next item will be the first
      // e.g. sunday => monday
      const nextIndex = index + 1 === array.length ? 0 : index + 1;
      const nextItem = array[nextIndex];

      return (
        <InfoItem key={item.dayOfWeek} currentDay={item} nextDay={nextItem} />
      );
    });

  return <div>{renderOpeningHours(props.weeklyOpeningHours)}</div>;
};

InfoList.propTypes = {
  weeklyOpeningHours: PropTypes.array
};

export default InfoList;
