import ContactUs5 from "components/Sections/Misc/ContactUs/ContactUs5.js";
import passProps from "_texts/misc/contactus/contactus5.js";
const dependencies = [
  {
    name: "Heading3",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
  {
    name: "CardContactUsAddress",
    link: "",
  },
];
const props = `ContactUs5.defaultProps = {
  card: {},
  map: {},
  heading3: null,
};
ContactUs5.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // Object representing the options you can send to the googlemaps
  // Read more here: https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
  map: PropTypes.object,
  // array of props for the CardContactUsAddress component
  card: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import ContactUs5 from "@notus-pro/react/ContactUs5";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <ContactUs5 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: ContactUs5,
  componentName: "ContactUs5",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
