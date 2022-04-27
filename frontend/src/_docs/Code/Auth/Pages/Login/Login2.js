import "_texts/auth/cards/cardregister.js"
import "_texts/auth/headers/headerimagetitlesmallcenter.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "views/auth/Login2.js"
import cardregister
import footersmall
import headerimagetitlesmallcenter
import Login2
import navbarlinkslanding1
import prefooterlarge

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardRegister"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import "c@notus-pro/react/HeaderImageTitleSmallCenter"
import CardRegister
import FooterSmall
import HeaderImageTitleSmallCenter
import NavbarLinks
import PreFooterLarge

// texts as props
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const headerimagetitlesmallcenter = ${JSON.stringify(headerimagetitlesmallcenter)};
const cardregister = ${JSON.stringify(cardregister)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};

export default function Login2() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcenter} />
      <section className="relative bg-blueGray-100 py-12 z-2">
        <div className="container mx-auto px-4">
          <div className="justify-between items-center flex flex-wrap -mx-4">
            <div
              className="mx-auto px-4 relative w-full lg:w-5/12 -mt-56"
            >
              <CardRegister {...cardregister} />
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
  component: Login2,
  componentName: "Login2",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
