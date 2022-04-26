import React from "react";
import PropTypes from "prop-types";

// components
import Heading3Badge from "../../../../components/Headings/Heading3Badge.js";
import CardProductText from "../../../../components/Cards/ECommerce/CardProductText.js";

export default function Hero9({ heading3badge, cards }) {
  return (
    <>
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          {heading3badge && <Heading3Badge {...heading3badge} />}
          <div className="flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div key={key} className="px-4 relative w-full md:w-4/12">
                <CardProductText {...prop} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Hero9.defaultProps = {
  cards: [],
  heading3badge: null,
};
Hero9.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  // array of props to pass to CardProductText component
  cards: PropTypes.arrayOf(PropTypes.object),
};
