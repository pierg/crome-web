import React from "react";
import PropTypes from "prop-types";
// components
import NavbarLinks from "../../../components/Navbars/NavbarLinks.js";
import PreFooterLarge from "../../../components/PreFooters/PreFooterLarge.js";
import FooterSmall from "../../../components/Footers/Landing/FooterSmall.js";

export default function Auth3({ children, footer, navbar, prefooter, color }) {
  const bgColor = {
    "purple-indigo":
      "from-purple-900 to-indigo-900 bg-indigo-900 bg-indigo-900",
    "orange-red": "from-orange-900 to-red-900 bg-red-900 bg-red-900",
    "amber-orange": "from-amber-900 to-orange-900 bg-orange-900 bg-orange-900",
    "emerald-teal": "from-emerald-900 to-teal-900 bg-teal-900 bg-teal-900",
    "lightBlue-indigo":
      "from-lightBlue-900 to-indigo-900 bg-indigo-900 bg-indigo-900",
    "pink-purple": "from-pink-900 to-purple-900 bg-purple-900 bg-purple-900",
  };
  return (
    <>
      {navbar ? <NavbarLinks {...navbar} /> : null}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className={
              "absolute top-0 w-full h-full bg-no-repeat bg-full bg-gradient-to-r  " +
              bgColor[color]
            }
          >
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
            {children ? (
              children
            ) : (
              <div className="relative w-full h-600-px bg-white text-center flex flex-col items-center justify-center content-center border border-solid border-blueGray-200 rounded p-40">
                <h1 className="text-6xl font-normal leading-normal mt-0 mb-2">
                  Here will be your content, instead of this box!
                </h1>
                <p>
                  You can add one of the width utility classes to make it a
                  little smaller.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {prefooter ? <PreFooterLarge {...prefooter} /> : null}
      {footer ? <FooterSmall {...footer} /> : null}
    </>
  );
}

Auth3.defaultProps = {
  children: undefined,
  color: "purple-indigo",
};

Auth3.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "purple-indigo",
    "orange-red",
    "amber-orange",
    "emerald-teal",
    "lightBlue-indigo",
    "pink-purple",
  ]),
  // props that you can pass to the NavbarLinks component
  // NOTE: if you do not pass this object,
  // // // the navbar will not be rendered
  navbar: PropTypes.object,
  // props that you can pass to the PreFooterLarge component
  // NOTE: if you do not pass this object,
  // // // the footer will not be rendered
  prefooter: PropTypes.object,
  // props that you can pass to the FooterSmall component
  // NOTE: if you do not pass this object,
  // // // the footer will not be rendered
  footer: PropTypes.object,
};
