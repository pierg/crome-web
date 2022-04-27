import ContactUs3 from "components/Sections/Presentation/ContactUs/ContactUs3.js";
import passProps from "_texts/presentation/contactus/contactus3.js";
const dependencies = [
  {
    name: "CardContactUsIcons",
    link:
      "/components/presentation/components/cards#presentation-id-presentation-id-components-cardcontactusicons",
  },
  {
    name: "Skew",
    link: "/components/misc/components/skews#misc-id-misc-id-components-skew",
  },
  {
    name: "Map",
    link: "/components/presentation/components/maps",
  },
  {
    name: "Heading2Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
];
const props = `ContactUs3.defaultProps = {
  heading2badge: null,
  infoAreas: [],
  map: {},
};
ContactUs3.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Button,
  // so please check that one out
  badge: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardContactUsIcons,
  // so please check that one out
  card: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Map,
  // so please check that one out
  map: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Skew,
  // so please check that one out
  skew: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import ContactUs3 from "@notus-pro/react/ContactUs3";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <ContactUs3 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: ContactUs3,
  componentName: "ContactUs3",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
