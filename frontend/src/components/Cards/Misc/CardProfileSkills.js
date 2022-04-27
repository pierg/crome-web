import React from "react";
import PropTypes from "prop-types";

// components

export default function CardProfileSkills({
  image,
  title,
  description,
  list,
  dropdown,
}) {
  let colorClass = {
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
      <div className="shadow-lg rounded-lg relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
        <img
          className="w-full flex-shrink-0 rounded-lg"
          src={image}
          alt="..."
        />

        <div className="absolute w-full p-4 bottom-0">
          <div className="bg-white rounded p-6 w-full">
            <h3 className="text-2xl font-bold leading-tight mt-0 mb-1">
              {title}
            </h3>
            <p className="text-lg font-normal leading-normal mb-4 text-blueGray-400">
              {description}
            </p>
            <div className="block w-full overflow-x-auto">
              <div className="w-full">
                {list.map((prop, key) => (
                  <div
                    key={key}
                    className="border-t border-blueGray-200 flex items-center justify-between py-2"
                  >
                    <div className="flex items-center">
                      <span
                        className={
                          "inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 text-sm " +
                          colorClass[prop.color]
                        }
                      >
                        <i className={prop.icon}></i>
                      </span>
                      <span className="text-blueGray-500 uppercase text-sm font-bold">
                        {prop.leftText}
                      </span>
                    </div>
                    <span>{prop.rightText}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
CardProfileSkills.defaultProps = {
  list: [],
  dropdown: {},
};

CardProfileSkills.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
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
      leftText: PropTypes.string,
      rightText: PropTypes.string,
    })
  ),
  // props that can be passed to the DropdownButton component
  dropdown: PropTypes.object,
};
