import React from "react";
import PropTypes from "prop-types";

export default function Alert({ color, children }) {
  const alertColors = {
    light: "text-blueGray-800 bg-blueGray-200",
    dark: "text-blueGray-200 bg-blueGray-800",
    blueGray: "text-white bg-blueGray-500",
    red: "text-white bg-red-500",
    orange: "text-white bg-orange-500",
    amber: "text-white bg-amber-500",
    emerald: "text-white bg-emerald-500",
    teal: "text-white bg-teal-500",
    lightBlue: "text-white bg-lightBlue-500",
    indigo: "text-white bg-indigo-500",
    purple: "text-white bg-purple-500",
    pink: "text-white bg-pink-500",
  };
  return (
    <>
      <div
        className={
          "px-6 py-4 border-0 rounded relative mb-4 " + alertColors[color]
        }
      >
        {children}
      </div>
    </>
  );
}
Alert.defaultProps = {
  color: "blueGray",
};
Alert.propTypes = {
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
