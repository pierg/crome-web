import "react"
import "react-router-dom"
import React
import { useLocation }

// components
import "components/Cards/Card.js"
import "components/Footers/Admin/FooterAdmin.js"
import "components/Headers/Admin/HeaderStatCards.js"
import "components/Maps/Map.js"
import "components/Navbars/NavbarSearchUser.js"
import "components/Sidebar/Sidebar.js"
import Card
import FooterAdmin
import HeaderStatCards
import Map
import NavbarSearchUser
import Sidebar

// texts as props
import "_texts/admin/footers/footeradmin.js"
import "_texts/admin/headers/headerstatcards.js"
import "_texts/admin/navbars/navbarsearchusersettings2.js"
import "_texts/admin/sidebar/sidebar.js"
import "_texts/presentation/maps/map.js"
import footeradmin
import headerstatcards
import map
import navbarsearchusersettings2
import sidebar

export default function Maps() {
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
}
