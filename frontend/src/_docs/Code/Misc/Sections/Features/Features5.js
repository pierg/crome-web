import Features5 from "components/Sections/Misc/Features/Features5.js";
import passProps from "_texts/misc/features/features5.js";
const dependencies = [
  {
    name: "Heading2Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
  {
    name: "CardInfoWithButton",
    link:
      "/components/misc/components/cards#misc-id-misc-id-components-cardinfowithbutton",
  },
];
const props = `Features5.defaultProps = {
  cards: [],
  heading2badge: null,
};
Features5.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // array of props to pass to the CardInfoWithButton component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Features5 from "@notus-pro/react/Features5";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Features5
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Features5,
  componentName: "Features5",
  passProps,
  description,
  props,
  preview,
  dependencies,
};
export default docsObjects;
