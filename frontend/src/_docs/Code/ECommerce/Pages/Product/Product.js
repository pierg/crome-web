import "_texts/e-commerce/headers/headerimagetitleleft.js"
import "_texts/e-commerce/sections/hero8.js"
import "_texts/e-commerce/sections/product1.js"
import "_texts/e-commerce/sections/testimonials1.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "views/e-commerce/Product.js"
import footersmall
import headerimagetitleleft
import hero8
import navbarlinkslanding2
import prefooterlarge
import Product
import product1
import testimonials1

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/HeaderImageTitleLeft"
import "@notus-pro/react/Hero8"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import "@notus-pro/react/Product1"
import "@notus-pro/react/Testimonials1"
import FooterSmall
import HeaderImageTitleLeft
import Hero8
import NavbarLinks
import PreFooterLarge
import Product1
import Testimonials1

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
