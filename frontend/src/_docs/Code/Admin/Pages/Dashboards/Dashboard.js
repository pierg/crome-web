import Dashboard from "views/admin/Dashboard.js";
import sidebar from "_texts/admin/sidebar/sidebar.js";
import navbarsearchusersettings2 from "_texts/admin/navbars/navbarsearchusersettings2.js";
import headerstatcards from "_texts/admin/headers/headerstatcards.js";
import cardchartjsdashboard1 from "_texts/admin/cards/cardchartjsdashboard1.js";
import cardchartjsdashboard2 from "_texts/admin/cards/cardchartjsdashboard2.js";
import cardfulltabledashboard1 from "_texts/admin/cards/cardfulltabledashboard1.js";
import cardfulltabledashboard2 from "_texts/admin/cards/cardfulltabledashboard2.js";
import footeradmin from "_texts/admin/footers/footeradmin.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Sidebar from "@notus-pro/react/Sidebar";
import NavbarSearchUser from "@notus-pro/react/NavbarSearchUser";
import HeaderStatCards from "@notus-pro/react/HeaderStatCards";
import CardChartJS from "@notus-pro/react/CardChartJS";
import CardFullTable from "@notus-pro/react/CardFullTable";
import FooterAdmin from "@notus-pro/react/FooterAdmin";
// props
const sidebar = ${JSON.stringify(sidebar)};
const navbarsearchusersettings2 = ${JSON.stringify(navbarsearchusersettings2)};
const headerstatcards = ${JSON.stringify(headerstatcards)};
const cardchartjsdashboard1 = ${JSON.stringify(cardchartjsdashboard1)};
const cardchartjsdashboard2 = ${JSON.stringify(cardchartjsdashboard2)};
const cardfulltabledashboard1 = ${JSON.stringify(cardfulltabledashboard1)};
const cardfulltabledashboard2 = ${JSON.stringify(cardfulltabledashboard2)};
const footeradmin = ${JSON.stringify(footeradmin)};

export default function Dashboard() {
  return (
    <>
      <Sidebar {...sidebar} />
      <div className="relative md:ml-64 bg-blueGray-200">
        <NavbarSearchUser {...navbarsearchusersettings2} />
        <HeaderStatCards {...headerstatcards} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardChartJS {...cardchartjsdashboard1} />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CardChartJS {...cardchartjsdashboard2} />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardFullTable {...cardfulltabledashboard1} />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CardFullTable {...cardfulltabledashboard2} />
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
  component: Dashboard,
  componentName: "Dashboard",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses:
      "w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden",
  },
};
export default docsObjects;
