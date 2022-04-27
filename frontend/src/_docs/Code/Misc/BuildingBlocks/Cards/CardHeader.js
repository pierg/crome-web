import "components/Cards/CardHeader.js"
import CardHeader

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
import "@notus-pro/react/CardHeader"
import CardHeader

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
