import Register1 from "views/auth/Register1.js";
import cardloginsocialregister1 from "_texts/auth/cards/cardloginsocialregister1.js";
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import CardLoginSocial from "@notus-pro/react/CardLoginSocial";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
// texts as props
const cardloginsocialregister1 = ${JSON.stringify(cardloginsocialregister1)};
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};

export default function Register1() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-gradient-to-r from-purple-900 to-indigo-900 bg-indigo-900 bg-no-repeat bg-full">
            <span className="absolute bg-white opacity-10 w-32 h-32 rounded-full -left-1/25 bottom-auto"></span>
            <span className="absolute bg-white opacity-10 w-32 h-32 rounded-full right-1/25 top-10"></span>
            <span className="absolute bg-white opacity-30 w-32 h-32 rounded-full top-280-px right-1/20"></span>
            <span className="absolute bg-white opacity-15 w-32 h-32 rounded-full top-320-px right-7/100"></span>
            <span className="absolute bg-white opacity-5 w-32 h-32 rounded-full top-19/50 left-1/100 right-auto"></span>
            <span className="absolute bg-white opacity-15 w-48 h-48 rounded-full top-11/25 left-1/10 right-auto"></span>
            <span className="absolute bg-white opacity-4 w-32 h-32 rounded-full bottom-1/2 right-9/25"></span>
            <span className="absolute bg-white opacity-20 w-32 h-32 rounded-full botom-70-px right-1/50"></span>
          </div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-5/12 px-4">
                <CardLoginSocial {...cardloginsocialregister1} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}`;

const docsObjects = {
  component: Register1,
  componentName: "Register1",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
