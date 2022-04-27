import React from "react";
import PropTypes from "prop-types";

// components
import Heading3 from "../../../../components/Headings/Heading3.js";
import InfoAreaUser from "../../../../components/InfoAreas/Presentation/InfoAreaUser.js";

export default function Teams1({ heading3, infoAreas }) {
  return (
    <>
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="mb-24">
            {heading3 && (
              <div className="pt-6">
                <Heading3 {...heading3} />
              </div>
            )}
          </div>
          <div className="flex flex-wrap">
            {infoAreas.map((prop, key) => {
              return (
                <div
                  className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
                  key={key}
                >
                  <InfoAreaUser {...prop} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

Teams1.defaultProps = {
  heading3: null,
  infoAreas: [],
};
Teams1.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // it is represented by the props
  // that can be passed to the InfoAreaUser,
  // so please check that one out
  infoAreas: PropTypes.arrayOf(PropTypes.object),
};
