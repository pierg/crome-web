import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import CardBlogandAuthor from "../../../../components/Cards/Misc/CardBlogandAuthor.js";

export default function Blogs8({ heading2, cards }) {
  return (
    <>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">{heading2 && <Heading2 {...heading2} />}</div>
          <div className="flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div
                key={key}
                className="px-4 relative w-full lg:w-4/12 w-full md:w-6/12"
              >
                <CardBlogandAuthor {...prop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Blogs8.defaultProps = {
  cards: [],
  heading2: null,
};
Blogs8.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // array of props to pass to the CardBlogandAuthor component
  cards: PropTypes.arrayOf(PropTypes.object),
};
