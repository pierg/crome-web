import React from "react";
import PropTypes from "prop-types";

// components
import Heading3Badge from "../../../../components/Headings/Heading3Badge.js";
import MediaPlayerTeamInfo from "../../../../components/MediaPlayers/MediaPlayerTeamInfo.js";

export default function Testimonials2({ heading3badge, skew, mediaplayer }) {
  return (
    <>
      <div className="pb-12 mt-12 bg-blueGray-100 relative">
        <div className="container mx-auto px-4">
          {heading3badge && <Heading3Badge {...heading3badge} />}
          <MediaPlayerTeamInfo {...mediaplayer} />
        </div>
      </div>
    </>
  );
}

Testimonials2.defaultProps = {
  button: {},
  skew: {},
  heading3badge: null,
};
Testimonials2.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  // props to pass to the Skew component
  skew: PropTypes.object,
  // props to pass to the MediaPlayerTeamInfo component
  mediaplayer: PropTypes.object,
};
