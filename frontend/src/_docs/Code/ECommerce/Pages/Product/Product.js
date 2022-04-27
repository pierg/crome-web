import Product from "views/e-commerce/Product.js";
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import headerimagetitleleft from "_texts/e-commerce/headers/headerimagetitleleft.js";
import product1 from "_texts/e-commerce/sections/product1.js";
import testimonials1 from "_texts/e-commerce/sections/testimonials1.js";
import hero8 from "_texts/e-commerce/sections/hero8.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Product1 from "@notus-pro/react/Product1";
import Testimonials1 from "@notus-pro/react/Testimonials1";
import Hero8 from "@notus-pro/react/Hero8";
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import HeaderImageTitleLeft from "@notus-pro/react/HeaderImageTitleLeft";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
// texts as props
const navbarlinkslanding2 = ${JSON.stringify(navbarlinkslanding2)};
const headerimagetitleleft = ${JSON.stringify(headerimagetitleleft)};
const product1 = ${JSON.stringify(product1)};
const testimonials1 = ${JSON.stringify(testimonials1)};
const hero8 = ${JSON.stringify(hero8)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};

export default function Product() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderImageTitleLeft {...headerimagetitleleft} />
      <Product1 {...product1} />
      <Testimonials1 {...testimonials1} />
      <Hero8 {...hero8} />
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
`;

const docsObjects = {
  component: Product,
  componentName: "Product",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "relative w-full ct-docs-disable-nav-fixed",
  },
};
export default docsObjects;
