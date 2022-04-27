import "_texts/misc/headers/headerlefttitlerightimage.js"
import "components/Headers/Misc/HeaderLeftTitleRightImage.js"
import HeaderLeftTitleRightImage
import passProps

const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `HeaderLeftTitleRightImage.defaultProps = {
  button: {},
};

HeaderLeftTitleRightImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/HeaderLeftTitleRightImage"
import HeaderLeftTitleRightImage

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <HeaderLeftTitleRightImage {...props} />
    </>
  );
}`;

const docsObjects = {
  component: HeaderLeftTitleRightImage,
  componentName: "HeaderLeftTitleRightImage",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
