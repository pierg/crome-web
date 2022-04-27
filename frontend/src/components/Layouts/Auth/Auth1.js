import React from "react";
import PropTypes from "prop-types";
// components
import NavbarLinks from "../../../components/Navbars/NavbarLinks.js";
import FooterAuth from "../../../components/Footers/Auth/FooterAuth.js";

export default function Auth1({ children, footer, navbar, image }) {
  return (
    <>
      {navbar ? <NavbarLinks {...navbar} /> : null}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url(" + image + ")",
            }}
          ></div>
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
          {footer ? <FooterAuth {...footer} /> : null}
        </section>
      </main>
    </>
  );
}

Auth1.defaultProps = {
  children: undefined,
};

Auth1.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  // props that you can pass to the NavbarLinks component
  // NOTE: if you do not pass this object,
  // // // the navbar will not be rendered
  navbar: PropTypes.object,
  // props that you can pass to the FooterAuth component
  // NOTE: if you do not pass this object,
  // // // the footer will not be rendered
  footer: PropTypes.object,
};
