import "_texts/e-commerce/cards/cardbilling.js"
import "_texts/e-commerce/cards/cardproductscheckout.js"
import "_texts/e-commerce/headers/headerimagetitlesmallcentercheckout.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "views/e-commerce/Checkout.js"
import cardbilling
import cardproductscheckout
import Checkout
import footersmall
import headerimagetitlesmallcentercheckout
import navbarlinkslanding1
import prefooterlarge

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardBilling"
import "@notus-pro/react/CardProductsCheckout"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/HeaderImageTitleSmallCenter"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import CardBilling
import CardProductsCheckout
import FooterSmall
import HeaderImageTitleSmallCenter
import NavbarLinks
import PreFooterLarge

// texts as props
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const headerimagetitlesmallcentercheckout = ${JSON.stringify(
  headerimagetitlesmallcentercheckout
)};
const cardproductscheckout = ${JSON.stringify(cardproductscheckout)};
const cardbilling = ${JSON.stringify(cardbilling)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};

export default function Checkout() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcentercheckout} />
      <section className="relative bg-blueGray-100 py-12 z-2">
        <div className="container mx-auto px-4 -mt-64">
          <div className="flex flex-wrap -mx-4">
            <div className="px-4 relative w-full lg:w-4/12">
              <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-white">
                Order summary
              </h3>
              <CardProductsCheckout {...cardproductscheckout} />
            </div>
            <div className="px-4 relative w-full lg:w-8/12">
              <CardBilling {...cardbilling} />
            </div>
          </div>
        </div>
      </section>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
`;

const docsObjects = {
  component: Checkout,
  componentName: "Checkout",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
