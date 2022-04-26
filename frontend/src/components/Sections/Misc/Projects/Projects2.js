import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import CardProjectTeam from "../../../../components/Cards/Misc/CardProjectTeam.js";
import Pagination from "../../../../components/Pagination/Pagination.js";

export default function Projects2({
  heading2,
  heading2badge,
  heading3,
  heading3badge,
  cards,
  pagination,
  footerText,
}) {
  return (
    <>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {heading2 && <Heading2 {...heading2} />}
          <div className="mb-12 flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div key={key} className="px-4 relative w-full md:w-4/12">
                <CardProjectTeam {...prop} />
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <Pagination {...pagination} />
            <p>{footerText}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Projects2.defaultProps = {
  cards: [],
  pagination: {},
  heading2: null,
};
Projects2.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // array of props to pass to the CardProjectTeam component
  cards: PropTypes.arrayOf(PropTypes.object),
  // props to pass to the Pagination component
  pagination: PropTypes.object,
  footerText: PropTypes.string,
};
