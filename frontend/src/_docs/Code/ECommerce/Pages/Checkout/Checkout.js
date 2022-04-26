import Checkout from "views/e-commerce/Checkout.js";
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimagetitlesmallcentercheckout from "_texts/e-commerce/headers/headerimagetitlesmallcentercheckout.js";
import cardproductscheckout from "_texts/e-commerce/cards/cardproductscheckout.js";
import cardbilling from "_texts/e-commerce/cards/cardbilling.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import HeaderImageTitleSmallCenter from "@notus-pro/react/HeaderImageTitleSmallCenter";
import CardProductsCheckout from "@notus-pro/react/CardProductsCheckout";
import CardBilling from "@notus-pro/react/CardBilling";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";

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
