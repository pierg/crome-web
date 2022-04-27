import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import CardBlogFullBg from "../../../../components/Cards/Presentation/CardBlogFullBg.js";
import Button from "../../../../components/Elements/Button.js";

export default function Blogs7({ heading2badge, cards, button }) {
  const widths = {
    1: "",
    "1/3": "lg:w-1/3",
    "2/3": "lg:w-2/3",
    "1/4": "lg:w-1/4",
    "2/4": "lg:w-2/4",
    "3/4": "lg:w-3/4",
  };
  return (
    <>
      <div className="my-12">
        <div className="mb-12">
          {heading2badge && <Heading2Badge {...heading2badge} />}
        </div>
        <div className="items-center flex flex-wrap -mx-4 mb-0">
          {cards.map((prop, key) => (
            <div
              key={key}
              className={"px-4 mb-4 relative w-full " + widths[prop.width]}
            >
              <CardBlogFullBg {...prop.card} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button {...button} />
        </div>
      </div>
    </>
  );
}

Blogs7.defaultProps = {
  cards: [],
  heading2badge: null,
};
Blogs7.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // props that can be passed to the Button component
  button: PropTypes.object,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.oneOf(["1", "1/3", "2/3", "1/4", "2/4", "3/4"]),
      // props that can be passed to the CardBlogFullBg component
      card: PropTypes.object,
    })
  ),
};
