import "react"
import "react-router-dom"
import React
import { useLocation }

// components
import "components/Cards/Auth/CardLoginSocial.js"
import "components/Footers/Auth/FooterAuth.js"
import "components/Navbars/NavbarLinks.js"
import CardLoginSocial
import FooterAuth
import NavbarLinks

// texts
import "_texts/auth/cards/cardloginsocial.js"
import "_texts/auth/footers/footerauth.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import cardloginsocial
import footerauth
import navbarlinkslanding1

export default function Login1() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <CardLoginSocial {...cardloginsocial} />
              </div>
            </div>
          </div>
          <FooterAuth {...footerauth} />
        </section>
      </main>
    </>
  );
}
