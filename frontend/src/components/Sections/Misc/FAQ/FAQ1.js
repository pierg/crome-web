import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import Accordion from "../../../../components/Accordions/Accordion.js";

export default function FAQ1({ heading2, accordion }) {
  return (
    <>
      <div>
        <div className="container mx-auto px-4">
          {heading2 && <Heading2 {...heading2} />}
          <div className="flex flex-wrap -mx-4">
            <div className="py-12 px-4 relative w-full">
              <div className="my-12">
                <Accordion {...accordion} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

FAQ1.defaultProps = {
  accordion: {},
  heading2: null,
};
FAQ1.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // props to pass to the Accordion component
  accordion: PropTypes.object,
};
