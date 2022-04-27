import React from "react";
import PropTypes from "prop-types";
// sections

// components
import Heading3 from "../../../../components/Headings/Heading3.js";
import CardBlogFullBg from "../../../../components/Cards/Presentation/CardBlogFullBg.js";

export default function Blogs1({ heading3, cards }) {
  return (
    <>
      <div className="py-12">
        {heading3 && <Heading3 {...heading3} />}
        <div className="items-center flex flex-wrap -mx-4">
          {cards.map((prop, key) => {
            return (
              <div className="px-4 relative w-full lg:w-3/12" key={key}>
                <CardBlogFullBg {...prop} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

Blogs1.defaultProps = {
  cards: [],
  heading3: null,
};
Blogs1.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // an array of props that can be passed to the
  // CardBlogFullBg component
  cards: PropTypes.arrayOf(PropTypes.object),
};
