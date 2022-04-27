import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../../../components/Headings/Heading2Badge.js"
import "../../../../components/MediaPlayers/MediaPlayerTeamInfoSocial.js"
import Heading2Badge
import MediaPlayerTeamInfoSocial

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
