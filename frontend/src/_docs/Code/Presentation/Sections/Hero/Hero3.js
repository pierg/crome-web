import Hero3 from "components/Sections/Presentation/Heroes/Hero3.js";
import passProps from "_texts/presentation/heroes/hero3.js";
const dependencies = [
  {
    name: "InfoAreaWhiteTitle",
    link:
      "/components/presentation/components/info-areas#presentation-id-presentation-id-components-infoareawhitetitle",
  },
  {
    name: "Skew",
    link: "/components/misc/components/skews#misc-id-misc-id-components-skew",
  },
  {
    name: "Heading3",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
];
const props = `Hero3.defaultProps = {
  infoAreas: [],
  heading3: null,
};
Hero3.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // it is represented by the props
  // that can be passed to the InfoAreaWhiteTitle,
  // so please check that one out
  infoAreas: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Hero3 from "@notus-pro/react/Hero3";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Hero3
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Hero3,
  componentName: "Hero3",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
