import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import CardInfoIconLeft from "../../../../components/Cards/Misc/CardInfoIconLeft.js";

export default function Features2({ heading2badge, image, cards }) {
  return (
    <>
      <div
        className="relative my-12 bg-blueGray-800 text-center py-20"
        style={{ backgroundImage: "url(" + image + ")" }}
      >
        <div className="container mx-auto px-4">
          {heading2badge && <Heading2Badge {...heading2badge} />}
          <div className="mt-12 flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div key={key} className="p-4 relative w-full lg:w-6/12">
                <CardInfoIconLeft {...prop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Features2.defaultProps = {
  cards: [],
  color: "blueGray",
  heading2badge: null,
};
Features2.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  image: PropTypes.string,
  // array of props to pass to the CardInfoIconLeft component
  cards: PropTypes.arrayOf(PropTypes.object),
};
