import "components/Cards/CardFooter.js"
import CardFooter

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
import "@notus-pro/react/CardFooter"
import CardFooter

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
