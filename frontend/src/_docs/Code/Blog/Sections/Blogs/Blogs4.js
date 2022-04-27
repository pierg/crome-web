import Blogs4 from "components/Sections/Blog/Blogs/Blogs4.js";
import passProps from "_texts/blog/blogs/blogs4.js";
const props = `Blogs4.defaultProps = {
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
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Blogs4 from "@notus-pro/react/Blogs4";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Blogs4 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Blogs4,
  componentName: "Blogs4",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
