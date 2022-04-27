import "_texts/misc/images/imagetooltip.js"
import "components/Images/ImageTooltip.js"
import ImageTooltip
import passProps

const props = `ImageTooltip.defaultProps = {};
ImageTooltip.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/ImageTooltip"
import ImageTooltip

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-1/4 sm:w-2/12 md:w-1/12">
        <ImageTooltip {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: ImageTooltip,
  componentName: "ImageTooltip",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-1/4 sm:w-2/12 md:w-1/12",
  },
};
export default docsObjects;
