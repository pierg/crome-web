import React from "react";
import { useLocation } from "react-router-dom";

// components
import Sidebar from "components/Sidebar/Sidebar.js";
import NavbarSearchUser from "components/Navbars/NavbarSearchUser.js";
import HeaderStatCards from "components/Headers/Admin/HeaderStatCards.js";
import CardFullTable from "components/Cards/Admin/CardFullTable.js";
import FooterAdmin from "components/Footers/Admin/FooterAdmin.js";
// texts as props
import sidebar from "_texts/admin/sidebar/sidebar.js";
import navbarsearchusersettings2 from "_texts/admin/navbars/navbarsearchusersettings2.js";
import headerstatcards from "_texts/admin/headers/headerstatcards.js";
import cardfulltable from "_texts/admin/cards/cardfulltable.js";
import footeradmin from "_texts/admin/footers/footeradmin.js";

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
