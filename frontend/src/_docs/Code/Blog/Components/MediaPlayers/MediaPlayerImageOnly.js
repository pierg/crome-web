import MediaPlayerImageOnly from "components/MediaPlayers/MediaPlayerImageOnly.js";
import passProps from "_texts/blog/mediaplayers/mediaplayerimageonly.js";
const props = `MediaPlayerImageOnly.defaultProps = {
  defaultOpened: 0,
  items: [],
  size: "regular",
};

MediaPlayerImageOnly.propTypes = {
  // 0 represents the first element
  // also, you should note that
  // the number should not be lower then 0
  // or higher than the number of items - 1
  defaultOpened: PropTypes.number,
  // an array of string representing valid image sources
  items: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(["sm", "regular", "lg"]),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import MediaPlayerImageOnly from "@notus-pro/react/MediaPlayerImageOnly";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <MediaPlayerImageOnly {...props} />
    </>
  );
}`;

const docsObjects = {
  component: MediaPlayerImageOnly,
  componentName: "MediaPlayerImageOnly",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
