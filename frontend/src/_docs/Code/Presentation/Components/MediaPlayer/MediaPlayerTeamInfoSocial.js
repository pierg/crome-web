import MediaPlayerTeamInfoSocial from "components/MediaPlayers/MediaPlayerTeamInfoSocial.js";
import passProps from "_texts/presentation/mediaplayers/mediaplayerteaminfosocial.js";
const props = `MediaPlayerTeamInfoSocial.defaultProps = {
  items: [],
};

MediaPlayerTeamInfoSocial.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      socials: PropTypes.arrayOf(
        // this will generate an anchor with target blank to the given link
        PropTypes.shape({
          icon: PropTypes.oneOf([
            "facebook",
            "twitter",
            "instagram",
            "dribbble",
            "github",
          ]),
          link: PropTypes.string,
        })
      ),
      list: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string,
          text: PropTypes.string,
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
    })
  ),
};
`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import MediaPlayerTeamInfoSocial from "@notus-pro/react/MediaPlayerTeamInfoSocial";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <MediaPlayerTeamInfoSocial {...props} />
    </>
  );
}`;

const docsObjects = {
  component: MediaPlayerTeamInfoSocial,
  componentName: "MediaPlayerTeamInfoSocial",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
