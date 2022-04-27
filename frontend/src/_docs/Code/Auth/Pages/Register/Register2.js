import "_texts/auth/cards/cardloginregister.js"
import "_texts/auth/footers/footersmallreset.js"
import "_texts/auth/prefooters/prefooterlargereset.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "views/auth/Register2.js"
import cardloginregister
import footersmallreset
import navbarlinkslanding1
import prefooterlargereset
import Register2

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardLoginRegister"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import CardLoginRegister
import FooterSmall
import NavbarLinks
import PreFooterLarge

// texts as props
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const cardloginregister = ${JSON.stringify(cardloginregister)};
const prefooterlargereset = ${JSON.stringify(prefooterlargereset)};
const footersmallreset = ${JSON.stringify(footersmallreset)};

export default function Register2() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <div
        style={{
          backgroundImage:
            "url('" + require("assets/img/illustrations/register_bg.png").default + "')",
        }}
        className="bg-blueGray-800 relative py-24 bg-cover bg-50"
      >
        <div className="py-12 container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full lg:w-8/12">
              <CardLoginRegister {...cardloginregister} />
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
  component: Register2,
  componentName: "Register2",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
