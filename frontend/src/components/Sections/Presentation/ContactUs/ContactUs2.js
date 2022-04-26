import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import InfoAreaIcon from "../../../../components/InfoAreas/Presentation/InfoAreaIcon.js";
import Button from "../../../../components/Elements/Button.js";

export default function ContactUs2({ image, heading2, button, infoAreas }) {
  return (
    <>
      <div className="overflow-hidden contact-us-3 py-20">
        <div className="p-0 flex items-center relative min-h-400-px h-400-px max-h-999-px mb-50-px">
          <img alt="..." className="w-full" src={image} />
        </div>
        <div className="pt-12 container mx-auto px-4">
          {heading2 && <Heading2 {...heading2} />}
          <div className="flex flex-wrap -mx-4 items-center justify-center -mt-6">
            <Button {...button} />
          </div>
          <div className="flex flex-wrap -mx-4 mt-12">
            {infoAreas.map((prop, key) => {
              return (
                <div
                  key={key}
                  className={classnames(
                    "px-4 relative w-full lg:w-3/12 w-full md:w-6/12 w-6/12",
                    { "border-r": key !== infoAreas.length - 1 }
                  )}
                >
                  <InfoAreaIcon {...prop} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
ContactUs2.defaultProps = {
  button: {},
  infoAreas: [],
  heading2: null,
};
ContactUs2.propTypes = {
  image: PropTypes.string,
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Button,
  // so please check that one out
  button: PropTypes.object,
  // it is an array that has objects which
  // are represented by the props
  // that can be passed to the InfoAreaIcon,
  // so please check that one out
  infoAreas: PropTypes.arrayOf(PropTypes.object),
};
