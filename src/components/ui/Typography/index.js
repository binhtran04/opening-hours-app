import React from "react";
import "./Typography.css";
import classNames from "classnames";
import PropTypes from "prop-types";

const Typography = props => {
  const classes = classNames(props.variant, props.className);
  return <div className={classes}>{props.children}</div>;
};

Typography.defaultProps = {
  variant: "paragraph"
};

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  variant: PropTypes.oneOf(["heading1", "heading3", "heading4", "paragraph"])
};

export default Typography;
