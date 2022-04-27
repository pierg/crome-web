import ImagesOverlap from "components/Images/ImagesOverlap.js";
import passProps from "_texts/misc/images/imagesoverlap.js";
const props = `ImagesOverlap.defaultProps = {
  images: [],
  size: "regular",
};
ImagesOverlap.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  text: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg", "regular"]),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import ImagesOverlap from "@notus-pro/react/ImagesOverlap";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <ImagesOverlap {...props} />
    </>
  );
}`;

const docsObjects = {
  component: ImagesOverlap,
  componentName: "ImagesOverlap",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "ml-8",
  },
};
export default docsObjects;
