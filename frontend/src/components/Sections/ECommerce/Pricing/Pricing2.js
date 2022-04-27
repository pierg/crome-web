import React from "react";
import PropTypes from "prop-types";

// components
import Heading3 from "../../../../components/Headings/Heading3.js";
import CardPricingList from "../../../../components/Cards/ECommerce/CardPricingList.js";
import CardTableDetails from "../../../../components/Cards/ECommerce/CardTableDetails.js";

export default function Pricing2({ heading3, leftCard, rightCard }) {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {heading3 && <Heading3 {...heading3} />}
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="md:pr-0 px-4 relative w-full md:w-5/12">
              <CardPricingList {...leftCard} />
            </div>
            <div className="md:pl-0 px-4 relative w-full md:w-7/12">
              <CardTableDetails {...rightCard} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Pricing2.defaultProps = {
  leftCard: {},
  rightCard: {},
  heading3: null,
};
Pricing2.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // prop to pass to the CardPricingList component
  leftCard: PropTypes.object,
  // prop to pass to the CardTableDetails component
  rightCard: PropTypes.object,
};
