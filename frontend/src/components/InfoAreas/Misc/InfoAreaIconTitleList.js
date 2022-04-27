import React from "react";
import PropTypes from "prop-types";

// components

export default function InfoAreaIconTitleList({
  icon,
  color,
  title,
  description,
  list,
}) {
  let newDescription = [];
  if (!Array.isArray(description)) {
    newDescription = [description];
  } else {
    newDescription = description;
  }
  const iconBgColor = {
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
      <div className="rounded text-left pb-6 px-12 mx-12 flex items-start">
        <div className="px-6 flex-1">
          <div
            className={
              iconBgColor[color] +
              " shadow-lg rounded rounded-full justify-center items-center text-left mx-auto mb-6 inline-flex w-12 h-12 text-xl"
            }
          >
            <i className={icon}></i>
          </div>
          <h4 className="text-2xl font-semibold leading-tight mt-0 mb-2">
            {title}
          </h4>
          {newDescription.map((prop, key) => {
            return (
              <p className="mb-4 text-blueGray-500" key={key}>
                {prop}
              </p>
            );
          })}
          <ul className="list-none">
            {list.map((prop, key) => (
              <li key={key} className="py-2">
                <div className="flex items-center">
                  <i
                    className={"mr-2 text-sm text-blueGray-500 " + prop.icon}
                  ></i>
                  <p className="mb-0">{prop.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
InfoAreaIconTitleList.defaultProps = {
  description: [],
};
InfoAreaIconTitleList.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fas fa-heart"
  icon: PropTypes.string.isRequired,
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
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      // icon name to be added on the <i></i> tag, for example "fa fa-heart"
      icon: PropTypes.string.isRequired,
      // text to go with the icon
      text: PropTypes.string.isRequired,
    })
  ),
};
