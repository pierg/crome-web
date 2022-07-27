import React from "react";
import PropTypes from "prop-types";

export default function Badge({ round, color, children, ...rest }) {
  const colors = {
    light: "text-blueGray-500 bg-blueGray-100",
    dark: "text-blueGray-800 bg-blueGray-400",
    blueGray: "text-blueGray-500 bg-blueGray-200",
    red: "text-red-500 bg-red-200",
    orange: "text-orange-500 bg-orange-200",
    amber: "text-amber-500 bg-amber-200",
    emerald: "text-emerald-500 bg-emerald-200",
    teal: "text-teal-500 bg-teal-200",
    lightBlue: "text-lightBlue-500 bg-lightBlue-200",
    indigo: "text-indigo-500 bg-indigo-200",
    purple: "text-purple-500 bg-purple-200",
    pink: "text-pink-500 bg-pink-200",
  };
  let className =
    colors[color] +
    " text-xs font-bold inline-block py-1 uppercase uppercase last:mr-0 mr-1 leading-tight " +
    (round ? "rounded-full px-3" : "rounded px-2");
  return (
    <>
      <span {...rest} className={className}>
        {children}
      </span>
    </>
  );
}
Badge.defaultProps = {
  round: false,
  color: "blueGray",
};
Badge.propTypes = {
  round: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "light",
    "dark",
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
