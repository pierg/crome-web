import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";

export default function NavbarListLink({
  children,
  className,
  breakpoint,
  type,
  to,
  ...rest
}) {
  const types = {
    light: "text-white",
    dark: "text-blueGray-800",
  };
  const breakpoints = {
    all: "py-2",
    sm: "py-4 sm:py-2",
    md: "py-4 md:py-2",
    lg: "py-4 lg:py-2",
    xl: "py-4 xl:py-2",
  };
  const classes = classnames(
    "hover:opacity-75 px-3 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out",
    className,
    types[type],
    breakpoints[breakpoint]
  );
  return (
    <>
      {to && (
        <Link {...rest} to={to} className={classes}>
          {children}
        </Link>
      )}
      {to === undefined && (
        <a {...rest} className={classes}>
          {children}
        </a>
      )}
    </>
  );
}

NavbarListLink.defaultProps = {
  className: "",
  type: "light",
};

NavbarListLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // light is for white text
  // dark is for text-blueGray-800
  type: PropTypes.oneOf(["light", "dark"]),
  // where the padding should start being smaller
  breakpoint: PropTypes.oneOf(["all", "sm", "md", "lg", "xl"]),
};
