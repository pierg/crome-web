import Projects3 from "components/Sections/Misc/Projects/Projects3.js";
import passProps from "_texts/misc/projects/projects3.js";
const dependencies = [
  {
    name: "Heading3",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
  {
    name: "CardProjectImageFullBg",
    link:
      "/components/misc/components/cards#misc-id-misc-id-components-cardprojectimagefullbg",
  },
];
const props = `Projects3.defaultProps = {
  cards: [],
  heading3: null,
};
Projects3.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // array of props to pass to the CardProjectImageFullBg component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Projects3 from "@notus-pro/react/Projects3";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Projects3 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Projects3,
  componentName: "Projects3",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
