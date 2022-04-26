// components
import PresentationCards from "_docs/Code/Presentation/Components/Cards/index.js";
import PresentationFooters from "_docs/Code/Presentation/Components/Footers/index.js";
import PresentationHeaders from "_docs/Code/Presentation/Components/Headers/index.js";
import PresentationInfoAreas from "_docs/Code/Presentation/Components/InfoAreas/index.js";
import PresentationMaps from "_docs/Code/Presentation/Components/Maps/index.js";
import PresentationMediaPlayer from "_docs/Code/Presentation/Components/MediaPlayer/index.js";
import PresentationNavbars from "_docs/Code/Presentation/Components/Navbars/index.js";
import PresentationPreFooters from "_docs/Code/Presentation/Components/PreFooters/index.js";
// sections
import PresentationBlogs from "_docs/Code/Presentation/Sections/Blogs/index.js";
import PresentationContact from "_docs/Code/Presentation/Sections/Contact/index.js";
import PresentationHero from "_docs/Code/Presentation/Sections/Hero/index.js";
import PresentationPricing from "_docs/Code/Presentation/Sections/Pricing/index.js";
import PresentationTeams from "_docs/Code/Presentation/Sections/Teams/index.js";
// pages
import PresentationLandings from "_docs/Code/Presentation/Pages/Landing/index.js";
import PresentationAboutUs from "_docs/Code/Presentation/Pages/AboutUs/index.js";
import PresentationContactUs from "_docs/Code/Presentation/Pages/ContactUs/index.js";

const routesObject = {
  id: "presentation-id",
  title: "Presentation",
  description:
    "A presentation page is defined as a page built to display information, for example information about the business, its employees, customers etc.",
  sections: [
    {
      id: "presentation-id-components",
      title: "Components",
      components: [
        {
          link: "/components/presentation/components/cards",
          image: require("assets/img/components/presentation/presentation-components-cards.jpg")
            .default,
          title: "Cards",

          components: PresentationCards,
        },
        {
          link: "/components/presentation/components/footers",
          image: require("assets/img/components/presentation/presentation-components-footers.jpg")
            .default,
          title: "Footers",

          components: PresentationFooters,
        },
        {
          link: "/components/presentation/components/headers",
          image: require("assets/img/components/presentation/presentation-components-headers.jpg")
            .default,
          title: "Headers",

          components: PresentationHeaders,
        },
        {
          link: "/components/presentation/components/info-areas",
          image: require("assets/img/components/presentation/presentation-components-infoareas.jpg")
            .default,
          title: "InfoAreas",

          components: PresentationInfoAreas,
        },
        {
          link: "/components/presentation/components/maps",
          image: require("assets/img/components/presentation/presentation-components-maps.jpg")
            .default,
          title: "Maps",

          components: PresentationMaps,
        },
        {
          link: "/components/presentation/components/media-player",
          image: require("assets/img/components/presentation/presentation-components-mediaplayer.jpg")
            .default,
          title: "Media Player",

          components: PresentationMediaPlayer,
        },
        {
          link: "/components/presentation/components/navbars",
          image: require("assets/img/components/presentation/presentation-components-navbars.jpg")
            .default,
          title: "Navbars",

          components: PresentationNavbars,
        },
        {
          link: "/components/presentation/components/pre-footers",
          image: require("assets/img/components/presentation/presentation-components-prefooters.jpg")
            .default,
          title: "PreFooters",

          components: PresentationPreFooters,
        },
      ],
    },
    {
      id: "presentation-id-sections",
      title: "Sections",
      components: [
        {
          link: "/components/presentation/sections/blogs",
          image: require("assets/img/components/presentation/presentation-sections-blogs.jpg")
            .default,
          title: "Blogs",

          components: PresentationBlogs,
        },
        {
          link: "/components/presentation/sections/contact",
          image: require("assets/img/components/presentation/presentation-sections-contact.jpg")
            .default,
          title: "Contact",

          components: PresentationContact,
        },
        {
          link: "/components/presentation/sections/hero",
          image: require("assets/img/components/presentation/presentation-sections-hero.jpg")
            .default,
          title: "Hero",

          components: PresentationHero,
        },
        {
          link: "/components/presentation/sections/pricing",
          image: require("assets/img/components/presentation/presentation-sections-pricing.jpg")
            .default,
          title: "Pricing",

          components: PresentationPricing,
        },
        {
          link: "/components/presentation/sections/teams",
          image: require("assets/img/components/presentation/presentation-sections-teams.jpg")
            .default,
          title: "Teams",

          components: PresentationTeams,
        },
      ],
    },
    {
      id: "presentation-id-pages",
      title: "Pages",
      components: [
        {
          link: "/components/presentation/pages/landing",
          image: require("assets/img/components/presentation/presentation-pages-landing.jpg")
            .default,
          title: "Landing",

          components: PresentationLandings,
        },
        {
          link: "/components/presentation/pages/about-us",
          image: require("assets/img/components/presentation/presentation-pages-about-us.jpg")
            .default,
          title: "About us",

          components: PresentationAboutUs,
        },
        {
          link: "/components/presentation/pages/contact-us",
          image: require("assets/img/components/presentation/presentation-pages-contact-us.jpg")
            .default,
          title: "Contact us",

          components: PresentationContactUs,
        },
      ],
    },
  ],
};
export default routesObject;
