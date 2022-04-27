import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import CardInfoWithButton from "../../../../components/Cards/Misc/CardInfoWithButton.js";

export default function Features5({ heading2badge, cards }) {
  return (
    <>
      <div className="relative bg-blueGray-100 py-20">
        <div className="container mx-auto px-4">
          {heading2badge && <Heading2Badge {...heading2badge} />}
          <div className="items-center mt-12 flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div
                key={key}
                className="text-left px-4 relative w-full lg:w-4/12"
              >
                <CardInfoWithButton {...prop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Features5.defaultProps = {
  cards: [],
  heading2badge: null,
};
Features5.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // array of props to pass to the CardInfoWithButton component
  cards: PropTypes.arrayOf(PropTypes.object),
};
