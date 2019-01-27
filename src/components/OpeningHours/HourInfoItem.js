import React from "react";
import PropTypes from "prop-types";

const HourInfoItem = props => {
  return (
    <div>
      <div>{props.day}</div>

      {props.isToday && <span>TODAY</span>}

      {props.hours.length ? (
        props.hours.map((item, index) => <div key={index}>{item}</div>)
      ) : (
        <div>Closed</div>
      )}
    </div>
  );
};

HourInfoItem.propTypes = {
  day: PropTypes.string.isRequired,
  isToday: PropTypes.bool,
  hours: PropTypes.array.isRequired
};

export default HourInfoItem;
