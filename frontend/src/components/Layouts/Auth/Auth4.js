import React from "react";
import PropTypes from "prop-types";
// components
import NavbarLinks from "../../../components/Navbars/NavbarLinks.js";
import PreFooterLarge from "../../../components/PreFooters/PreFooterLarge.js";
import FooterSmall from "../../../components/Footers/Landing/FooterSmall.js";

export default function Auth4({ children, footer, navbar, prefooter, image }) {
  return (
    <>
      {navbar ? <NavbarLinks {...navbar} /> : null}
      <div
        style={{
          backgroundImage: "url('" + image + "')",
        }}
        className="bg-blueGray-800 relative py-24 bg-cover bg-50"
      >
        <div className="py-12 container mx-auto px-4">
          {children ? (
            children
          ) : (
            <div className="relative w-full h-600-px bg-white text-center flex flex-col items-center justify-center content-center border border-solid border-blueGray-200 rounded p-40">
              <h1 className="text-6xl font-normal leading-normal mt-0 mb-2">
                Here will be your content, instead of this box!
              </h1>
              <p>
                You can add one of the width utility classes to make it a little
                smaller.
              </p>
            </div>
          )}
        </div>
      </div>
      {prefooter ? <PreFooterLarge {...prefooter} /> : null}
      {footer ? <FooterSmall {...footer} /> : null}
    </>
  );
}

Auth4.defaultProps = {
  children: undefined,
};

Auth4.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
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
