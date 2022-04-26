import InfoAreaIconTitleList from "components/InfoAreas/Misc/InfoAreaIconTitleList.js";
import passProps from "_texts/misc/infoareas/infoareaicontitlelist.js";
const props = `InfoAreaIconTitleList.defaultProps = {
  description: [],
};
InfoAreaIconTitleList.propTypes = {
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
import InfoAreaIconTitleList from "@notus-pro/react/InfoAreaIconTitleList";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2">
        <InfoAreaIconTitleList {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: InfoAreaIconTitleList,
  componentName: "InfoAreaIconTitleList",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    previewClasses: "w-full md:w-1/2",
  },
};
export default docsObjects;
