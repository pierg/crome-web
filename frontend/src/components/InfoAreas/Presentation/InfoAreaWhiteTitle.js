import React from "react";
import PropTypes from "prop-types";

// components

export default function InfoAreaWhiteTitle({ icon, type, title, description }) {
  let iconColors = "text-blueGray-900 bg-white";
  let titleColor = "text-white";
  let descriptionColor = "text-blueGray-500";
  if (type === "dark") {
    iconColors = "text-white bg-blueGray-900";
    titleColor = "text-blueGray-700";
    descriptionColor = "text-white opacity-75";
  }
  return (
    <>
      <div
        className={
          iconColors +
          " p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center"
        }
      >
        <i className={icon + " text-xl"}></i>
      </div>
      <h6 className={titleColor + " text-xl mt-5 font-semibold"}>{title}</h6>
      <p className={descriptionColor + " mt-2 mb-4"}>{description}</p>
    </>
  );
}
InfoAreaWhiteTitle.defaultProps = {
  type: "light",
};
InfoAreaWhiteTitle.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  // choose the dark type when using this component on a lighter background
  // choose the light type when using this component on a darker background
  type: PropTypes.oneOf(["light", "dark"]),
  title: PropTypes.string,
  description: PropTypes.string,
};
