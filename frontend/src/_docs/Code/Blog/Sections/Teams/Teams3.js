import Teams3 from "components/Sections/Blog/Teams/Teams3.js";
import passProps from "_texts/blog/teams/teams3.js";
const dependencies = [
  {
    name: "CardProfileFull",
    link:
      "/components/blog/components/cards#blog-id-blogs-id-components-cardprofilefull",
  },
  {
    name: "Heading3Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3badge",
  },
];
const props = `Teams3.defaultProps = {
  cards: [],
  heading3badge: null,
};
Teams3.propTypes = {
  heading3badge: PropTypes.object,
  // an array of props that can be passed to the
  // CardProfileFull component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Teams3 from "@notus-pro/react/Teams3";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Teams3 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Teams3,
  componentName: "Teams3",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "bg-blueGray-300",
  },
};
export default docsObjects;
