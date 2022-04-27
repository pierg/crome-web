import "_texts/e-commerce/mediaplayers/mediaplayerimageleftrightbuttons.js"
import "components/MediaPlayers/MediaPlayerImageLeftRightButtons.js"
import MediaPlayerImageLeftRightButtons
import passProps

const props = `MediaPlayerImageLeftRightButtons.defaultProps = {
  defaultOpened: 0,
  items: [],
};

MediaPlayerImageLeftRightButtons.propTypes = {
  // 0 represents the first element
  // also, you should note that
  // the number should not be lower then 0
  // or higher than the number of items - 1
  defaultOpened: PropTypes.number,
  // an array of string representing valid image sources
  items: PropTypes.arrayOf(PropTypes.string),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/MediaPlayerImageLeftRightButtons"
import MediaPlayerImageLeftRightButtons

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <MediaPlayerImageLeftRightButtons {...props} />
    </>
  );
}`;

const docsObjects = {
  component: MediaPlayerImageLeftRightButtons,
  componentName: "MediaPlayerImageLeftRightButtons",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
