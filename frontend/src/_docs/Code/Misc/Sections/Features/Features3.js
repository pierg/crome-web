import Features3 from "components/Sections/Misc/Features/Features3.js";
import passProps from "_texts/misc/features/features3.js";
const dependencies = [
  {
    name: "Heading3",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
  {
    name: "InfoAreaIconTitleList",
    link:
      "/components/misc/components/info-areas#misc-id-misc-id-components-infoareaicontitlelist",
  },
];
const props = `Features3.defaultProps = {
  infoAreas: [],
  heading3: null,
};
Features3.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // array of props to pass to the InfoAreaIconTitleList component
  infoAreas: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Features3 from "@notus-pro/react/Features3";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Features3
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Features3,
  componentName: "Features3",
  passProps,
  description,
  props,
  preview,
  dependencies,
};
export default docsObjects;
