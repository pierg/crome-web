import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import CardBlogIllustration from "../../../../components/Cards/Blog/CardBlogIllustration.js";

export default function Blogs5({
  heading2,
  heading2badge,
  heading3,
  heading3badge,
  cards,
}) {
  return (
    <>
      <section className="relative py-12 section">
        <div className="container mx-auto px-4">
          {heading2badge && <Heading2Badge {...heading2badge} />}
          <div className="flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div key={key} className="px-4 relative w-full md:w-4/12">
                <CardBlogIllustration {...prop} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Blogs5.defaultProps = {
  cards: [],
  heading2badge: null,
};
Blogs5.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardBlogIllustration,
  // so please check that one out
  cards: PropTypes.arrayOf(PropTypes.object),
};
