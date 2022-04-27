import "react"
import "react-router-dom"
import React
import { useLocation }

// components
import "components/Cards/ECommerce/CardProfileFullPage.js"
import "components/Footers/Landing/FooterLarge.js"
import "components/Headers/ECommerce/HeaderImage.js"
import "components/Navbars/NavbarLinks.js"
import CardProfileFullPage
import FooterLarge
import HeaderImage
import NavbarLinks

// texts as props
import "_texts/e-commerce/cards/cardprofilefullpage.js"
import "_texts/e-commerce/headers/headerimage.js"
import "_texts/presentation/footers/footerlarge.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import cardprofilefullpage
import footerlarge
import headerimage
import navbarlinkslanding1

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
