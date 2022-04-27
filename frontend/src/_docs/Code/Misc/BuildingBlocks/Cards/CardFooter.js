import CardFooter from "components/Cards/CardFooter.js";
const passProps = {
  children: "This is the CardFooter tag.",
};
const props = `CardFooter.defaultProps = {
  border: true,
};

CardFooter.propTypes = {
  children: PropTypes.node,
  border: PropTypes.bool,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardFooter from "@notus-pro/react/CardFooter";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <CardFooter {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardFooter,
  componentName: "CardFooter",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
