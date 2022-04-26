import Register2 from "views/auth/Register2.js";
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import cardloginregister from "_texts/auth/cards/cardloginregister.js";
import prefooterlargereset from "_texts/auth/prefooters/prefooterlargereset.js";
import footersmallreset from "_texts/auth/footers/footersmallreset.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import CardLoginRegister from "@notus-pro/react/CardLoginRegister";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
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
