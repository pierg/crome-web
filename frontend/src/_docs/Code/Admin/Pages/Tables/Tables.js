import Tables from "views/admin/Tables.js";
import sidebar from "_texts/admin/sidebar/sidebar.js";
import navbarsearchusersettings2 from "_texts/admin/navbars/navbarsearchusersettings2.js";
import headerstatcards from "_texts/admin/headers/headerstatcards.js";
import cardfulltable from "_texts/admin/cards/cardfulltable.js";
import footeradmin from "_texts/admin/footers/footeradmin.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Sidebar from "@notus-pro/react/Sidebar";
import NavbarSearchUser from "@notus-pro/react/NavbarSearchUser";
import HeaderStatCards from "@notus-pro/react/HeaderStatCards";
import CardFullTable from "@notus-pro/react/CardFullTable";
import FooterAdmin from "@notus-pro/react/FooterAdmin";

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
