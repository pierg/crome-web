import React from "react";
import PropTypes from "prop-types";

// components

export default function InfoAreaIconTitleListColor({
  icon,
  iconColor,
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
  const listIconBgColor = {
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
  return (
    <>
      <div
        className={
          iconBgColor[iconColor] +
          " p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full"
        }
      >
        <i className="fas fa-rocket text-xl"></i>
      </div>
      <h3 className="text-3xl font-semibold">{title}</h3>
      {newDescription.map((prop, key) => {
        return (
          <p
            className="mt-4 text-lg leading-relaxed text-blueGray-500"
            key={key}
          >
            {prop}
          </p>
        );
      })}

      <ul className="list-none mt-6">
        {list.map((prop, key) => {
          return (
            <li className="py-2" key={key}>
              <div className="flex items-center">
                <div>
                  <span
                    className={
                      listIconBgColor[iconColor] +
                      " text-xs font-semibold inline-block w-8 h-8 flex items-center justify-center uppercase rounded-full mr-3"
                    }
                  >
                    <i className={prop.icon}></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-blueGray-500">{prop.text}</h4>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
InfoAreaIconTitleListColor.defaultProps = {
  iconColor: "blueGray",
  description: [],
  list: [],
};
InfoAreaIconTitleListColor.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  // the background of the icon
  // NOTE: this color will also be added to the list icons of down below
  iconColor: PropTypes.oneOf([
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
