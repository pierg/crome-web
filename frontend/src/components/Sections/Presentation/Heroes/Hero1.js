import React from "react";
import PropTypes from "prop-types";

// components
import Heading3 from "../../../../components/Headings/Heading3.js";
import CardInfoIcon from "../../../../components/Cards/Presentation/CardInfoIcon.js";
import InfoAreaIconTitleLink from "../../../../components/InfoAreas/Presentation/InfoAreaIconTitleLink.js";
import CardBlogImage from "../../../../components/Cards/Presentation/CardBlogImage.js";

export default function Hero1({ heading3, infoCards, infoArea, skewCard }) {
  return (
    <>
      <section className="pb-20 bg-blueGray-100">
        <div className="container mx-auto px-4">
          <div className="pt-6">{heading3 && <Heading3 {...heading3} />}</div>
          <div className="flex flex-wrap">
            {infoCards.map((prop, key) => {
              return (
                <div
                  className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
                  key={key}
                >
                  <CardInfoIcon {...prop} />
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <InfoAreaIconTitleLink {...infoArea} />
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <CardBlogImage {...skewCard} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Hero1.defaultProps = {
  heading3: null,
  infoCards: [],
  infoArea: {},
  skewCard: {},
};
Hero1.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardInfoIcon,
  // so please check that one out
  infoCards: PropTypes.arrayOf(PropTypes.object),
  // it is represented by the props
  // that can be passed to the InfoAreaIconTitleLink,
  // so please check that one out
  infoArea: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardBlogImage,
  // so please check that one out
  skewCard: PropTypes.object,
};
