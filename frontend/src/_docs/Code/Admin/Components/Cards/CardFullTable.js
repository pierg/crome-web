import CardFullTable from "components/Cards/Admin/CardFullTable.js";
import passProps from "_texts/admin/cards/cardfulltable.js";
const dependencies = [
  {
    name: "Images Overlap",
    link:
      "/components/misc/components/images#misc-id-misc-id-components-imagesoverlap",
  },
  {
    name: "Progress",
    link:
      "/components/misc/components/forms#misc-id-misc-id-components-progress",
  },
  {
    name: "Dropdown Button",
    link:
      "/components/misc/components/dropdowns#misc-id-misc-id-components-dropdownbutton",
  },
];
const props = `CardFullTable.defaultProps = {
  head: [],
  body: [],
  children: null,
  color: "white",
};

CardFullTable.propTypes = {
  title: PropTypes.string,
  head: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.oneOf([
    "white",
    "light",
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
  body: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        // simple string
        PropTypes.string,
        // bold text
        PropTypes.shape({
          bold: PropTypes.string,
        }),
        // image and text
        PropTypes.shape({
          image: PropTypes.string,
          text: PropTypes.string,
        }),
        // round icon and text
        PropTypes.shape({
          text: PropTypes.string,
          color: PropTypes.oneOf([
            "white",
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
        // arrow icon and text
        PropTypes.shape({
          text: PropTypes.string,
          arrow: PropTypes.oneOf(["up", "down"]),
          color: PropTypes.oneOf([
            "white",
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
        PropTypes.shape({
          // props to pass to the ImagesOverlap component
          images: PropTypes.object,
        }),
        PropTypes.shape({
          text: PropTypes.string,
          // props to pass to the Progress component
          progress: PropTypes.object,
        }),
        PropTypes.shape({
          // props to pass to the DropdownButton component
          dropdown: PropTypes.object,
        }),
        // if you want to pass your own component
        // NOTE: your component might break this Card component
        PropTypes.node,
      ])
    )
  ),
  // this will appear at the bottom of the Table, for example,
  // you can use this to make a pagination component
  children: PropTypes.node,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardFullTable from "@notus-pro/react/CardFullTable";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <CardFullTable {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardFullTable,
  componentName: "CardFullTable",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
      "white",
      "light",
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
    ],
    defaultColor: "white",
  },
};
export default docsObjects;
