import React from "react";
import PropTypes from "prop-types";

// components
import CardSocialMedia from "../../components/Cards/Blog/CardSocialMedia.js";

export default function PreFooterSmall({ cards }) {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="justify-between items-center flex flex-wrap -mx-4">
          {cards.map((prop, key) => (
            <div
              key={key}
              className="text-center px-4 relative w-full lg:w-3/12 w-full md:w-6/12"
            >
              <CardSocialMedia {...prop} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

PreFooterSmall.defaultProps = {
  cards: [],
};

PreFooterSmall.propTypes = {
  // aray of props that can be passed to the CardSocialMedia component
  cards: PropTypes.arrayOf(PropTypes.object),
};
