import MediaPlayerTestimonial from "components/MediaPlayers/MediaPlayerTestimonial.js";
import passProps from "_texts/e-commerce/mediaplayers/mediaplayertestimonial.js";
const props = `MediaPlayerTestimonial.defaultProps = {
  defaultOpened: 0,
  items: [],
};

MediaPlayerTestimonial.propTypes = {
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
    })
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import MediaPlayerTestimonial from "@notus-pro/react/MediaPlayerTestimonial";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <MediaPlayerTestimonial {...props} />
    </>
  );
}`;

const docsObjects = {
  component: MediaPlayerTestimonial,
  componentName: "MediaPlayerTestimonial",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
