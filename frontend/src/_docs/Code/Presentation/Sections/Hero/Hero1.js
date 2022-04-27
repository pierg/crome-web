import Hero1 from "components/Sections/Presentation/Heroes/Hero1.js";
import passProps from "_texts/presentation/heroes/hero1.js";
const dependencies = [
  {
    name: "InfoAreaIconTitleLink",
    link:
      "/components/presentation/components/info-areas#presentation-id-presentation-id-components-infoareaicontitlelink",
  },
  {
    name: "CardInfoIcon",
    link:
      "/components/presentation/components/cards#presentation-id-presentation-id-components-cardinfoicon",
  },
  {
    name: "CardBlogImage",
    link:
      "/components/presentation/components/cards#presentation-id-presentation-id-components-cardblogimage",
  },
  {
    name: "Heading3",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
];
const props = `Hero1.defaultProps = {
  heading3: null,
  infoCards: [],
  infoArea: {},
  skewCard: {},
};
Hero1.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardInfoIcon,
  // so please check that one out
  infoCards: PropTypes.arrayOf(PropTypes.object),
  // it is represented by the props
  // that can be passed to the InfoAreaIconTitleLink,
  // so please check that one out
  infoArea: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardBlogImage,
  // so please check that one out
  skewCard: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Hero1 from "@notus-pro/react/Hero1";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Hero1
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Hero1,
  componentName: "Hero1",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
