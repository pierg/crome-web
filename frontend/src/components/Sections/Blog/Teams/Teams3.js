import React from "react";
import PropTypes from "prop-types";

// components
import Heading3Badge from "../../../../components/Headings/Heading3Badge.js";
import CardProfileFull from "../../../../components/Cards/Blog/CardProfileFull.js";

export default function Teams3({ heading3badge, cards }) {
  return (
    <>
      <div className="py-12">
        {heading3badge && <Heading3Badge {...heading3badge} />}
        <div className="flex flex-wrap -mx-4">
          {cards.map((prop, key) => (
            <div
              key={key}
              className="px-4 relative w-full lg:w-4/12 w-full md:w-6/12"
            >
              <CardProfileFull {...prop} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Teams3.defaultProps = {
  cards: [],
  heading3badge: null,
};
Teams3.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  // an array of props that can be passed to the
  // CardProfileFull component
  cards: PropTypes.arrayOf(PropTypes.object),
};
