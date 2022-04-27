import Maps from "views/admin/Maps.js";
import sidebar from "_texts/admin/sidebar/sidebar.js";
import navbarsearchusersettings2 from "_texts/admin/navbars/navbarsearchusersettings2.js";
import headerstatcards from "_texts/admin/headers/headerstatcards.js";
import map from "_texts/presentation/maps/map.js";
import footeradmin from "_texts/admin/footers/footeradmin.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Sidebar from "@notus-pro/react/Sidebar";
import NavbarSearchUser from "@notus-pro/react/NavbarSearchUser";
import HeaderStatCards from "@notus-pro/react/HeaderStatCards";
import Card from "@notus-pro/react/Card";
import Map from "@notus-pro/react/Map";
import FooterAdmin from "@notus-pro/react/FooterAdmin";

// texts as props
const sidebar = ${JSON.stringify(sidebar)};
const navbarsearchusersettings2 = ${JSON.stringify(navbarsearchusersettings2)};
const headerstatcards = ${JSON.stringify(headerstatcards)};
const map = ${JSON.stringify(map)};
const footeradmin = ${JSON.stringify(footeradmin)};

export default function Maps() {
  return (
    <>
      <Sidebar {...sidebar} />
      <div className="relative md:ml-64 bg-blueGray-200">
        <NavbarSearchUser {...navbarsearchusersettings2} />
        <HeaderStatCards {...headerstatcards} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap min-h-screen">
            <div className="w-full px-4">
              <Card>
                <Map {...map} />
              </Card>
            </div>
          </div>
          <FooterAdmin {...footeradmin} />
        </div>
      </div>
    </>
  );
}`;

const docsObjects = {
  component: Maps,
  componentName: "Maps",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses:
      "w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden",
  },
};
export default docsObjects;
