import "components/Elements/Radio.js"
import Radio

const passProps = {
  label: "My new radio",
  name: "docs-radio-1",
};
const props = `Radio.defaultProps = {};
// you can also pass additional props
// such as defaultValue, value, onChange, onClick etc.
Radio.propTypes = {
  label: PropTypes.string,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Radio"
import Radio

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Radio {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Radio,
  componentName: "Radio",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
