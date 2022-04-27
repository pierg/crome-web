import React from "react";
import PropTypes from "prop-types";

// components
import ImagesOverlap from "../../../components/Images/ImagesOverlap.js";

export default function CardProjectTeam({
  image,
  title,
  description,
  icon,
  imagesOverlap,
}) {
  const colors = {
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
  return (
    <>
      <div className="mb-6 text-center shadow-lg rounded-lg relative flex flex-col bg-white p-6 w-full mb-6">
        <div className="flex items-center justify-between pb-4 pt-2 border-b border-blueGray-300">
          <div className="float-left ml-1">
            <i
              className={
                "opacity-75 inline mr-2 " + icon.icon + " " + colors[icon.color]
              }
            ></i>
            <p className="inline text-lg">{icon.text}</p>
          </div>
        </div>
        <div className="py-6 flex-auto">
          <div className="shadow-lg mt-6 rounded-full my-6 mx-auto w-100-px p-6 bg-white">
            <img src={image} alt="..." className="mx-auto" />
          </div>

          <h4 className="text-2xl font-bold leading-tight mt-0 mb-2">
            {title}
          </h4>
          <p className="text-blueGray-500 px-8">{description}</p>
          <div className="flex justify-center mt-8 mb-2 text-blueGray-400">
            <ImagesOverlap {...imagesOverlap} />
          </div>
        </div>
      </div>
    </>
  );
}
CardProjectTeam.defaultProps = {
  icon: {},
  dropdown: {},
  imagesOverlap: {},
};
CardProjectTeam.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the ImagesOverlap component
  imagesOverlap: PropTypes.object,
  icon: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
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
  }),
};
