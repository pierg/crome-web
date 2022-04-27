import "_texts/presentation/infoarea/infoareawhitetitle.js"
import "components/InfoAreas/Presentation/InfoAreaWhiteTitle.js"
import InfoAreaWhiteTitle
import passProps

const props = `InfoAreaWhiteTitle.defaultProps = {
  type: "light",
};
InfoAreaWhiteTitle.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  // choose the dark type when using this component on a lighter background
  // choose the light type when using this component on a darker background
  type: PropTypes.oneOf(["light", "dark"]),
  title: PropTypes.string,
  description: PropTypes.string,
};
`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/InfoAreaWhiteTitle"
import InfoAreaWhiteTitle

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/4">
        <InfoAreaWhiteTitle {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: InfoAreaWhiteTitle,
  componentName: "InfoAreaWhiteTitle",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/4",
  },
};
export default docsObjects;
