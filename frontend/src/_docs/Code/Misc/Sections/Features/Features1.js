import Features1 from "components/Sections/Misc/Features/Features1.js";
import passProps from "_texts/misc/features/features1.js";
const dependencies = [
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "InfoAreaIconTitleListColor",
    link:
      "/components/presentation/components/info-areas#presentation-id-presentation-id-components-infoareaicontitlelistcolor",
  },
  {
    name: "CardInfoFullColor",
    link:
      "/components/presentation/components/cards#presentation-id-presentation-id-components-cardinfofullcolor",
  },
];
const props = `Features1.defaultProps = {
  infoArea: {},
  cards: [],
  heading2: null,
};
Features1.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // props to pass to the InfoAreaIconTitleListColor component
  infoArea: PropTypes.object,
  // array of props to pass to the CardInfoFullColor component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Features1 from "@notus-pro/react/Features1";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Features1
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Features1,
  componentName: "Features1",
  passProps,
  description,
  props,
  preview,
  dependencies,
};
export default docsObjects;
