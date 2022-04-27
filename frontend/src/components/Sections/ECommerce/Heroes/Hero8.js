import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import CardProductPrice from "../../../../components/Cards/ECommerce/CardProductPrice.js";

export default function Hero8({ heading2, skew, cards }) {
  return (
    <>
      <section className="relative pb-12 mt-12 bg-blueGray-100 pt-20">
        <div className="container mx-auto px-4">
          {heading2 && <Heading2 {...heading2} />}
          <div className="flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div key={key} className="px-4 relative w-full lg:w-3/12">
                <CardProductPrice {...prop}></CardProductPrice>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Hero8.defaultProps = {
  cards: [],
  skew: {},
  heading2: null,
};
Hero8.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // props to send to Skew component
  skew: PropTypes.object,
  // array of props to pass to CardProductPrice component
  cards: PropTypes.arrayOf(PropTypes.object),
};
