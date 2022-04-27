import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../../../components/Headings/Heading3.js"
import "../../../../components/PreFooters/PreFooterSmall.js"
import Heading3
import PreFooterSmall

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
