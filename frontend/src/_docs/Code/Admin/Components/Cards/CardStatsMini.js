import CardStatsMini from "components/Cards/Admin/CardStatsMini.js";
import passProps from "_texts/admin/cards/cardstatsmini.js";
const props = `CardStatsMini.defaultProps = {
  statArrow: "up",
};

CardStatsMini.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardStatsMini from "@notus-pro/react/CardStatsMini";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/4">
        <CardStatsMini {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardStatsMini,
  componentName: "CardStatsMini",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2 lg:w-1/4",
  },
};
export default docsObjects;
