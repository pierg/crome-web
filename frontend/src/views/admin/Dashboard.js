import React from "react";
import { useLocation } from "react-router-dom";

// components
import Sidebar from "components/Sidebar/Sidebar.js";
import NavbarSearchUser from "components/Navbars/NavbarSearchUser.js";
import HeaderStatCards from "components/Headers/Admin/HeaderStatCards.js";
import CardChartJS from "components/Cards/Admin/CardChartJS.js";
import CardFullTable from "components/Cards/Admin/CardFullTable.js";
import FooterAdmin from "components/Footers/Admin/FooterAdmin.js";
// texts as props
import sidebar from "_texts/admin/sidebar/sidebar.js";
import navbarsearchusersettings2 from "_texts/admin/navbars/navbarsearchusersettings2.js";
import headerstatcards from "_texts/admin/headers/headerstatcards.js";
import cardchartjsdashboard1 from "_texts/admin/cards/cardchartjsdashboard1.js";
import cardchartjsdashboard2 from "_texts/admin/cards/cardchartjsdashboard2.js";
import cardfulltabledashboard1 from "_texts/admin/cards/cardfulltabledashboard1.js";
import cardfulltabledashboard2 from "_texts/admin/cards/cardfulltabledashboard2.js";
import footeradmin from "_texts/admin/footers/footeradmin.js";

export default function Dashboard() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Sidebar {...sidebar} />
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavbarSearchUser {...navbarsearchusersettings2} />
        <HeaderStatCards {...headerstatcards} />
        <div className="px-4 md:px-6 mx-auto w-full -mt-24">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 px-4">
              <CardChartJS {...cardchartjsdashboard1} />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CardChartJS {...cardchartjsdashboard2} />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 px-4">
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
