import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import Button from "../../../../components/Elements/Button.js";
import CardPricingList from "../../../../components/Cards/Misc/CardPricingList.js";

export default function Pricing5({
  heading2,
  heading2badge,
  heading3,
  heading3badge,
  buttons,
  cards,
}) {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {heading2badge && <Heading2Badge {...heading2badge} />}
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto py-4 mb-4">
              {buttons.map((prop, key) => (
                <Button key={key} {...prop} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div key={key} className="px-4 relative w-full md:w-4/12">
                <CardPricingList {...prop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Pricing5.defaultProps = {
  cards: [],
  buttons: [],
  heading2badge: null,
};
Pricing5.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // array of props to pass to the Button component
  buttons: PropTypes.arrayOf(PropTypes.object),
  // array of props to pass to the CardPricingList component
  cards: PropTypes.arrayOf(PropTypes.object),
};
