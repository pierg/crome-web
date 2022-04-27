import Projects2 from "components/Sections/Misc/Projects/Projects2.js";
import passProps from "_texts/misc/projects/projects2.js";
const dependencies = [
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "CardProjectTeam",
    link:
      "/components/misc/components/cards#misc-id-misc-id-components-cardprojectteam",
  },
  {
    name: "Pagination",
    link: "/components/misc/components/pagination",
  },
];
const props = `Projects2.defaultProps = {
  cards: [],
  pagination: {},
  heading2: null,
};
Projects2.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // array of props to pass to the CardProjectTeam component
  cards: PropTypes.arrayOf(PropTypes.object),
  // props to pass to the Pagination component
  pagination: PropTypes.object,
  footerText: PropTypes.string,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Projects2 from "@notus-pro/react/Projects2";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Projects2 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Projects2,
  componentName: "Projects2",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
