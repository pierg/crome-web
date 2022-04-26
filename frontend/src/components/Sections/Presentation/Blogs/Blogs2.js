import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import CardBlogFullBgAuthor from "../../../../components/Cards/Presentation/CardBlogFullBgAuthor.js";

export default function Blogs2({
  heading2,
  heading2badge,
  heading3,
  heading3badge,
  card,
}) {
  return (
    <>
      <div className="py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="mx-auto px-4 relative w-full lg:w-10/12">
            {heading2badge && <Heading2Badge {...heading2badge} />}
            <CardBlogFullBgAuthor {...card} />
          </div>
        </div>
      </div>
    </>
  );
}

Blogs2.defaultProps = {
  card: {},
  heading2badge: null,
};
Blogs2.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardBlogFullBgAuthor,
  // so please check that one out
  card: PropTypes.object,
};
