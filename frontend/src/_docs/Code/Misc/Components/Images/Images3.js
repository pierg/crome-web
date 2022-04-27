import ImagePost from "components/Images/ImagePost.js";
import passProps from "_texts/misc/images/imagepost.js";
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
import ImagePost from "@notus-pro/react/ImagePost";

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
