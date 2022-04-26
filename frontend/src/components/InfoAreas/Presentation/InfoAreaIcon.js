import React from "react";
import PropTypes from "prop-types";

export default function InfoAreaIcon({ icon, color, title, description }) {
  const colors = {
    light: "text-blueGray-800 bg-blueGray-100",
    dark: "text-blueGray-100 bg-blueGray-800",
    blueGray: "text-white bg-blueGray-200",
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
  let newDescription = [];
  if (!Array.isArray(description)) {
    newDescription = [description];
  } else {
    newDescription = description;
  }
  return (
    <>
      <div className="text-center py-6">
        <div
          className={
            colors[color] +
            " shadow-lg rounded rounded-full justify-center items-center inline-flex text-center p-2 mb-6 w-16 h-16"
          }
        >
          <i className={icon + " text-lg"} />
        </div>
        <h4 className="text-xl font-bold leading-tight mt-0 mb-2">{title}</h4>
        <div className="mb-4">
          {newDescription.map((prop, key) => {
            return (
              <p className="text-blueGray-500" key={key}>
                {prop}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

InfoAreaIcon.defaultProps = {
  color: "blueGray",
};
InfoAreaIcon.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
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
