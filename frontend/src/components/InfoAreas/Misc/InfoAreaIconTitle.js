import React from "react";
import PropTypes from "prop-types";

// components

export default function InfoAreaIconTitle({ icon, title, description }) {
  let newDescription = [];
  if (!Array.isArray(description)) {
    newDescription = [description];
  } else {
    newDescription = description;
  }
  return (
    <>
      <div className="rounded text-left p-6 flex items-start">
        <div className="bg-white rounded-full justify-center items-center inline-flex text-center w-12 h-12 text-blueGray-700">
          <i className={icon}></i>
        </div>
        <div className="ml-6 flex-1">
          <h4 className="text-white text-2xl font-semibold leading-tight mt-2 mb-2">
            {title}
          </h4>
          {newDescription.map((prop, key) => (
            <p key={key} className="text-white opacity-60">
              {prop}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
InfoAreaIconTitle.defaultProps = {
  description: [],
};
InfoAreaIconTitle.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fas fa-heart"
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
