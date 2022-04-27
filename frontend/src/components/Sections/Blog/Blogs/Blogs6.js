import React from "react";
import PropTypes from "prop-types";

// components
import Heading3 from "../../../../components/Headings/Heading3.js";
import CardBlogFullBg from "../../../../components/Cards/Presentation/CardBlogFullBg.js";

export default function Blogs6({ heading3, cards }) {
  return (
    <>
      <div className="w-full px-4 mx-auto px-4">
        <div className="py-12">
          <div className="mb-12">{heading3 && <Heading3 {...heading3} />}</div>
          <div className="items-center flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div
                key={key}
                className="p-0 pl-0 pr-0 px-4 relative w-full lg:w-3/12"
              >
                <CardBlogFullBg {...prop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Blogs6.defaultProps = {
  cards: [],
  heading3: null,
};
Blogs6.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // an array of props that can be passed to the
  // CardBlogFullBg component
  cards: PropTypes.arrayOf(PropTypes.object),
};
