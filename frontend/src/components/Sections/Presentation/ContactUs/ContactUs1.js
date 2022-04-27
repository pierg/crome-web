import React from "react";
import PropTypes from "prop-types";

// components
import Heading3Badge from "../../../../components/Headings/Heading3Badge.js";
import CardContactUsTitle from "../../../../components/Cards/Presentation/CardContactUsTitle.js";

export default function ContactUs1({ heading3badge, card }) {
  return (
    <>
      <section className="relative block py-24 bg-blueGray-900">
        <div className="container mx-auto px-4">
          {heading3badge && <Heading3Badge {...heading3badge} />}
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <CardContactUsTitle {...card} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
ContactUs1.defaultProps = {
  card: {},
  heading3badge: null,
};
ContactUs1.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardContactUsTitle,
  // so please check that one out
  card: PropTypes.object,
};
