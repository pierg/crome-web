import "_texts/admin/footers/footeradmin.js"
import "_texts/admin/headers/headerstatcards.js"
import "_texts/admin/navbars/navbarsearchusersettings2.js"
import "_texts/admin/sidebar/sidebar.js"
import "_texts/presentation/maps/map.js"
import "views/admin/Maps.js"
import footeradmin
import headerstatcards
import map
import Maps
import navbarsearchusersettings2
import sidebar

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Card"
import "@notus-pro/react/FooterAdmin"
import "@notus-pro/react/HeaderStatCards"
import "@notus-pro/react/Map"
import "@notus-pro/react/NavbarSearchUser"
import "@notus-pro/react/Sidebar"
import Card
import FooterAdmin
import HeaderStatCards
import Map
import NavbarSearchUser
import Sidebar

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
