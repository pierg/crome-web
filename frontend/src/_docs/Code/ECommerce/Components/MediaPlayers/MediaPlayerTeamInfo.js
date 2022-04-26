import MediaPlayerTeamInfo from "components/MediaPlayers/MediaPlayerTeamInfo.js";
import passProps from "_texts/e-commerce/mediaplayers/mediaplayerteaminfo.js";
const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `MediaPlayerTeamInfo.defaultProps = {
  defaultOpened: 0,
  items: [],
};

MediaPlayerTeamInfo.propTypes = {
  // 0 represents the first element
  // also, you should note that
  // the number should not be lower then 0
  // or higher than the number of items - 1
  defaultOpened: PropTypes.number,
  // an array of string representing valid image sources
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      // props to pass to the Button element
      // NOTE: the color is default set by the color prop
      button: PropTypes.object,
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
    })
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import MediaPlayerTeamInfo from "@notus-pro/react/MediaPlayerTeamInfo";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <MediaPlayerTeamInfo {...props} />
    </>
  );
}`;

const docsObjects = {
  component: MediaPlayerTeamInfo,
  componentName: "MediaPlayerTeamInfo",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
