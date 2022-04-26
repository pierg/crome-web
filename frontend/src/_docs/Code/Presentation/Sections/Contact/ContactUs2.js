import ContactUs2 from "components/Sections/Presentation/ContactUs/ContactUs2.js";
import passProps from "_texts/presentation/contactus/contactus2.js";
const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
  {
    name: "InfoAreaIcon",
    link:
      "/components/presentation/components/info-areas#presentation-id-presentation-id-components-infoareaicon",
  },
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
];
const props = `ContactUs2.defaultProps = {
  button: {},
  infoAreas: [],
  heading2: null,
};
ContactUs2.propTypes = {
  image: PropTypes.string,
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Button,
  // so please check that one out
  button: PropTypes.object,
  // it is an array that has objects which
  // are represented by the props
  // that can be passed to the InfoAreaIcon,
  // so please check that one out
  infoAreas: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import ContactUs2 from "@notus-pro/react/ContactUs2";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <ContactUs2 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: ContactUs2,
  componentName: "ContactUs2",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
