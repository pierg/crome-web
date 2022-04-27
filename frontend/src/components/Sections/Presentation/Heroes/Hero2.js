import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import Skew from "../../../../components/Skews/Skew.js";
import InfoAreaIconTitleListColor from "../../../../components/InfoAreas/Presentation/InfoAreaIconTitleListColor.js";

export default function Hero2({ heading2badge, image, infoArea }) {
  return (
    <>
      <section className="relative pb-20">
        <Skew />
        <div className="container mx-auto px-4 pt-20 bg-white">
          <Heading2Badge {...heading2badge} />
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src={image}
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <InfoAreaIconTitleListColor {...infoArea} />
              </div>
            </div>
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
