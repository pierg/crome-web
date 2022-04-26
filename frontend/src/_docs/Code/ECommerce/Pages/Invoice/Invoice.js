import Invoice from "views/e-commerce/Invoice.js";
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimagetitlesmallcenterinvoice from "_texts/e-commerce/headers/headerimagetitlesmallcenterinvoice.js";
import cardinvoice from "_texts/e-commerce/cards/cardinvoice.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import HeaderImageTitleSmallCenter from "@notus-pro/react/HeaderImageTitleSmallCenter";
import CardInvoice from "@notus-pro/react/CardInvoice";
import Button from "@notus-pro/react/Button";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
// texts as props
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const headerimagetitlesmallcenterinvoice = ${JSON.stringify(
  headerimagetitlesmallcenterinvoice
)};
const cardinvoice = ${JSON.stringify(cardinvoice)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};

export default function Invoice() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcenterinvoice} />
      <section className="relative bg-blueGray-100 py-12 z-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full lg:w-10/12">
              <CardInvoice {...cardinvoice} />
              <div className="float-right">
                <Button color="pink" onClick={() => window.print()}>
                  <i className="fas fa-print mr-2"></i>
                  Print
                </Button>
              </div>
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
  component: Invoice,
  componentName: "Invoice",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
