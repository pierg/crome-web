import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";
import Skew from "../../../components/Skews/Skew.js";

export default function HeaderImageTitleButtonCenter({
  image,
  title,
  icon,
  color,
  text,
  skew,
}) {
  return (
    <>
      <section className="flex relative items-center p-0 min-h-screen-75 z-0">
        <div className="absolute w-full h-full block bg-black opacity-50 z-1 left-0 top-0"></div>
        <div
          className="bg-blueGray-800 w-full h-full absolute bg-cover bg-50"
          style={{
            backgroundImage: "url('" + image + "')",
          }}
        ></div>
        <div className="relative h-full text-center text-white container mx-auto px-4 z-2 mb-24">
          <div className="justify-center flex flex-wrap -mx-4">
            <div className="px-12 px-4 relative w-full md:w-8/12">
              <h1 className="text-5xl font-bold leading-tight mt-0 mb-2">
                {title}
              </h1>
              <p className="text-xl leading-relaxed opacity-75 mt-1 mb-4">
                {text}
              </p>
              <Button color={color}>
                <i className={icon + " mr-1"}></i> Start shopping
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full bottom-0 absolute z-2">
          <Skew {...skew} />
        </div>
      </section>
    </>
  );
}

HeaderImageTitleButtonCenter.defaultProps = {
  color: "orange",
  skew: {},
};

HeaderImageTitleButtonCenter.propTypes = {
  // background image source
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  // props to pass to the Skew component
  skew: PropTypes.object,
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
