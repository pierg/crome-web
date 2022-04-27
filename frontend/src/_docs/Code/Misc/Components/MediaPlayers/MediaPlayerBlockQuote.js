import MediaPlayerBlockQuote from "components/MediaPlayers/MediaPlayerBlockQuote.js";
import passProps from "_texts/misc/mediaplayers/mediaplayerblockquote.js";
const props = `MediaPlayerBlockQuote.defaultProps = {
  defaultOpened: 0,
  items: [],
};

MediaPlayerBlockQuote.propTypes = {
  // 0 represents the first element
  // also, you should note that
  // the number should not be lower then 0
  // or higher than the number of items - 1
  defaultOpened: PropTypes.number,
  // an array of string representing valid image sources
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      icon: PropTypes.string,
      description: PropTypes.string,
      user: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
      }),
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
import MediaPlayerBlockQuote from "@notus-pro/react/MediaPlayerBlockQuote";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <MediaPlayerBlockQuote {...props} />
    </>
  );
}`;

const docsObjects = {
  component: MediaPlayerBlockQuote,
  componentName: "MediaPlayerBlockQuote",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
