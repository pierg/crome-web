import Login2 from "views/auth/Login2.js";
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimagetitlesmallcenter from "_texts/auth/headers/headerimagetitlesmallcenter.js";
import cardregister from "_texts/auth/cards/cardregister.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import HeaderImageTitleSmallCenter from "c@notus-pro/react/HeaderImageTitleSmallCenter";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
import CardRegister from "@notus-pro/react/CardRegister";
// texts as props
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const headerimagetitlesmallcenter = ${JSON.stringify(
  headerimagetitlesmallcenter
)};
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
