import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../../../components/Cards/ECommerce/CardProductPlain.js"
import "../../../../components/Elements/Button.js"
import "../../../../components/Headings/Heading2Badge.js"
import Button
import CardProductPlain
import Heading2Badge

export default function Pricing3({ heading2badge, cards, button }) {
  return (
    <>
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            {heading2badge && <Heading2Badge {...heading2badge} />}
          </div>
          <div className="flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div key={key} className="px-4 relative w-full md:w-3/12">
                <CardProductPlain {...prop} />
              </div>
            ))}
            <div className="mx-auto mt-12">
              <Button {...button} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Pricing3.defaultProps = {
  cards: [],
  button: {},
  heading2badge: null,
};
Pricing3.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // prop to pass to the Button component
  button: PropTypes.object,
  // array of props to pass to the CardProductPlain component
  cards: PropTypes.arrayOf(PropTypes.object),
};
