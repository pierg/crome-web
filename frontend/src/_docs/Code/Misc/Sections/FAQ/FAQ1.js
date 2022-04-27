import "_texts/misc/faq/faq1.js"
import "components/Sections/Misc/FAQ/FAQ1.js"
import FAQ1
import passProps

const dependencies = [
  {
    name: "Heading2",
    link: "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "Accordion",
    link: "/components/misc/components/accordions",
  },
];
const props = `FAQ1.defaultProps = {
  accordion: {},
  heading2: null,
};
FAQ1.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  accordion: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/FAQ1"
import FAQ1

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <FAQ1 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: FAQ1,
  componentName: "FAQ1",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
