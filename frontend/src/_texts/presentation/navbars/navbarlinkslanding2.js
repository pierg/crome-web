import dropdownnavbar from "_texts/misc/dropdowns/dropdownnavbar.js";

const textProps = {
  color: "dark",
  type: "fixed",
  logoImage:
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/creative-tim/logo.png",
  logoText: "Creative Tim",
  logoLink: {
    to: "/",
  },
  socials: [
    {
      icon: "facebook",
      text: "Share on Facebook",
      link: "https://www.facebook.com/CreativeTim",
    },
    {
      icon: "instagram",
      text: "Follow on Instagram",
      link: "https://www.instagram.com/creativetimofficial/",
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
  leftLinks: [
    {
      href: "#pablo",
      children: "Elements",
    },
    {
      href: "#pablo",
      children: "Sections",
    },
    {
      dropdown: true,
      ...dropdownnavbar,
    },
  ],
};
export default textProps;
