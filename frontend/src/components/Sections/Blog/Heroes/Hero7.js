import React from "react";
import PropTypes from "prop-types";

// components
import Heading3 from "../../../../components/Headings/Heading3.js";
import PreFooterSmall from "../../../../components/PreFooters/PreFooterSmall.js";

export default function Hero7({ heading3, prefooter }) {
  return (
    <div className="py-12">
      {heading3 && <Heading3 {...heading3} />}
      <PreFooterSmall {...prefooter} />
    </div>
  );
}

Hero7.defaultProps = {
  prefooter: {},
  heading3: null,
};
Hero7.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // props that can be passed to the PreFooterSmall component
  prefooter: PropTypes.object,
};
