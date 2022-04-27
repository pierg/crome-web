import InfoAreaIconTitleLink from "components/InfoAreas/Presentation/InfoAreaIconTitleLink.js";
import passProps from "_texts/presentation/infoarea/infoareaicontitlelink.js";
const props = `InfoAreaIconTitleLink.defaultProps = {
  iconColor: "blueGray",
  description: [],
  link: {},
};
InfoAreaIconTitleLink.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  // the background of the icon
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
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    // where the user should be redirected on click
    link: PropTypes.string.isRequired,
    // if innerLink is set to false
    // then the link will be generated as simple <a> a tag with target="_blank"
    // if not, it will be generated as a <Link> tag from react-router-dom
    innerLink: PropTypes.bool.isRequired,
  }),
};
`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import InfoAreaIconTitleLink from "@notus-pro/react/InfoAreaIconTitleLink";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2">
        <InfoAreaIconTitleLink {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: InfoAreaIconTitleLink,
  componentName: "InfoAreaIconTitleLink",
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
    defaultColor: "blueGray",
  },
};
export default docsObjects;
