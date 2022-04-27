import "_texts/misc/images/imagepost.js"
import "components/Images/ImagePost.js"
import ImagePost
import passProps

const props = `ImagePost.defaultProps = {
  size: "regular",
};

ImagePost.propTypes = {
  size: PropTypes.oneOf(["sm", "regular", "lg"]),
  // Image source
  src: PropTypes.string,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/ImagePost"
import ImagePost

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <ImagePost {...props} />
    </>
  );
}`;

const docsObjects = {
  component: ImagePost,
  componentName: "ImagePost",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
