import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../../../components/Cards/Blog/CardBlogImageHorizontal.js"
import "../../../../components/Headings/Heading3Badge.js"
import CardBlogImageHorizontal
import Heading3Badge

export default function Blogs3({ heading3badge, cards }) {
  return (
    <>
      <div className="py-12 blog-3">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            {heading3badge && <Heading3Badge {...heading3badge} />}
          </div>
          {cards.map((prop, key) => {
            return <CardBlogImageHorizontal {...prop} key={key} />;
          })}
        </div>
      </div>
    </>
  );
}
Blogs3.defaultProps = {
  cards: [],
  heading3badge: null,
};
Blogs3.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  // it is an array of objects which
  // are represented by the props
  // that can be passed to the CardBlogImageHorizontal,
  // so please check that one out
  cards: PropTypes.arrayOf(PropTypes.object),
};
