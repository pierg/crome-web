import React from "react";
import PropTypes from "prop-types";

import Badge from "../../components/Elements/Badge.js";

export default function Progress({ value, text, color }) {
  let progress = {
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
  let percent = {
    blueGray: "text-blueGray-500",
    red: "text-red-500",
    orange: "text-orange-500",
    amber: "text-amber-500",
    emerald: "text-emerald-500",
    teal: "text-teal-500",
    lightBlue: "text-lightBlue-500",
    indigo: "text-indigo-500",
    purple: "text-purple-500",
    pink: "text-pink-500",
  };
  let wrapper = {
    blueGray: "bg-blueGray-200",
    red: "bg-red-200",
    orange: "bg-orange-200",
    amber: "bg-amber-200",
    emerald: "bg-emerald-200",
    teal: "bg-teal-200",
    lightBlue: "bg-lightBlue-200",
    indigo: "bg-indigo-200",
    purple: "bg-purple-200",
    pink: "bg-pink-200",
  };
  return (
    <>
      <div className="relative w-full">
        {text && (
          <div className="flex mb-2 items-center justify-between">
            <div>
              <Badge color={color} round>
                {text}
              </Badge>
            </div>
            <div className="text-right">
              <span
                className={
                  "text-xs font-semibold inline-block " + percent[color]
                }
              >
                {value}%
              </span>
            </div>
          </div>
        )}
        <div
          className={
            "overflow-hidden h-2 text-xs flex rounded " + wrapper[color]
          }
        >
          <div
            style={{ width: value.toString() + "%" }}
            className={
              "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center " +
              progress[color]
            }
          ></div>
        </div>
      </div>
    </>
  );
}
Progress.defaultProps = {
  color: "blueGray",
  value: 0,
};
Progress.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
  color: PropTypes.oneOf([
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
