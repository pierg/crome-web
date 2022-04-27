import "_texts/presentation/heroes/hero5.js"
import "components/Sections/Presentation/Heroes/Hero5.js"
import Hero5
import passProps

const dependencies = [
  {
    name: "InfoAreaIconTitleLinkColor",
    link: "/components/presentation/components/info-areas#presentation-id-presentation-id-components-infoareaicontitlelinkcolor",
  },
  {
    name: "Heading2Badge",
    link: "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
];
const props = `Hero5.defaultProps = {
  infoAreas: [],
  heading2badge: null,
};
Hero5.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // an array of props that can be passed to the
  // InfoAreaIconTitleLinkColor component
  infoAreas: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Hero5"
import Hero5

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Hero5
        {...props}
      />
    </>
  );
}`;

const docsObjects = {
  component: Hero5,
  componentName: "Hero5",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
