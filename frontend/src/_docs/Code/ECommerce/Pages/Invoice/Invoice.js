import "_texts/e-commerce/cards/cardinvoice.js"
import "_texts/e-commerce/headers/headerimagetitlesmallcenterinvoice.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "views/e-commerce/Invoice.js"
import cardinvoice
import footersmall
import headerimagetitlesmallcenterinvoice
import Invoice
import navbarlinkslanding1
import prefooterlarge

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Button"
import "@notus-pro/react/CardInvoice"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/HeaderImageTitleSmallCenter"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import Button
import CardInvoice
import FooterSmall
import HeaderImageTitleSmallCenter
import NavbarLinks
import PreFooterLarge

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
