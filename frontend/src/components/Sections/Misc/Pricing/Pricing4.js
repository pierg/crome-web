import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import Button from "../../../../components/Elements/Button.js";
import CardPricingDetails from "../../../../components/Cards/Misc/CardPricingDetails.js";

export default function Pricing4({ heading2, buttons, cards }) {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {heading2 && <Heading2 {...heading2} />}
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
                <CardPricingDetails {...prop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Pricing4.defaultProps = {
  cards: [],
  buttons: [],
  heading2: null,
};
Pricing4.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // array of props to pass to the Button component
  buttons: PropTypes.arrayOf(PropTypes.object),
  // array of props to pass to the CardPricingDetails component
  cards: PropTypes.arrayOf(PropTypes.object),
};
