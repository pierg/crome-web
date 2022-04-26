import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import InfoAreaIconTitleListColor from "../../../../components/InfoAreas/Presentation/InfoAreaIconTitleListColor.js";
import CardInfoFullColor from "../../../../components/Cards/Presentation/CardInfoFullColor.js";

export default function Features1({ heading2, infoArea, cards }) {
  return (
    <>
      <div className="relative text-center py-20">
        <div className="container mx-auto px-4">
          {heading2 && <Heading2 {...heading2} />}
          <div className="items-center flex flex-wrap -mx-4">
            <div className="mr-auto text-left px-4 relative w-full lg:w-4/12 w-full md:w-8/12">
              <InfoAreaIconTitleListColor {...infoArea} />
            </div>
            <div className="md:pl-0 px-4 relative w-full lg:w-7/12 w-full md:w-full">
              <div className="flex flex-wrap">
                {cards.map((prop, key) => (
                  <div
                    key={key}
                    className={
                      "relative w-full md:w-4/12 -ml-8 opacity-90 mb-8" +
                      (key % 3 === 0 ? " md:mt-2" : "") +
                      (key % 3 === 1 ? " md:-mt-4" : "") +
                      (key % 3 === 2 ? " md:mt-4" : "")
                    }
                  >
                    <CardInfoFullColor {...prop}></CardInfoFullColor>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Features1.defaultProps = {
  infoArea: {},
  cards: [],
  heading2: null,
};
Features1.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // props to pass to the InfoAreaIconTitleListColor component
  infoArea: PropTypes.object,
  // array of props to pass to the CardInfoFullColor component
  cards: PropTypes.arrayOf(PropTypes.object),
};
