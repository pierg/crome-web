import React from "react";
import { useLocation } from "react-router-dom";

// sections
import Error1 from "components/Sections/Error/Error1.js";
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
// texts for sections as props
import error1error500 from "_texts/error/error1error500.js";
// texts for components as props
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";

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
