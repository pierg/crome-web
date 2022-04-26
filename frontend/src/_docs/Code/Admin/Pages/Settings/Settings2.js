import Settings2 from "views/admin/Settings2.js";
import sidebar from "_texts/admin/sidebar/sidebar.js";
import navbarsearchusersettings2 from "_texts/admin/navbars/navbarsearchusersettings2.js";
import headerstatcards from "_texts/admin/headers/headerstatcards.js";
import cardsettingslarge from "_texts/admin/cards/cardsettingslarge.js";
import carddashboardprofile from "_texts/admin/cards/carddashboardprofile.js";
import footeradmin from "_texts/admin/footers/footeradmin.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Sidebar from "@notus-pro/react/Sidebar";
import NavbarSearchUser from "@notus-pro/react/NavbarSearchUser";
import HeaderStatCards from "@notus-pro/react/HeaderStatCards";
import CardSettingsLarge from "@notus-pro/react/CardSettingsLarge";
import CardDashboardProfile from "@notus-pro/react/CardDashboardProfile";
import FooterAdmin from "@notus-pro/react/FooterAdmin.js";

// texts as props
const sidebar = ${JSON.stringify(sidebar)};
const navbarsearchusersettings2 = ${JSON.stringify(navbarsearchusersettings2)};
const headerstatcards = ${JSON.stringify(headerstatcards)};
const cardsettingslarge = ${JSON.stringify(cardsettingslarge)};
const carddashboardprofile = ${JSON.stringify(carddashboardprofile)};
const footeradmin = ${JSON.stringify(footeradmin)};

export default function Settings2() {
  return (
    <>
      <Sidebar {...sidebar} />
      <div className="relative md:ml-64 bg-blueGray-200">
        <NavbarSearchUser {...navbarsearchusersettings2} />
        <HeaderStatCards {...headerstatcards} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4">
              <CardSettingsLarge {...cardsettingslarge} />
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <CardDashboardProfile {...carddashboardprofile} />
            </div>
          </div>
          <FooterAdmin {...footeradmin} />
        </div>
      </div>
    </>
  );
}`;

const docsObjects = {
  component: Settings2,
  componentName: "Settings2",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses:
      "w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden",
  },
};
export default docsObjects;
