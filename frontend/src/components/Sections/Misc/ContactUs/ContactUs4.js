import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../../../components/Cards/Misc/CardContactUsAddress.js"
import "../../../../components/Headings/Heading2Badge.js"
import "../../../../components/InfoAreas/Misc/InfoAreaIconTitle.js"
import CardContactUsAddress
import Heading2Badge
import InfoAreaIconTitle

export default function ContactUs4({ heading2badge, image, infoareas, card }) {
  return (
    <>
      <div
        className="bg-blueGray-900 py-20"
        style={{ backgroundImage: "url('" + image + "')" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto flex justify-center flex-col text-white px-4 relative lg:w-4/12 w-full md:w-5/12">
              {heading2badge && <Heading2Badge {...heading2badge} />}
              {infoareas.map((prop, key) => (
                <InfoAreaIconTitle key={key} {...prop} />
              ))}
            </div>
            <div className="mx-auto px-4 relative w-full lg:w-5/12 w-full md:w-7/12">
              <CardContactUsAddress {...card} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ContactUs4.defaultProps = {
  card: {},
  infoareas: [],
  heading2badge: null,
};
ContactUs4.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  image: PropTypes.string,
  // array of props for the InfoAreaIconTitle component
  infoareas: PropTypes.arrayOf(PropTypes.object),
  // array of props for the CardContactUsAddress component
  card: PropTypes.object,
};
