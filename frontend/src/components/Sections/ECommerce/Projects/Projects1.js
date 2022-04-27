import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import CardInfoIconBg from "../../../../components/Cards/ECommerce/CardInfoIconBg.js";

export default function Projects1({
  heading2,
  heading2badge,
  heading3,
  heading3badge,
  cards,
}) {
  return (
    <>
      <div className="py-12 bg-blueGray-800 project-2">
        <div className="container mx-auto px-4">
          <div className="mb-12">{heading2 && <Heading2 {...heading2} />}</div>
          <div className="flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div key={key} className="px-4 mb-12 relative w-full md:w-4/12">
                <CardInfoIconBg {...prop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Projects1.defaultProps = {
  cards: [],
  heading2: null,
};
Projects1.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // array of props to send to the CardInfoIconBg components
  cards: PropTypes.arrayOf(PropTypes.object),
};
