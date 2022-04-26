import HeaderLeftTitleRightImagePlayer from "components/Headers/Misc/HeaderLeftTitleRightImagePlayer.js";
import passProps from "_texts/misc/headers/headerlefttitlerightimageplayer.js";
const dependencies = [
  {
    name: "MediaPlayerImageOnly",
    link: "/components/blog/components/media-players",
  },
  {
    name: "InfoAreaIconTitle",
    link:
      "/components/misc/components/info-areas#misc-id-misc-id-components-infoareaicontitle",
  },
];
const props = `HeaderLeftTitleRightImagePlayer.defaultProps = {
  infoAreas: [],
  mediaplayer: {},
  color: "blueGray"
};

HeaderLeftTitleRightImagePlayer.propTypes = {
  title: PropTypes.string,
  // array of props that can be passed to the InfoAreaIconTitle component
  infoAreas: PropTypes.arrayOf(PropTypes.object),
  // props to pass to the MediaPlayerImageOnly component
  mediaplayer: PropTypes.object,
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
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import HeaderLeftTitleRightImagePlayer from "@notus-pro/react/HeaderLeftTitleRightImagePlayer";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <HeaderLeftTitleRightImagePlayer {...props} />
    </>
  );
}`;

const docsObjects = {
  component: HeaderLeftTitleRightImagePlayer,
  componentName: "HeaderLeftTitleRightImagePlayer",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
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
    defaultColor: "blueGray",
  },
};
export default docsObjects;
