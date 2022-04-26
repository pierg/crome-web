import React from "react";
import PropTypes from "prop-types";

// components
import Skew from "../../../components/Skews/Skew.js";

export default function HeaderImageTitleSmallCenter({
  title,
  subtitle,
  image,
  skewColor,
}) {
  return (
    <>
      <section className="flex relative items-center p-0 min-h-screen-60 max-h-440-px">
        <div className="absolute w-full h-full block bg-blueGray-900 opacity-75 z-1 left-0 top-0"></div>
        <div
          className="bg-blueGray-800 w-full h-full absolute bg-cover bg-50 z-0"
          style={{
            backgroundImage: "url('" + image + "')",
          }}
        ></div>
        <div className="relative h-full text-center text-white container mx-auto px-4 z-3 mb-16">
          <div className="justify-center flex flex-wrap -mx-4">
            <div className="px-12 px-4 relative w-full lg:w-6/12 w-full md:w-8/12">
              <h1 className="text-4xl font-bold leading-tight">{title}</h1>
              <p className="text-lg opacity-75 pt-2">{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="w-full bottom-0 absolute z-2">
          <Skew color={skewColor} />
        </div>
      </section>
    </>
  );
}

HeaderImageTitleSmallCenter.defaultProps = {
  skewColor: "white",
};

HeaderImageTitleSmallCenter.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  skewColor: PropTypes.oneOf(["white", "blueGray", "dark"]),
};
