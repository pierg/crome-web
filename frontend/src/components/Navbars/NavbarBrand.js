/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";

export default function NavbarBrand({ type, className, to, ...rest }) {
  const types = {
    light: "text-white",
    dark: "text-blueGray-800",
  };
  const classes = classnames(
    "text-sm font-bold leading-relaxed inline-flex items-center mr-4 py-2 whitespace-nowrap uppercase",
    className,
    types[type]
  );
  return (
    <>
      {to && <Link {...rest} className={classes} to={to} />}
      {to === undefined && <a {...rest} className={classes} />}
    </>
  );
}

NavbarBrand.defaultProps = {
  type: "light",
  className: "",
};

// you can pass any other props that you might pass to
// the <a> tag or to the <Link> component from react-router-dom
NavbarBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // light is for white text
  // dark is for text-blueGray-800
  type: PropTypes.oneOf(["light", "dark"]),
};
