import "_texts/blog/heroes/hero6.js"
import "components/Sections/Blog/Heroes/Hero6.js"
import Hero6
import passProps

const dependencies = [
  {
    name: "Input",
    link: "/components/misc/components/inputs",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
  {
    name: "Heading2",
    link: "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
];
const props = `Hero6.defaultProps = {
  input: {},
  button: {},
  heading2: null,
};
Hero6.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // props that can be passed to the Input component
  input: PropTypes.object,
  // props that can be passed to the Button component
  button: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Hero6"
import Hero6

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Hero6 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Hero6,
  componentName: "Hero6",
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
