import React from "react";
import PropTypes from "prop-types";

import HourInfoItem from "./HourInfoItem";

const HourInfoList = props => {
  const renderOpeningHours = openingHours =>
    openingHours.map(item => <HourInfoItem key={item.day} {...item} />);

  return <div>{renderOpeningHours(props.openingHours)}</div>;
};

HourInfoList.propTypes = {
  openingHours: PropTypes.array
};

export default HourInfoList;
