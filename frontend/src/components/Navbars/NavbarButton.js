import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function NavbarButton({
  children,
  breakpoint,
  className,
  ...rest
}) {
  const breakpoints = {
    all: "hidden",
    sm: "sm:hidden",
    md: "md:hidden",
    lg: "lg:hidden",
    xl: "xl:hidden",
  };
  const classes = classnames(
    "ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-blueGray-400 rounded bg-transparent block outline-none focus:outline-none text-blueGray-300",
    breakpoints[breakpoint],
    className
  );
  return (
    <>
      <button {...rest} className={classes}>
        {children}
      </button>
    </>
  );
}

NavbarButton.defaultProps = {
  className: "",
};

NavbarButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // where the button should stop being visible
  breakpoint: PropTypes.oneOf(["all", "sm", "md", "lg", "xl"]),
};
