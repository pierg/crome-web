import React from "react";
import { useLocation } from "react-router-dom";

// components
import Sidebar from "components/Sidebar/Sidebar.js";
import NavbarSearchUser from "components/Navbars/NavbarSearchUser.js";
import HeaderStatCards from "components/Headers/Admin/HeaderStatCards.js";
import CardSettingsLarge from "components/Cards/Admin/CardSettingsLarge.js";
import CardDashboardProfile from "components/Cards/Admin/CardDashboardProfile.js";
import FooterAdmin from "components/Footers/Admin/FooterAdmin.js";
// texts as props
import sidebar from "_texts/admin/sidebar/sidebar.js";
import navbarsearchusersettings2 from "_texts/admin/navbars/navbarsearchusersettings2.js";
import headerstatcards from "_texts/admin/headers/headerstatcards.js";
import cardsettingslarge from "_texts/admin/cards/cardsettingslarge.js";
import carddashboardprofile from "_texts/admin/cards/carddashboardprofile.js";
import footeradmin from "_texts/admin/footers/footeradmin.js";

export default function Settings2() {
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
              <CardSettingsLarge {...cardsettingslarge} />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CardDashboardProfile {...carddashboardprofile} />
            </div>
          </div>
          <FooterAdmin {...footeradmin} />
        </div>
      </div>
    </>
  );
}
