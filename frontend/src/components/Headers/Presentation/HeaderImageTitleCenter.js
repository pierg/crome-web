import React from "react";
import PropTypes from "prop-types";

// components
import Skew from "../../../components/Skews/Skew.js";

export default function HeaderImageTitleCenter({
  bgImage,
  title,
  description,
  skewColor,
}) {
  return (
    <>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('" + bgImage + "')",
          }}
        >
          <span className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center">
              <div className="">
                <h1 className="text-white font-semibold text-5xl">{title}</h1>
                <p className="mt-4 text-lg text-blueGray-300">{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute top-auto bottom-0">
          <Skew color={skewColor} />
        </div>
      </div>
    </>
  );
}

HeaderImageTitleCenter.defaultProps = {
  skewColor: "blueGray",
};

HeaderImageTitleCenter.propTypes = {
  bgImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skewColor: PropTypes.oneOf([
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
