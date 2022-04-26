import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import CardProfileFullDetails from "../../../../components/Cards/Misc/CardProfileFullDetails.js";

export default function Teams5({ heading2badge, card }) {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {heading2badge && <Heading2Badge {...heading2badge} />}
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full lg:w-10/12">
              <CardProfileFullDetails {...card} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Teams5.defaultProps = {
  card: {},
  heading2badge: null,
};
Teams5.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // props that can be passed to the
  // CardProfileFullDetails component
  card: PropTypes.object,
};
