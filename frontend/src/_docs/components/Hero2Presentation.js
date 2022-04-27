import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../components/Headings/Heading2Badge.js";
import InfoAreaIconTitleListColor from "../../components/InfoAreas/Presentation/InfoAreaIconTitleListColor.js";

export default function Hero2({ heading2badge, imageDevices, infoArea }) {
  return (
    <>
      <section className="relative pb-20 bg-blueGray-50">
        <div className="container mx-auto px-4 pt-20">
          <div className="w-full md:w-8/12 mx-auto">
            <Heading2Badge {...heading2badge} />
          </div>
          <div className="items-center flex flex-wrap mt-20">
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4 relative">
              <img
                alt="..."
                className="max-w-full rounded-lg"
                src={imageDevices}
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <InfoAreaIconTitleListColor {...infoArea} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full absolute text-white bottom-0 z-3 opacity-0">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
Hero2.defaultProps = {
  heading2badge: null,
  infoArea: {},
};
Hero2.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  image: PropTypes.string,
  // it is represented by the props
  // that can be passed to the InfoAreaWhiteTitle,
  // so please check that one out
  infoAreas: PropTypes.arrayOf(PropTypes.object),
};
