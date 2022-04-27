import "_texts/misc/infoareas/infoareaicontitle.js"
import "components/InfoAreas/Misc/InfoAreaIconTitle.js"
import InfoAreaIconTitle
import passProps

const props = `InfoAreaIconTitle.defaultProps = {
  description: [],
};
InfoAreaIconTitle.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fas fa-heart"
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/InfoAreaIconTitle"
import InfoAreaIconTitle

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <InfoAreaIconTitle {...props} />
    </>
  );
}`;

const docsObjects = {
  component: InfoAreaIconTitle,
  componentName: "InfoAreaIconTitle",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    previewClasses: "bg-blueGray-800",
  },
};
export default docsObjects;
