import React from "react";
import PropTypes from "prop-types";
// components
import MediaPlayerImageOnly from "../../../../components/MediaPlayers/MediaPlayerImageOnly.js";
import ImagePost from "../../../../components/Images/ImagePost.js";

export default function Blogs4({ items }) {
  return (
    <>
      {items.map((prop, key) => {
        return (
          <section key={key} className="pt-12 relative">
            {prop.imagepost ? (
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4 justify-center">
                  <ImagePost {...prop.imagepost} />
                </div>
              </div>
            ) : null}
            {prop.mediaplayer ? (
              <MediaPlayerImageOnly {...prop.mediaplayer} />
            ) : null}
            {prop.textSection ? (
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                  <div className="mx-auto relative w-full md:w-8/12">
                    {prop.textSection.map((textProp, textKey) => {
                      if (textProp.title) {
                        return (
                          <h3
                            key={textKey}
                            className="text-3xl font-bold leading-normal mt-0 mb-2"
                          >
                            {textProp.title}
                          </h3>
                        );
                      } else if (textProp.subtitle) {
                        return (
                          <h6
                            key={textKey}
                            className="text-lg mt-2 mb-0 text-blueGray-400"
                          >
                            {textProp.subtitle}
                          </h6>
                        );
                      } else if (textProp.quote) {
                        return (
                          <p
                            key={textKey}
                            className="text-xl text-blueGray-500 mx-0 my-12 block pl-4 border-l border-blueGray-200 border-l-2"
                          >
                            "{textProp.quote}"
                            <br />
                            <small className="mt-2 font-semibold text-blueGray-700">
                              {textProp.author}
                            </small>
                          </p>
                        );
                      } else {
                        return (
                          <p
                            key={textKey}
                            className="mb-4 text-lg text-blueGray-500"
                          >
                            {textProp.description}
                          </p>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        );
      })}
    </>
  );
}

Blogs4.defaultProps = {
  items: [],
};

Blogs4.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        // an object representing the props
        // that can be passed to our ImagePost component
        imagepost: PropTypes.object,
      }),
      PropTypes.shape({
        // an object representing the props
        // that can be passed to our MediaPlayerImageOnly component
        mediaplayer: PropTypes.object,
      }),
      PropTypes.shape({
        textSection: PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.shape({ title: PropTypes.string }),
            PropTypes.shape({ subtitle: PropTypes.string }),
            PropTypes.shape({ description: PropTypes.string }),
            PropTypes.shape({
              quote: PropTypes.string,
              author: PropTypes.string,
            }),
          ])
        ),
      }),
    ])
  ),
};
