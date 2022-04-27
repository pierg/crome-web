import Hero4 from "components/Sections/Presentation/Heroes/Hero4.js";
import passProps from "_texts/presentation/heroes/hero4.js";
const dependencies = [
  {
    name: "CardInfoFullColor",
    link:
      "/components/presentation/components/cards#presentation-id-presentation-id-components-cardinfofullcolor",
  },
  {
    name: "CardInfoImage",
    link:
      "/components/presentation/components/cards#presentation-id-presentation-id-components-cardinfoimage",
  },
  {
    name: "Heading2Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
];
const props = `Hero4.defaultProps = {
  heading2badge: null,
  leftCardProps: {},
  rightCardInfoIconProps: {},
  rightCardBlogImageProps: {},
  rightCardContactUsTitleProps: {},
  rightCardInfoImageProps: {},
};
Hero4.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // Please check CardInfoImage props for more info
  leftCardProps: PropTypes.object,
  // Please check CardInfoFullColor props for more info
  rightCardInfoIconProps: PropTypes.object,
  // Please check CardInfoFullColor props for more info
  rightCardBlogImageProps: PropTypes.object,
  // Please check CardInfoFullColor props for more info
  rightCardContactUsTitleProps: PropTypes.object,
  // Please check CardInfoFullColor props for more info
  rightCardInfoImageProps: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Hero4 from "@notus-pro/react/Hero4";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Hero4
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Hero4,
  componentName: "Hero4",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
