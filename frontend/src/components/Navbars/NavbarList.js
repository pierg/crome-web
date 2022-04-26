import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function Navbar({ children, breakpoint, className, ...rest }) {
  const breakpoints = {
    all: "items-center flex-row",
    sm: "flex flex-col sm:items-center sm:flex-row",
    md: "flex flex-col md:items-center md:flex-row",
    lg: "flex flex-col lg:items-center lg:flex-row",
    xl: "flex flex-col xl:items-center xl:flex-row",
  };
  const classes = classnames(
    "flex flex-wrap list-none pl-0 mb-0 list-none pl-0 mb-0",
    breakpoints[breakpoint],
    className
  );
  return (
    <>
      <ul {...rest} className={classes}>
        {children}
      </ul>
    </>
  );
}

Navbar.defaultProps = {
  className: "",
};

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // where the list should be inline alligned
  breakpoint: PropTypes.oneOf(["all", "sm", "md", "lg", "xl"]),
};
