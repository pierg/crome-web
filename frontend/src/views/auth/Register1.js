import "react"
import "react-router-dom"
import React
import { useLocation }

// components
import "components/Cards/Auth/CardLoginSocial.js"
import "components/Footers/Landing/FooterSmall.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import CardLoginSocial
import FooterSmall
import NavbarLinks
import PreFooterLarge

// texts
import "_texts/auth/cards/cardloginsocialregister1.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import cardloginsocialregister1
import footersmall
import navbarlinkslanding1
import prefooterlarge

export default function Register1() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-gradient-to-r from-purple-900 to-indigo-900 bg-indigo-900 bg-no-repeat bg-full">
            <span className="absolute bg-white opacity-10 w-32 h-32 rounded-full -left-1/25 bottom-auto"></span>
            <span className="absolute bg-white opacity-10 w-32 h-32 rounded-full right-1/25 top-10"></span>
            <span className="absolute bg-white opacity-30 w-32 h-32 rounded-full top-280-px right-1/20"></span>
            <span className="absolute bg-white opacity-15 w-32 h-32 rounded-full top-320-px right-7/100"></span>
            <span className="absolute bg-white opacity-5 w-32 h-32 rounded-full top-19/50 left-1/100 right-auto"></span>
            <span className="absolute bg-white opacity-15 w-48 h-48 rounded-full top-11/25 left-1/10 right-auto"></span>
            <span className="absolute bg-white opacity-4 w-32 h-32 rounded-full bottom-1/2 right-9/25"></span>
            <span className="absolute bg-white opacity-20 w-32 h-32 rounded-full botom-70-px right-1/50"></span>
          </div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-5/12 px-4">
                <CardLoginSocial {...cardloginsocialregister1} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
