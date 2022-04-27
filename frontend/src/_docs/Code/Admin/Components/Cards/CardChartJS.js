import CardChartJS from "components/Cards/Admin/CardChartJS.js";
import passProps from "_texts/admin/cards/cardchartjsdashboard1.js";
const props = `CardChartJS.defaultProps = {
  chart: {},
  color: "white",
  children: null,
};

CardChartJS.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
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
  // this is the chart config object
  // for more information, please check https://www.chartjs.org/?ref=creativetim
  chart: PropTypes.object,
  // this will appear at the bottom of the Table, for example,
  // you can use this to add a button that changes something inside the chart
  children: PropTypes.node,
};`;
const description = "";

const newProps = {
  ...passProps,
  color: "'<<props-here>>'",
};

const preview = `import React from "react";

// @notus-pro/react
import CardChartJS from "@notus-pro/react/CardChartJS";

const props = ${JSON.stringify(newProps)}

export default function Example() {
  return (
    <>
      <CardChartJS {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardChartJS,
  componentName: "CardChartJS",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    cardchartjs: true,
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
    defaultColor: "indigo",
  },
};
export default docsObjects;
