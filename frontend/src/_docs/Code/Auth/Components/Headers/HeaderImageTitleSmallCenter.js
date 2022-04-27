import HeaderImageTitleSmallCenter from "components/Headers/Auth/HeaderImageTitleSmallCenter.js";
import passProps from "_texts/auth/headers/headerimagetitlesmallcenter.js";
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
import HeaderImageTitleSmallCenter from "@notus-pro/react/HeaderImageTitleSmallCenter";

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
