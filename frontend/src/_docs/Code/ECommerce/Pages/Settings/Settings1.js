import Settings1 from "views/e-commerce/Settings1.js";
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimagetitlesmallcentersettings from "_texts/e-commerce/headers/headerimagetitlesmallcentersettings.js";
import carddetailsettingsuser from "_texts/e-commerce/cards/carddetailsettingsuser.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import HeaderImageTitleSmallCenter from "@notus-pro/react/HeaderImageTitleSmallCenter";
import CardDetailSettingsUser from "@notus-pro/react/CardDetailSettingsUser";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
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
