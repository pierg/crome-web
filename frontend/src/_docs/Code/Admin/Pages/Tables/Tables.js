import "_texts/admin/cards/cardfulltable.js"
import "_texts/admin/footers/footeradmin.js"
import "_texts/admin/headers/headerstatcards.js"
import "_texts/admin/navbars/navbarsearchusersettings2.js"
import "_texts/admin/sidebar/sidebar.js"
import "views/admin/Tables.js"
import cardfulltable
import footeradmin
import headerstatcards
import navbarsearchusersettings2
import sidebar
import Tables

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardFullTable"
import "@notus-pro/react/FooterAdmin"
import "@notus-pro/react/HeaderStatCards"
import "@notus-pro/react/NavbarSearchUser"
import "@notus-pro/react/Sidebar"
import CardFullTable
import FooterAdmin
import HeaderStatCards
import NavbarSearchUser
import Sidebar

// texts as props
const sidebar = ${JSON.stringify(sidebar)};
const navbarsearchusersettings2 = ${JSON.stringify(navbarsearchusersettings2)};
const headerstatcards = ${JSON.stringify(headerstatcards)};
const cardfulltable = ${JSON.stringify(cardfulltable)};
const footeradmin = ${JSON.stringify(footeradmin)};

export default function Tables() {
  return (
    <>
      <Sidebar {...sidebar} />
      <div className="relative md:ml-64 bg-blueGray-200">
        <NavbarSearchUser {...navbarsearchusersettings2} />
        <HeaderStatCards {...headerstatcards} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
              <CardFullTable {...cardfulltable} />
            </div>
            <div className="w-full mb-12 px-4">
              <CardFullTable {...cardfulltable} color="lightBlue" />
            </div>
          </div>
          <FooterAdmin {...footeradmin} />
        </div>
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: Tables,
  componentName: "Tables",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses:
      "w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden",
  },
};
export default docsObjects;
