import React from "react";
import PropTypes from "prop-types";

// components
import Heading3Badge from "../../../../components/Headings/Heading3Badge.js";
import CardInfoIconLeft from "../../../../components/Cards/Misc/CardInfoIconLeft.js";

export default function Features4({ heading3badge, image, cards }) {
  return (
    <>
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          {heading3badge && <Heading3Badge {...heading3badge} />}
          <div className="items-center flex flex-wrap -mx-4">
            <div className="px-4 relative w-full lg:w-6/12">
              {cards.map((prop, key) => (
                <CardInfoIconLeft key={key} {...prop} />
              ))}
            </div>

            <div className="md:mx-auto px-4 relative w-full lg:w-6/12 w-10/12">
              <img alt="..." src={image} className="lg:ml-12 w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Features4.defaultProps = {
  cards: [],
  heading3badge: null,
};
Features4.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  image: PropTypes.string,
  // array of props to pass to the CardInfoIconLeft component
  cards: PropTypes.arrayOf(PropTypes.object),
};
