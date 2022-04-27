import React from "react";
import PropTypes from "prop-types";

export default function Heading3({
  subtitle,
  title,
  description,
  color,
  alignment,
  whiteContent,
}) {
  const colors = {
    light: "text-blueGray-200",
    dark: "text-blueGray-800",
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
  const alignmentsRow = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };
  const alignmentsText = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <>
      <div className={"mb-12 flex flex-wrap -mx-4 " + alignmentsRow[alignment]}>
        <div
          className={
            "px-4 relative w-full lg:w-8/12 " + alignmentsText[alignment]
          }
        >
          {subtitle && (
            <h6 className={"mb-2 font-bold uppercase " + colors[color]}>
              {subtitle}
            </h6>
          )}
          {title && (
            <h3
              className={
                "text-3xl font-bold mt-3 mb-1 " +
                (whiteContent ? "text-white" : "text-blueGray-700")
              }
            >
              {title}
            </h3>
          )}
          {description && (
            <p
              className={
                "mt-2 mb-4 text-xl leading-relaxed " +
                (whiteContent ? "text-white opacity-75" : "text-blueGray-400")
              }
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

Heading3.defaultProps = {
  color: "blueGray",
  alignment: "left",
  whiteContent: false,
};

Heading3.propTypes = {
  // use this to make the title and description
  // change colors from blueGray-800 and blueGray-500
  // to white and blueGray-100
  whiteContent: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
  // this is the color to be added to the subtitle
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
