import InfoAreaIconTitleLinkColor from "components/InfoAreas/Presentation/InfoAreaIconTitleLinkColor.js";
import passProps from "_texts/presentation/infoarea/infoareaicontitlelinkcolor.js";
const props = `InfoAreaIconTitleLinkColor.defaultProps = {
  color: "blueGray",
  link: {},
};
InfoAreaIconTitleLinkColor.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
  color: PropTypes.oneOf([
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
};
`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import InfoAreaIconTitleLinkColor from "@notus-pro/react/InfoAreaIconTitleLinkColor";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <InfoAreaIconTitleLinkColor {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: InfoAreaIconTitleLinkColor,
  componentName: "InfoAreaIconTitleLinkColor",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
      "blueGray",
      "red",
      "orange",
      "amber",
      "emerald",
      "teal",
      "lightBlue",
      "indigo",
      "purple",
      "pink",
    ],
    defaultColor: "lightBlue",
  },
};
export default docsObjects;
