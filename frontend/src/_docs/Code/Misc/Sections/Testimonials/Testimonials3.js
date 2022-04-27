import Testimonials3 from "components/Sections/Misc/Testimonials/Testimonials3.js";
import passProps from "_texts/misc/testimonials/testimonials3.js";
const dependencies = [
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "MediaPlayerBlockQuote",
    link: "/components/misc/components/media-players",
  },
];
const props = `Testimonials3.defaultProps = {
  mediaplayer: {},
  heading2: null,
};
Testimonials3.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // array of props to pass to the MediaPlayerBlockQuote component
  mediaplayer: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Testimonials3 from "@notus-pro/react/Testimonials3";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Testimonials3 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Testimonials3,
  componentName: "Testimonials3",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
