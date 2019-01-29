import React from "react";
import "./H1.css";
import classNames from "classnames";

const H1 = props => {
  const classes = classNames("H1", props.className);
  return <div className={classes}>{props.children}</div>;
};

export default H1;
