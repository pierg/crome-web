import "react"
import "react-router-dom"
import React
import { useLocation }

// components
import "components/Headers/Admin/HeaderStatCards.js"
import "components/Navbars/NavbarSearchUser.js"
import "components/Sidebar/Sidebar.js"
import HeaderStatCards
import NavbarSearchUser
import Sidebar

//import CardChartJS from "components/Cards/Admin/CardChartJS.js";
import "components/Cards/Admin/CardFullTable.js"
import "components/Footers/Admin/FooterAdmin.js"
import CardFullTable
import FooterAdmin

// texts as props
import "_texts/admin/headers/headerstatcards.js"
import "_texts/admin/navbars/navbarsearchusersettings2.js"
import "_texts/admin/sidebar/sidebar.js"
import headerstatcards
import navbarsearchusersettings2
import sidebar

// import cardchartjsdashboard1 from "_texts/admin/cards/cardchartjsdashboard1.js";
// import cardchartjsdashboard2 from "_texts/admin/cards/cardchartjsdashboard2.js";
import "_texts/admin/cards/cardfulltabledashboard1.js"
import "_texts/admin/cards/cardfulltabledashboard2.js"
import "_texts/admin/footers/footeradmin.js"
import cardfulltabledashboard1
import cardfulltabledashboard2
import footeradmin

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
              {/*<CardChartJS {...cardchartjsdashboard1} />*/}
            </div>
            <div className="w-full xl:w-4/12 px-4">
              {/*<CardChartJS {...cardchartjsdashboard2} />*/}
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
