import Blogs9 from "components/Sections/Misc/Blogs/Blogs9.js";
import passProps from "_texts/misc/blogs/blogs9.js";
const dependencies = [
  {
    name: "Heading3Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3badge",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `Blogs9.defaultProps = {
  user: {},
  description: [],
  leftButtons: [],
  bottomButtons: [],
  links: [],
  heading3badge: null,
};
Blogs9.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
  }),
  leftButtons: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  // array of properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  links: PropTypes.arrayOf(PropTypes.object),
  // array of props to pass to the Button component
  bottomButtons: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Blogs9 from "@notus-pro/react/Blogs9";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Blogs9
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Blogs9,
  componentName: "Blogs9",
  passProps,
  description,
  props,
  preview,
  dependencies,
};
export default docsObjects;
