import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../../../components/Headings/Heading3.js"
import "../../../../components/InfoAreas/Presentation/InfoAreaWhiteTitle.js"
import "../../../../components/Skews/Skew.js"
import Heading3
import InfoAreaWhiteTitle
import Skew

export default function Hero3({ heading3, infoAreas }) {
  return (
    <>
      <section className="relative block">
        <Skew color="dark" />
        <div className="bg-blueGray-900 py-24">
          <div className="container mx-auto px-4">
            {heading3 && <Heading3 {...heading3} />}
            <div className="flex flex-wrap mt-12 justify-center">
              {infoAreas.map((prop, key) => {
                return (
                  <div className="w-full lg:w-3/12 px-4 text-center" key={key}>
                    <InfoAreaWhiteTitle {...prop} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Hero3.defaultProps = {
  infoAreas: [],
  heading3: null,
};
Hero3.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // it is represented by the props
  // that can be passed to the InfoAreaWhiteTitle,
  // so please check that one out
  infoAreas: PropTypes.arrayOf(PropTypes.object),
};
