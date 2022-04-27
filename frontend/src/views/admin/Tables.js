import "react"
import "react-router-dom"
import React
import { useLocation }

// components
import "components/Cards/Admin/CardFullTable.js"
import "components/Footers/Admin/FooterAdmin.js"
import "components/Headers/Admin/HeaderStatCards.js"
import "components/Navbars/NavbarSearchUser.js"
import "components/Sidebar/Sidebar.js"
import CardFullTable
import FooterAdmin
import HeaderStatCards
import NavbarSearchUser
import Sidebar

// texts as props
import "_texts/admin/cards/cardfulltable.js"
import "_texts/admin/footers/footeradmin.js"
import "_texts/admin/headers/headerstatcards.js"
import "_texts/admin/navbars/navbarsearchusersettings2.js"
import "_texts/admin/sidebar/sidebar.js"
import cardfulltable
import footeradmin
import headerstatcards
import navbarsearchusersettings2
import sidebar

export default function Tables() {
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
            <div className="w-full px-4">
              <CardFullTable {...cardfulltable} />
            </div>
            <div className="w-full px-4">
              <CardFullTable {...cardfulltable} color="blueGray" />
            </div>
          </div>
          <FooterAdmin {...footeradmin} />
        </div>
      </div>
    </>
  );
}
