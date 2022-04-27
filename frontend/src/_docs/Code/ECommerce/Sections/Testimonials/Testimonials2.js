import Testimonials2 from "components/Sections/ECommerce/Testimonials/Testimonials2.js";
import passProps from "_texts/e-commerce/sections/testimonials2.js";
const dependencies = [
  {
    name: "Skew",
    link: "/components/misc/components/skews#misc-id-misc-id-components-skew",
  },
  {
    name: "Heading3Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3badge",
  },
  {
    name: "MediaPlayerTeamInfo",
    link:
      "/components/e-commerce/components/media-players#e-commerce-id-e-commerce-id-components-mediaplayerteaminfo",
  },
];
const props = `Testimonials2.defaultProps = {
  button: {},
  skew: {},
  heading3badge: null,
};
Testimonials2.propTypes = {
  heading3badge: PropTypes.object,
  // props to pass to the Skew component
  skew: PropTypes.object,
  // props to pass to the MediaPlayerTeamInfo component
  mediaplayer: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Testimonials2 from "@notus-pro/react/Testimonials2";

// texts as props
const testimonials2 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Testimonials2 {...testimonials2} />
    </>
  );
}`;

const docsObjects = {
  component: Testimonials2,
  componentName: "Testimonials2",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
