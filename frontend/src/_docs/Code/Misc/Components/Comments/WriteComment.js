import "_texts/misc/content/writecomment.js"
import "components/Content/WriteComment.js"
import passProps
import WriteComment

const props = `WriteComment.defaultProps = {
  input: {},
};
WriteComment.propTypes = {
  image: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Input component element
  // NOTE: if you wish to generate a textarea, you will need to pass
  // // // inside this object >> type: "textarea"
  // // // full example >> input: { type: "textarea" }
  input: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/WriteComment"
import WriteComment

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <WriteComment {...props} />
    </>
  );
}`;

const docsObjects = {
  component: WriteComment,
  componentName: "WriteComment",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
