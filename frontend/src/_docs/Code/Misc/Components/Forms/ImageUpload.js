import ImageUpload from "components/Elements/ImageUpload.js";
import passProps from "_texts/misc/forms/imageupload.js";
const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `ImageUpload.defaultProps = {
  changeButton: {},
  removeButton: {},
  onChange: () => {},
  onRemove: () => {},
};

ImageUpload.propTypes = {
  // this is the default image that
  // appears when no image is uploaded
  placeholder: PropTypes.string,
  // props to pass to the change Button component
  changeButton: PropTypes.object,
  // props to pass to the remove Button component
  removeButton: PropTypes.object,
  // this function will get called when
  // clicking the changeButton
  // and it has two parameters, the image, and the image preview
  // example of usage: onChange={(image,imagePreviewUrl) => {console.log("image is :",image);console.log("image preview url is: ",imagePreviewUrl);}}
  onChange: PropTypes.func,
  // this function will get called when
  // clicking the removeButton, and does not have any params
  // example of usage: onRemove={() => console.log("remove happened")}
  onRemove: PropTypes.func,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import ImageUpload from "@notus-pro/react/ImageUpload";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <ImageUpload {...props} />
    </>
  );
}`;

const docsObjects = {
  component: ImageUpload,
  componentName: "ImageUpload",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
