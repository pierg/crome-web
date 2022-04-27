import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";
import Skew from "../../../components/Skews/Skew.js";

export default function HeaderVideoTitle({
  video,
  title,
  subtitle,
  buttonText,
  buttonIcon,
  buttonColor,
  skew,
}) {
  return (
    <>
      <div className="p-0 flex items-center overflow-hidden relative bg-black min-h-screen-75">
        <div className="absolute w-full bg-indigo-500 h-full z-1 opacity-30 top-0 left-0"></div>
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          className="absolute min-w-full max-w-none min-h-full z-0 transform -translate-x-1/2 -translate-y-1/2 top-7/20 left-1/2"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="container mx-auto px-4">
          <div className="relative text-center flex flex-wrap -mx-4 z-1">
            <div className="mx-auto px-4 relative w-full lg:w-8/12">
              <h1 className="text-4xl font-semibold leading-tight text-white">
                {title}
              </h1>
              <h4 className="mt-2 text-lg text-white opacity-75 mb-8">
                {subtitle}
              </h4>
              <Button color={buttonColor} size="lg">
                <i className={buttonIcon + " mr-2"}></i>
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full absolute text-white bottom-0 z-1">
          <Skew {...skew} />
        </div>
      </div>
    </>
  );
}

HeaderVideoTitle.defaultProps = {
  skew: {},
};

HeaderVideoTitle.propTypes = {
  video: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string,
  buttonColor: PropTypes.oneOf([
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
  // props to pass to the Skew component
  skew: PropTypes.object,
};
