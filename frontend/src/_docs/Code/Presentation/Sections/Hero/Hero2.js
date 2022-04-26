import Hero2 from "components/Sections/Presentation/Heroes/Hero2.js";
import passProps from "_texts/presentation/heroes/hero2.js";
const dependencies = [
  {
    name: "InfoAreaIconTitleListColor",
    link:
      "/components/presentation/components/info-areas#presentation-id-presentation-id-components-infoareaicontitlelistcolor",
  },
  {
    name: "Skew",
    link: "/components/misc/components/skews#misc-id-misc-id-components-skew",
  },
  {
    name: "Heading2Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
];
const props = `Hero2.defaultProps = {
  heading2badge: null,
  infoArea: {},
};
Hero2.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  image: PropTypes.string,
  // it is represented by the props
  // that can be passed to the InfoAreaWhiteTitle,
  // so please check that one out
  infoAreas: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Hero2 from "@notus-pro/react/Hero2";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Hero2
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Hero2,
  componentName: "Hero2",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
