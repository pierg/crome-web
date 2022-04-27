import "_texts/auth/headers/headerimagetitlesmallcenter.js"
import "components/Headers/Auth/HeaderImageTitleSmallCenter.js"
import HeaderImageTitleSmallCenter
import passProps

const props = `HeaderImageTitleSmallCenter.defaultProps = {
  skewColor: "white",
};

HeaderImageTitleSmallCenter.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  skewColor: PropTypes.oneOf(["white", "blueGray", "dark"]),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/HeaderImageTitleSmallCenter"
import HeaderImageTitleSmallCenter

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <HeaderImageTitleSmallCenter
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: HeaderImageTitleSmallCenter,
  componentName: "HeaderImageTitleSmallCenter",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
