import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import MediaPlayerTeamInfoSocial from "../../../../components/MediaPlayers/MediaPlayerTeamInfoSocial.js";

export default function Teams2({ heading2badge, mediaplayer }) {
  return (
    <>
      <div className="py-12">
        {heading2badge && (
          <div className="pt-6">
            <Heading2Badge {...heading2badge} />
          </div>
        )}
        <MediaPlayerTeamInfoSocial {...mediaplayer} />
      </div>
    </>
  );
}

Teams2.defaultProps = {
  heading2badge: null,
  mediaplayer: {},
};
Teams2.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // it is represented by the props
  // that can be passed to the MediaPlayerTeamInfoSocial,
  // so please check that one out
  mediaplayer: PropTypes.object,
};
