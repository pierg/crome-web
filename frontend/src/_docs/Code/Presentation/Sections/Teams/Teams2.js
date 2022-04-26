import Teams2 from "components/Sections/Presentation/Teams/Teams2.js";
import passProps from "_texts/presentation/teams/teams2.js";
const dependencies = [
  {
    name: "MediaPlayerTeamInfoSocial",
    link: "/components/presentation/components/media-player",
  },
  {
    name: "Heading2Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
];
const props = `Teams2.defaultProps = {
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
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Teams2 from "@notus-pro/react/Teams2";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Teams2 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Teams2,
  componentName: "Teams2",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
