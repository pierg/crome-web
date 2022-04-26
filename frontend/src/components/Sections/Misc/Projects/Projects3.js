import React from "react";
import PropTypes from "prop-types";

// components
import Heading3 from "../../../../components/Headings/Heading3.js";
import CardProjectImageFullBg from "../../../../components/Cards/Misc/CardProjectImageFullBg.js";

export default function Projects3({ heading3, cards }) {
  return (
    <>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {heading3 && <Heading3 {...heading3} />}
          <div className="flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div key={key} className="px-4 relative w-full md:w-4/12">
                <CardProjectImageFullBg {...prop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Projects3.defaultProps = {
  cards: [],
  heading3: null,
};
Projects3.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // array of props to pass to the CardProjectImageFullBg component
  cards: PropTypes.arrayOf(PropTypes.object),
};
