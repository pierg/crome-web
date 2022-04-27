import ContactUs4 from "components/Sections/Misc/ContactUs/ContactUs4.js";
import passProps from "_texts/misc/contactus/contactus4.js";
const dependencies = [
  {
    name: "Heading2Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
  {
    name: "InfoAreaIconTitle",
    link: "",
  },
  {
    name: "CardContactUsAddress",
    link: "",
  },
];
const props = `ContactUs4.defaultProps = {
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
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import ContactUs4 from "@notus-pro/react/ContactUs4";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <ContactUs4 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: ContactUs4,
  componentName: "ContactUs4",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
