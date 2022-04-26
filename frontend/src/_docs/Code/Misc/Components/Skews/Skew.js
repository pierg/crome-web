import Skew from "components/Skews/Skew.js";
const passProps = { color: "dark" };
const props = `Skew.defaultProps = {
  color: "white",
};
Skew.propTypes = {
  color: PropTypes.oneOf(["white", "blueGray", "dark"]),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Skew from "@notus-pro/react/Skew";

export default function Example() {
  return (
    <>
      <Skew color="dark" />
    </>
  );
}
`;

const docsObjects = {
  component: Skew,
  componentName: "Skew",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
