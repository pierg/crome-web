import "_texts/blog/headers/headerimagetitlebuttons.js"
import "components/Headers/Blog/HeaderImageTitleButtons.js"
import HeaderImageTitleButtons
import passProps

const props = `HeaderImageTitleButtons.defaultProps = {
  socials: [],
};

HeaderImageTitleButtons.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  // this will generate an anchor with target blank to the given link
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf([
        "facebook",
        "twitter",
        "instagram",
        "dribbble",
        "github",
      ]),
      link: PropTypes.string,
    })
  ),
};
`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/HeaderImageTitleButtons"
import HeaderImageTitleButtons

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <HeaderImageTitleButtons
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: HeaderImageTitleButtons,
  componentName: "HeaderImageTitleButtons",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
