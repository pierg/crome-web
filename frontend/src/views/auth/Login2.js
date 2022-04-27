import "react"
import "react-router-dom"
import React
import { useLocation }

// components
import "components/Cards/Auth/CardRegister.js"
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/Auth/HeaderImageTitleSmallCenter.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import CardRegister
import FooterSmall
import HeaderImageTitleSmallCenter
import NavbarLinks
import PreFooterLarge

// texts as props
import "_texts/auth/cards/cardregister.js"
import "_texts/auth/headers/headerimagetitlesmallcenter.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import cardregister
import footersmall
import headerimagetitlesmallcenter
import navbarlinkslanding1
import prefooterlarge

export default function Login2() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcenter} />
      <section className="relative bg-blueGray-100 py-12 z-2">
        <div className="container mx-auto px-4">
          <div className="justify-between items-center flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full lg:w-5/12 -mt-56">
              <CardRegister {...cardregister} />
            </div>
          </div>
        </div>
      </section>

      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
