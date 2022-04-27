import Product1 from "components/Sections/ECommerce/Product/Product1.js";
import passProps from "_texts/e-commerce/sections/product1.js";
const dependencies = [
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "MediaPlayerImageLeftRightButtons",
    link:
      "/components/e-commerce/components/media-players#e-commerce-id-e-commerce-id-components-mediaplayerimageleftrightbuttons",
  },
  {
    name: "Incrementer",
    link:
      "/components/misc/components/forms#misc-id-misc-id-components-incrementer",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
  {
    name: "Ratings",
    link: "/components/misc/components/ratings",
  },
  {
    name: "Input",
    link: "/components/misc/components/inputs",
  },
  {
    name: "Select",
    link: "/components/misc/components/forms#misc-id-misc-id-components-select",
  },
];
const props = `Product1.defaultProps = {
  mediaplayer: {},
  incrementer: {},
  addToCart: {},
  inputs: [],
  ratings: {},
  heading2: null,
};
Product1.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the MediaPlayerImageLeftRightButtons component
  mediaplayer: PropTypes.object,
  // props to pass to the Incrementer component
  incrementer: PropTypes.object,
  // props to pass to the Button component
  addToCart: PropTypes.object,
  // props to pass to the Ratings component
  ratings: PropTypes.object,
  inputs: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string,
        // props to pass to the Input component
        input: PropTypes.object,
      }),
      PropTypes.shape({
        label: PropTypes.string,
        // props to pass to the Select component
        select: PropTypes.object,
      }),
    ])
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Product1 from "@notus-pro/react/Product1";

// texts as props
const product1 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Product1 {...product1} />
    </>
  );
}`;

const docsObjects = {
  component: Product1,
  componentName: "Product1",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
