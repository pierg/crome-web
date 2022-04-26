import React from "react";
import PropTypes from "prop-types";

// components
import Heading3 from "../../../../components/Headings/Heading3.js";
import CardProfileActions from "../../../../components/Cards/Misc/CardProfileActions.js";
import CardProfileReviews from "../../../../components/Cards/Misc/CardProfileReviews.js";

export default function Teams6({ heading3, cards }) {
  return (
    <>
      <div className="my-20">
        <div className="container mx-auto px-4">
          {heading3 && <Heading3 {...heading3} />}
          <div className="flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div
                key={key}
                className={
                  "px-4 relative w-full md:w-6/12 lg:w-4/12 my-4" +
                  (key % 3 === 1 ? " mt-12" : "")
                }
              >
                {prop && prop.cardprofilereviews && (
                  <CardProfileReviews key={key} {...prop.cardprofilereviews} />
                )}
                {prop && prop.cardprofileactions && (
                  <CardProfileActions key={key} {...prop.cardprofileactions} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Teams6.defaultProps = {
  cards: [],
  heading3: null,
};
Teams6.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  cards: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // props that can be passed to the
      // the CardProfileActions component
      PropTypes.shape({
        cardprofileactions: PropTypes.object,
      }),
      // props that can be passed to the
      // CardProfileReviews component
      PropTypes.shape({
        cardprofilereviews: PropTypes.object,
      }),
    ])
  ),
};
