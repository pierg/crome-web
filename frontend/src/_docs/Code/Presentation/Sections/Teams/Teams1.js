import Teams1 from "components/Sections/Presentation/Teams/Teams1.js";
import passProps from "_texts/presentation/teams/teams1.js";
const dependencies = [
  {
    name: "InfoAreaUser",
    link:
      "/components/presentation/components/info-areas#presentation-id-presentation-id-components-infoareauser",
  },
  {
    name: "Heading3",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
];
const props = `Teams1.defaultProps = {
  heading3: null,
  infoAreas: [],
};
Teams1.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // it is represented by the props
  // that can be passed to the InfoAreaUser,
  // so please check that one out
  infoAreas: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Teams1 from "@notus-pro/react/Teams1";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Teams1
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Teams1,
  componentName: "Teams1",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
