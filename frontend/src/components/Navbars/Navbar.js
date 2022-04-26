import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function Navbar({ children, color, className, ...rest }) {
  const colors = {
    light: "bg-blueGray-200",
    dark: "bg-blueGray-800",
    transparent: "bg-transparent",
    white: "bg-white",
    blueGray: "bg-blueGray-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    amber: "bg-amber-500",
    emerald: "bg-emerald-500",
    teal: "bg-teal-500",
    lightBlue: "bg-lightBlue-500",
    indigo: "bg-indigo-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
  };
  return (
    <>
      <nav
        {...rest}
        className={classnames(
          "w-full flex flex-wrap items-center justify-between px-2 py-3 mb-3",
          colors[color],
          className
        )}
      >
        {children}
      </nav>
    </>
  );
}

Navbar.defaultProps = {
  color: "white",
  className: "",
};

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "light",
    "dark",
    "transparent",
    "white",
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
};
