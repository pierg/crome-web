import CardProfileFullDetails from "components/Cards/Misc/CardProfileFullDetails.js";
import passProps from "_texts/misc/cards/cardprofilefulldetails.js";
const dependencies = [
  {
    name: "Images Overlap",
    link:
      "/components/misc/components/images#misc-id-misc-id-components-imagesoverlap",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `CardProfileFullDetails.defaultProps = {
  details: [],
  stats: [],
  team: {},
  button: {},
};

CardProfileFullDetails.propTypes = {
  image: PropTypes.string,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
  team: PropTypes.shape({
    title: PropTypes.string,
    // props to pass to the ImagesOverlap component
    imagesOverlap: PropTypes.object,
  }),
  // props to pass to the Button component
  button: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardProfileFullDetails from "@notus-pro/react/CardProfileFullDetails";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <CardProfileFullDetails
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardProfileFullDetails,
  componentName: "CardProfileFullDetails",
  passProps,
  description,
  props,
  preview,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "w-full lg:w-8/12",
  },
};
export default docsObjects;
