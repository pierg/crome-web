import "_texts/misc/features/features2.js"
import "components/Sections/Misc/Features/Features2.js"
import Features2
import passProps

const dependencies = [
  {
    name: "Heading2Badge",
    link: "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
  {
    name: "CardInfoIconLeft",
    link: "/components/misc/components/cards#misc-id-misc-id-components-cardinfoiconleft",
  },
];
const props = `Features2.defaultProps = {
  cards: [],
  color: "blueGray",
  heading2badge: null,
};
Features2.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  image: PropTypes.string,
  // array of props to pass to the CardInfoIconLeft component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Features2"
import Features2

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Features2
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Features2,
  componentName: "Features2",
  passProps,
  description,
  props,
  preview,
  dependencies,
  codeSnippetProps: {
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
      "blueGray",
      "red",
      "orange",
      "amber",
      "emerald",
      "teal",
      "lightBlue",
      "indigo",
      "purple",
      "pink",
    ],
    defaultColor: "emerald",
  },
};
export default docsObjects;
