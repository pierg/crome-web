import React from "react";
import PropTypes from "prop-types";

export default function HeaderBlogPostDark({
  image,
  title,
  date,
  quote,
  quoteSource,
  description,
  icon,
  color,
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
      <div className="p-0 flex items-center relative min-h-screen-75">
        <div
          className="absolute w-full h-full bg-cover bg-50 z-1"
          style={{
            backgroundImage: "url('" + image + "')",
          }}
        ></div>
        <div className="absolute w-full h-full bg-black opacity-40 z-2"></div>
        <div className="container mx-auto px-4 z-3">
          <div className="justify-center text-white flex flex-wrap -mx-4">
            <h1 className="text-4xl font-bold leading-tight mt-0 mb-2 mb-12">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-3 -mt-64 pt-20 relative">
        <div className="justify-center text-white flex flex-wrap -mx-4">
          <div className="bg-blueGray-800 rounded-lg shadow-lg">
            <div className="text-center -mt-6">
              <div
                className={
                  iconBgColor[color] +
                  " rounded-full text-white w-16 h-16 inline-flex items-center justify-center -mt-2"
                }
              >
                <i className={"p-1 text-xl " + icon}></i>
              </div>
            </div>
            <blockquote className="text-xl mx-0 mt-0 mb-4 block text-center mt-6">
              <small className="font-light">{date}</small>
              <footer className="text-base block text-blueGray-500">
                <span className="mr-2">{quote}</span>
                <cite title="Source Title">{quoteSource}</cite>
              </footer>
            </blockquote>
            <p className="mb-0 pt-6 pb-12 px-12 leading-relaxed text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

HeaderBlogPostDark.defaultProps = {
  color: "blueGray",
};

HeaderBlogPostDark.propTypes = {
  // background image source
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  quote: PropTypes.string,
  quoteSource: PropTypes.string,
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
};
