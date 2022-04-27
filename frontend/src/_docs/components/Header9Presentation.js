import React from "react";
import PropTypes from "prop-types";

// components

export default function Header9({
  image,
  title,
  subtitle,
  description,
  icon,
  color,
}) {
  return (
    <>
      <div className="p-0 flex items-center overflow-hidden relative min-h-screen-75">
        <div
          className="absolute w-full bg-cover h-full z-2"
          style={{
            backgroundImage: "url('" + image + "')",
          }}
        ></div>
        <div className="absolute w-full h-full bg-blueGray-900 z-1"></div>
        <div className="container mx-auto px-4 z-3 pt-12 relative w-6/12">
          <div className="justify-center flex flex-wrap -mx-4 text-center">
            <h1 className="text-5xl font-bold text-white leading-tight mt-0">
              {title}
            </h1>
            <h2 className="text-2xl text-white mb-24">{subtitle}</h2>
          </div>
        </div>
        <div className="w-full absolute text-white bottom-0 z-3">
          <div
            className="w-full pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-50 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-blueGray-50">
        <div className="container mx-auto px-4 z-3 -mt-64 pt-20 relative w-8/12">
          <div className="justify-center flex flex-wrap -mx-4">
            <div className="bg-white rounded-xl shadow-lg py-8">
              <div className="flex flex-wrap">
                <div className="px-6 relative w-full lg:w-4/12 w-full md:w-6/12 w-6/12 border-r">
                  <div className="text-center py-2">
                    <h4 className="text-5xl font-extrabold leading-tight mt-0 mb-0">
                      300+
                    </h4>
                    <h5 className="text-xl font-semibold mt-2 mb-1">
                      Elements
                    </h5>
                    <p className="text-blueGray-500 text-md">
                      From buttons, to inputs, navbars, alerts or cards, you are
                      covered
                    </p>
                  </div>
                </div>

                <div className="px-6 relative w-full lg:w-4/12 w-full md:w-6/12 w-6/12 border-r">
                  <div className="text-center py-2">
                    <h4 className="text-5xl font-extrabold leading-tight mt-0 mb-0">
                      74+
                    </h4>
                    <h5 className="text-xl font-semibold mt-2 mb-1">
                      Design Blocks
                    </h5>
                    <p className="text-blueGray-500 text-md">
                      Mix the sections, change the colors and unleash your
                      creativity
                    </p>
                  </div>
                </div>

                <div className="px-6 relative w-full lg:w-4/12 w-full md:w-6/12 w-6/12">
                  <div className="text-center py-2">
                    <h4 className="text-5xl font-extrabold leading-tight mt-0 mb-0">
                      30+
                    </h4>
                    <h5 className="text-xl font-semibold mt-2 mb-1">
                      Coded Pages
                    </h5>
                    <p className="text-blueGray-500 text-md">
                      Save 3-4 weeks of work when you use our pre-made pages for
                      your website
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Header9.defaultProps = {
  color: "gray",
  skew: {},
};

Header9.propTypes = {
  // background image source
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  // the background color of the icon
  color: PropTypes.oneOf([
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink",
  ]),
  // props to pass to the Skew component
  skew: PropTypes.object,
};
