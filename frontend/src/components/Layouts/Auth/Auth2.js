import React from "react";
import PropTypes from "prop-types";
// components
import NavbarLinks from "../../../components/Navbars/NavbarLinks.js";
import HeaderImageTitleSmallCenter from "../../../components/Headers/Auth/HeaderImageTitleSmallCenter.js";
import PreFooterLarge from "../../../components/PreFooters/PreFooterLarge.js";
import FooterSmall from "../../../components/Footers/Landing/FooterSmall.js";

export default function Auth2({ children, footer, navbar, header, prefooter }) {
  return (
    <>
      {navbar ? <NavbarLinks {...navbar} /> : null}
      {header ? <HeaderImageTitleSmallCenter {...header} /> : null}
      <section className="relative bg-blueGray-100 py-12 z-2">
        <div className="container mx-auto px-4">
          {children ? (
            children
          ) : (
            <div className="relative w-full h-600-px bg-white text-center flex flex-col items-center justify-center content-center border border-solid border-blueGray-200 rounded p-40">
              <h1 className="text-6xl font-normal leading-normal mt-0 mb-2">
                Here will be your content, instead of this box!
              </h1>
              <p>
                You can add one of the width utility classes to make it a little
                smaller, and also, you can add one of the negative margin
                utility classes to make it render where the skew starts
              </p>
            </div>
          )}
        </div>
      </section>

      {prefooter ? <PreFooterLarge {...prefooter} /> : null}
      {footer ? <FooterSmall {...footer} /> : null}
    </>
  );
}

Auth2.defaultProps = {
  children: undefined,
};

Auth2.propTypes = {
  children: PropTypes.node,
  // props that you can pass to the NavbarLinks component
  // NOTE: if you do not pass this object,
  // // // the navbar will not be rendered
  navbar: PropTypes.object,
  // props that you can pass to the HeaderImageTitleSmallCenter component
  // NOTE: if you do not pass this object,
  // // // the navbar will not be rendered
  header: PropTypes.object,
  // props that you can pass to the PreFooterLarge component
  // NOTE: if you do not pass this object,
  // // // the footer will not be rendered
  prefooter: PropTypes.object,
  // props that you can pass to the FooterSmall component
  // NOTE: if you do not pass this object,
  // // // the footer will not be rendered
  footer: PropTypes.object,
};
