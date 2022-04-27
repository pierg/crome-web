import "_texts/presentation/infoarea/infoareaicontitlelistcolor.js"
import "components/InfoAreas/Presentation/InfoAreaIconTitleListColor.js"
import InfoAreaIconTitleListColor
import passProps

const props = `InfoAreaIconTitleListColor.defaultProps = {
  iconColor: "blueGray",
  description: [],
  list: [],
};
InfoAreaIconTitleListColor.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  // the background of the icon
  // NOTE: this color will also be added to the list icons of down below
  iconColor: PropTypes.oneOf([
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
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      // icon name to be added on the <i></i> tag, for example "fa fa-heart"
      icon: PropTypes.string.isRequired,
      // text to go with the icon
      text: PropTypes.string.isRequired,
    })
  ),
};
`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/InfoAreaIconTitleListColor"
import InfoAreaIconTitleListColor

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2">
        <InfoAreaIconTitleListColor {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: InfoAreaIconTitleListColor,
  componentName: "InfoAreaIconTitleListColor",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2",
    colorSwitchePropToChange: "iconColor",
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
