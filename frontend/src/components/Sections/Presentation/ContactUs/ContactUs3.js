import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import CardContactUsIcons from "../../../../components/Cards/Presentation/CardContactUsIcons.js";
import Map from "../../../../components/Maps/Map.js";

export default function ContactUs3({ heading2badge, card, map, skew }) {
  return (
    <>
      <div className="bg-blueGray-100">
        <div className="w-full px-16 mx-auto px-4 mt-12 mb-6 pt-16">
          {heading2badge && <Heading2Badge {...heading2badge} />}
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="mx-auto px-4 relative w-full md:w-6/12">
            <CardContactUsIcons {...card} />
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden -mt-220-px">
        <Map {...map} />
        <div className="absolute w-full top-0"></div>
      </div>
    </>
  );
}
ContactUs3.defaultProps = {
  heading2badge: null,
  infoAreas: [],
  map: {},
};
ContactUs3.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Button,
  // so please check that one out
  badge: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardContactUsIcons,
  // so please check that one out
  card: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Map,
  // so please check that one out
  map: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Skew,
  // so please check that one out
  skew: PropTypes.object,
};
