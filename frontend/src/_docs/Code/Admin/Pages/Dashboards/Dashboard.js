import "_texts/admin/cards/cardchartjsdashboard1.js"
import "_texts/admin/cards/cardchartjsdashboard2.js"
import "_texts/admin/cards/cardfulltabledashboard1.js"
import "_texts/admin/cards/cardfulltabledashboard2.js"
import "_texts/admin/footers/footeradmin.js"
import "_texts/admin/headers/headerstatcards.js"
import "_texts/admin/navbars/navbarsearchusersettings2.js"
import "_texts/admin/sidebar/sidebar.js"
import "views/admin/Dashboard.js"
import cardchartjsdashboard1
import cardchartjsdashboard2
import cardfulltabledashboard1
import cardfulltabledashboard2
import Dashboard
import footeradmin
import headerstatcards
import navbarsearchusersettings2
import sidebar

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardChartJS"
import "@notus-pro/react/CardFullTable"
import "@notus-pro/react/FooterAdmin"
import "@notus-pro/react/HeaderStatCards"
import "@notus-pro/react/NavbarSearchUser"
import "@notus-pro/react/Sidebar"
import CardChartJS
import CardFullTable
import FooterAdmin
import HeaderStatCards
import NavbarSearchUser
import Sidebar

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
