import Testimonials1 from "components/Sections/ECommerce/Testimonials/Testimonials1.js";
import passProps from "_texts/e-commerce/sections/testimonials1.js";
const dependencies = [
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "MediaPlayerTestimonial",
    link:
      "/components/e-commerce/components/media-players#e-commerce-id-e-commerce-id-components-mediaplayertestimonial",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `Testimonials1.defaultProps = {
  button: {},
  heading2: null,
};
Testimonials1.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // props to pass to the Button component
  button: PropTypes.object,
  // props to pass to the MediaPlayerTestimonial component
  mediaplayer: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Testimonials1 from "@notus-pro/react/Testimonials1";
// texts as props
const testimonials1 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Testimonials1 {...testimonials1} />
    </>
  );
}`;

const docsObjects = {
  component: Testimonials1,
  componentName: "Testimonials1",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
