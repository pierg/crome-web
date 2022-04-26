import Features4 from "components/Sections/Misc/Features/Features4.js";
import passProps from "_texts/misc/features/features4.js";
const dependencies = [
  {
    name: "Heading3Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3badge",
  },
  {
    name: "CardInfoIconLeft",
    link:
      "/components/misc/components/cards#misc-id-misc-id-components-cardinfoiconleft",
  },
];
const props = `Features4.defaultProps = {
  cards: [],
  heading3badge: null,
};
Features4.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  image: PropTypes.string,
  // array of props to pass to the CardInfoIconLeft component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Features4 from "@notus-pro/react/Features4";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Features4
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Features4,
  componentName: "Features4",
  passProps,
  description,
  props,
  preview,
  dependencies,
};
export default docsObjects;
