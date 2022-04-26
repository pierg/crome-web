import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import CardProfileSkills from "../../../../components/Cards/Misc/CardProfileSkills.js";

export default function Teams4({ heading2, cards }) {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {heading2 && <Heading2 {...heading2} />}
          <div className="flex flex-wrap -mx-4 items-center">
            {cards.map((prop, key) => (
              <div
                key={key}
                className="mx-auto px-4 relative w-full md:w-5/12 lg:w-4/12"
              >
                <CardProfileSkills {...prop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Teams4.defaultProps = {
  cards: [],
  heading2: null,
};
Teams4.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // an array of props that can be passed to the
  // CardProfileSkills component
  cards: PropTypes.arrayOf(PropTypes.object),
};
