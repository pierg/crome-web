import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import Button from "../../../../components/Elements/Button.js";
import MediaPlayerTestimonial from "../../../../components/MediaPlayers/MediaPlayerTestimonial.js";

export default function Testimonials1({ heading2, button, mediaplayer }) {
  return (
    <>
      <section className="relative py-12">
        <div className="flex flex-wrap -mx-4 justify-center items center">
          <div className="px-8 w-full md:w-1/3">
            {heading2 && <Heading2 {...heading2} />}
            <Button {...button} />
          </div>
          <div className="px-8 w-full md:w-1/3">
            <MediaPlayerTestimonial {...mediaplayer} />
          </div>
        </div>
      </section>
    </>
  );
}

Testimonials1.defaultProps = {
  button: {},
  heading2: null,
};
Testimonials1.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // props to pass to the Button component
  button: PropTypes.object,
  // props to pass to the MediaPlayerTestimonial component
  mediaplayer: PropTypes.object,
};
