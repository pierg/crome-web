import Reset from "views/auth/Reset.js";
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import cardresetpassword from "_texts/auth/cards/cardresetpassword.js";
import prefooterlargereset from "_texts/auth/prefooters/prefooterlargereset.js";
import footersmallreset from "_texts/auth/footers/footersmallreset.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import CardResetPassword from "@notus-pro/react/CardResetPassword";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
// texts as props
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const cardresetpassword = ${JSON.stringify(cardresetpassword)};
const prefooterlargereset = ${JSON.stringify(prefooterlargereset)};
const footersmallreset = ${JSON.stringify(footersmallreset)};

export default function Reset() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <div
        className="p-0 flex items-center overflow-hidden relative bg-blueGray-900 min-h-screen max-h-999-px"
      >
        <div
          className="absolute w-full h-full bg-cover bg-50"
          style={{
          backgroundImage: "url('" + require("assets/img/illustrations/reset.svg").default +"')"}}
        ></div>
        <div className="container mx-auto px-4">
          <div className="justify-center flex flex-wrap -mx-4">
            <div className="px-4 relative w-full lg:w-5/12 w-full md:w-8/12">
              <CardResetPassword {...cardresetpassword} />
            </div>
          </div>
        </div>
      </div>
      <PreFooterLarge {...prefooterlargereset} />
      <FooterSmall {...footersmallreset} />
    </>
  );
}
`;

const docsObjects = {
  component: Reset,
  componentName: "Reset",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
