import "_texts/misc/cards/cardprojectteam.js"
import "components/Cards/Misc/CardProjectTeam.js"
import CardProjectTeam
import passProps

const dependencies = [
  {
    name: "Dropdown Button",
    link: "/components/misc/components/dropdowns#misc-id-misc-id-components-dropdownbutton",
  },
  {
    name: "Images Overlap",
    link: "/components/misc/components/images#misc-id-misc-id-components-imagesoverlap",
  },
];
const props = `CardProjectTeam.defaultProps = {
  icon: {},
  dropdown: {},
  imagesOverlap: {},
};
CardProjectTeam.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the DropdownButton component
  dropdown: PropTypes.object,
  // props to pass to the ImagesOverlap component
  imagesOverlap: PropTypes.object,
  icon: PropTypes.shape({
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
  }),
};`;
const description = "";
const preview = `import React from "react";

// sections
import "@notus-pro/react/CardProjectTeam"
import CardProjectTeam

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <CardProjectTeam
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardProjectTeam,
  componentName: "CardProjectTeam",
  passProps,
  description,
  props,
  preview,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2 lg:w-1/3",
  },
};
export default docsObjects;
