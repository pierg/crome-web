import ContactUs6 from "components/Sections/Misc/ContactUs/ContactUs6.js";
import passProps from "_texts/misc/contactus/contactus6.js";
const dependencies = [
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "CardContactUsHorizontal",
    link: "",
  },
];
const props = `ContactUs6.defaultProps = {
  card: {},
  map: {},
  heading2: null,
};
ContactUs6.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // Object representing the options you can send to the googlemaps
  // Read more here: https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
  map: PropTypes.object,
  // array of props for the CardContactUsHorizontal component
  card: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import ContactUs6 from "@notus-pro/react/ContactUs6";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <ContactUs6 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: ContactUs6,
  componentName: "ContactUs6",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
