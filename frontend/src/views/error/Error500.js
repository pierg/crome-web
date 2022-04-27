import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
import "components/Sections/Error/Error1.js"
import Error1

// components
import "components/Navbars/NavbarLinks.js"
import NavbarLinks

// texts for sections as props
import "_texts/error/error1error500.js"
import error1error500

// texts for components as props
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import navbarlinkslanding2

export default function Error500() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <Error1 {...error1error500} />
    </>
  );
}
