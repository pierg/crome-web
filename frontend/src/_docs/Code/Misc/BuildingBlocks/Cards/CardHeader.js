import CardHeader from "components/Cards/CardHeader.js";
const passProps = {
  children: "This is the CardHeader tag.",
};
const props = `CardHeader.defaultProps = {
  border: true,
};

CardHeader.propTypes = {
  children: PropTypes.node,
  border: PropTypes.bool,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardHeader from "@notus-pro/react/CardHeader";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <CardHeader {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardHeader,
  componentName: "CardHeader",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
