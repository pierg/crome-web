import "_texts/misc/content/ratings.js"
import "components/Content/Ratings.js"
import passProps
import Ratings

const props = `Ratings.defaultProps = {
  rating: 0,
};

Ratings.propTypes = {
  rating: PropTypes.oneOf([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]),
  text: PropTypes.string,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Ratings"
import Ratings

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Ratings {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Ratings,
  componentName: "Ratings",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
