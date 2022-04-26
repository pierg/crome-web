import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import MediaPlayerBlockQuote from "../../../../components/MediaPlayers/MediaPlayerBlockQuote.js";

export default function Testimonials3({ heading2, mediaplayer }) {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {heading2 && <Heading2 {...heading2} />}
          <MediaPlayerBlockQuote {...mediaplayer} />
        </div>
      </div>
    </>
  );
}

Testimonials3.defaultProps = {
  mediaplayer: {},
  heading2: null,
};
Testimonials3.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // array of props to pass to the MediaPlayerBlockQuote component
  mediaplayer: PropTypes.object,
};
