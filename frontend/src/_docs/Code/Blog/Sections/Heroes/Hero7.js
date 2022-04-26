import Hero7 from "components/Sections/Blog/Heroes/Hero7.js";
import passProps from "_texts/blog/heroes/hero7.js";
const dependencies = [
  {
    name: "PreFooterSmall",
    link: "/components/blog/components/pre-footers",
  },
  {
    name: "Heading3",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
];
const props = `Hero7.defaultProps = {
  prefooter: {},
  heading3: null,
};
Hero7.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // props that can be passed to the PreFooterSmall component
  prefooter: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Hero7 from "@notus-pro/react/Hero7";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Hero7 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Hero7,
  componentName: "Hero7",
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
