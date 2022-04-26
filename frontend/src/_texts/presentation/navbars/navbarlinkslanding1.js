import React from "react";
import dropdownnavbar from "_texts/misc/dropdowns/dropdownnavbar.js";

const textProps = {
  color: "transparent",
  type: "absolute",
  logoText: "Notus PRO React",
  logoLink: { to: "/" },
  leftLinks: [
    {
      href: "#pablo",
      children: (
        <>
          <i className="lg:text-blueGray-300 text-blueGray-500 far fa-file-alt text-lg leading-lg mr-2" />{" "}
          Docs
        </>
      ),
    },
  ],
  socials: [
    {
      icon: "facebook",
      text: "Share on Facebook",
      link: "https://www.facebook.com/CreativeTim",
    },
    {
      icon: "twitter",
      text: "Tweet on Twitter",
      link: "https://twitter.com/CreativeTim",
    },
    {
      icon: "github",
      text: "Star on Github",
      link: "https://github.com/creativetimofficial",
    },
  ],
  rightLinks: [
    {
      dropdown: true,
      ...dropdownnavbar,
    },
  ],
};
export default textProps;
