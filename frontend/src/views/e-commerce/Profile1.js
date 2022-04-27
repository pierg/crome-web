import React from "react";
import { useLocation } from "react-router-dom";

// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import HeaderImage from "components/Headers/ECommerce/HeaderImage.js";
import CardProfileFullPage from "components/Cards/ECommerce/CardProfileFullPage.js";
import FooterLarge from "components/Footers/Landing/FooterLarge.js";
// texts as props
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimage from "_texts/e-commerce/headers/headerimage.js";
import cardprofilefullpage from "_texts/e-commerce/cards/cardprofilefullpage.js";
import footerlarge from "_texts/presentation/footers/footerlarge.js";

export default function Profile1() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <main>
        <HeaderImage {...headerimage} />
        <section className="relative py-16 bg-blueGray-100">
          <div className="container mx-auto px-4 -mt-64">
            <CardProfileFullPage {...cardprofilefullpage} />
          </div>
        </section>
      </main>
      <div className="-mt-20">
        <FooterLarge {...footerlarge} />
      </div>
    </>
  );
}
