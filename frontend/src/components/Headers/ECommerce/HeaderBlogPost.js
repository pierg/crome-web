import React from "react";
import PropTypes from "prop-types";

// components
import Skew from "../../../components/Skews/Skew.js";

export default function HeaderBlogPost({
  image,
  title,
  description,
  icon,
  color,
  skew,
}) {
  const iconBgColor = {
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
  return (
    <>
      <div className="p-0 flex items-center overflow-hidden relative min-h-screen-75">
        <div
          className="absolute w-full h-full bg-cover bg-50 z-2"
          style={{
            backgroundImage: "url('" + image + "')",
          }}
        ></div>
        <div className="absolute w-full h-full bg-blueGray-900 z-1"></div>
        <div className="container mx-auto px-4 z-3 pt-20 relative w-6/12">
          <div className="justify-center flex flex-wrap -mx-4 text-center">
            <h1 className="text-5xl font-bold text-white leading-tight mt-0 mb-24">
              {title}
            </h1>
          </div>
        </div>
        <div className="w-full absolute text-white bottom-0 z-3">
          <Skew {...skew} />
        </div>
      </div>
      <div className="container mx-auto px-4 z-3 -mt-64 pt-20 relative w-8/12">
        <div className="justify-center flex flex-wrap -mx-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="text-center -mt-6">
              <div
                className={
                  iconBgColor[color] +
                  " rounded-full h-16 w-16 inline-flex items-center justify-center"
                }
              >
                <i className={"text-xl text-white " + icon}></i>
              </div>
            </div>
            <p className="pt-6 pb-12 px-12 text-lg leading-relaxed text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

HeaderBlogPost.defaultProps = {
  color: "blueGray",
  skew: {},
};

HeaderBlogPost.propTypes = {
  // background image source
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  // the background color of the icon
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
  // props to pass to the Skew component
  skew: PropTypes.object,
};
