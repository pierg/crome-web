import "react"
import "react-router-dom"
import React
import { useLocation }

// components
import "components/Cards/Admin/CardDashboardProfile.js"
import "components/Cards/Admin/CardSettingsLarge.js"
import "components/Footers/Admin/FooterAdmin.js"
import "components/Headers/Admin/HeaderStatCards.js"
import "components/Navbars/NavbarSearchUser.js"
import "components/Sidebar/Sidebar.js"
import CardDashboardProfile
import CardSettingsLarge
import FooterAdmin
import HeaderStatCards
import NavbarSearchUser
import Sidebar

// texts as props
import "_texts/admin/cards/carddashboardprofile.js"
import "_texts/admin/cards/cardsettingslarge.js"
import "_texts/admin/footers/footeradmin.js"
import "_texts/admin/headers/headerstatcards.js"
import "_texts/admin/navbars/navbarsearchusersettings2.js"
import "_texts/admin/sidebar/sidebar.js"
import carddashboardprofile
import cardsettingslarge
import footeradmin
import headerstatcards
import navbarsearchusersettings2
import sidebar

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
