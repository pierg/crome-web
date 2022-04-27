import React from "react";
import PropTypes from "prop-types";

// components
import Heading3 from "../../../../components/Headings/Heading3.js";
import InfoAreaIconTitleList from "../../../../components/InfoAreas/Misc/InfoAreaIconTitleList.js";

export default function Features3({ heading3, infoAreas }) {
  return (
    <>
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          {heading3 && <Heading3 {...heading3} />}
          <div className="items-center flex flex-wrap -mx-4 md:mt-12">
            {infoAreas.map((prop, key) => (
              <div key={key} className="p-4 relative w-full md:w-6/12">
                <InfoAreaIconTitleList {...prop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Features3.defaultProps = {
  infoAreas: [],
  heading3: null,
};
Features3.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // array of props to pass to the InfoAreaIconTitleList component
  infoAreas: PropTypes.arrayOf(PropTypes.object),
};
