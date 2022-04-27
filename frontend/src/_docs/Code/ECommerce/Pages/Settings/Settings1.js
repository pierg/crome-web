import "_texts/e-commerce/cards/carddetailsettingsuser.js"
import "_texts/e-commerce/headers/headerimagetitlesmallcentersettings.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "views/e-commerce/Settings1.js"
import carddetailsettingsuser
import footersmall
import headerimagetitlesmallcentersettings
import navbarlinkslanding1
import prefooterlarge
import Settings1

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardDetailSettingsUser"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/HeaderImageTitleSmallCenter"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import CardDetailSettingsUser
import FooterSmall
import HeaderImageTitleSmallCenter
import NavbarLinks
import PreFooterLarge

// texts as props
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const headerimagetitlesmallcentersettings = ${JSON.stringify(
  headerimagetitlesmallcentersettings
)};
const carddetailsettingsuser = ${JSON.stringify(carddetailsettingsuser)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};

export default function Settings() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcentersettings} />
      <section className="bg-blueGray-100 relative py-12 z-2">
        <div className="container mx-auto px-4 -mt-64">
          <div className="flex flex-wrap -mx-4">
            <div className="px-4 relative w-full">
              <CardDetailSettingsUser {...carddetailsettingsuser} />
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
  component: Settings1,
  componentName: "Settings1",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
