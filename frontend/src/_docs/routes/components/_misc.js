// building-blocks
import Cards from "_docs/Code/Misc/BuildingBlocks/Cards/index.js";
import Navbars from "_docs/Code/Misc/BuildingBlocks/Navbars/index.js";
// components
import Accordions from "_docs/Code/Misc/Components/Accordions/index.js";
import Alerts from "_docs/Code/Misc/Components/Alerts/index.js";
import Badges from "_docs/Code/Misc/Components/Badges/index.js";
import Buttons from "_docs/Code/Misc/Components/Buttons/index.js";
import SocialButtons from "_docs/Code/Misc/Components/SocialButtons/index.js";
import ComponentsCards from "_docs/Code/Misc/Components/Cards/index.js";
import Comments from "_docs/Code/Misc/Components/Comments/index.js";
import Dropdowns from "_docs/Code/Misc/Components/Dropdowns/index.js";
import Inputs from "_docs/Code/Misc/Components/Inputs/index.js";
import Forms from "_docs/Code/Misc/Components/Forms/index.js";
import Headers from "_docs/Code/Misc/Components/Headers/index.js";
import Headings from "_docs/Code/Misc/Components/Headings/index.js";
import Images from "_docs/Code/Misc/Components/Images/index.js";
import InfoAreas from "_docs/Code/Misc/Components/InfoAreas/index.js";
import MediaPlayers from "_docs/Code/Misc/Components/MediaPlayers/index.js";
import Pagination from "_docs/Code/Misc/Components/Pagination/index.js";
import Ratings from "_docs/Code/Misc/Components/Ratings/index.js";
import Skews from "_docs/Code/Misc/Components/Skews/index.js";
// sections
import Blogs from "_docs/Code/Misc/Sections/Blogs/index.js";
import ContactUs from "_docs/Code/Misc/Sections/ContactUs/index.js";
import FAQ from "_docs/Code/Misc/Sections/FAQ/index.js";
import Features from "_docs/Code/Misc/Sections/Features/index.js";
import Pricing from "_docs/Code/Misc/Sections/Pricing/index.js";
import Projects from "_docs/Code/Misc/Sections/Projects/index.js";
import Teams from "_docs/Code/Misc/Sections/Teams/index.js";
import Testimonials from "_docs/Code/Misc/Sections/Testimonials/index.js";

const routesObject = {
  id: "misc-id",
  title: "Misc",
  description:
    "Components consisting of a mixture of various things that are not usually connected with each other.",
  sections: [
    {
      id: "misc-id-building-blocks",
      title: "Building Blocks",
      components: [
        {
          link: "/components/misc/building-blocks/cards",
          image: require("assets/img/components/misc/buildingsblocks/misc-buildingblocks-cards.jpg")
            .default,
          title: "Cards",
          components: Cards,
        },
        {
          link: "/components/misc/building-blocks/navbars",
          image: require("assets/img/components/misc/buildingsblocks/misc-buildingblocks-navbars.jpg")
            .default,
          title: "Navbars",
          components: Navbars,
        },
      ],
    },
    {
      id: "misc-id-components",
      title: "Components",
      components: [
        {
          link: "/components/misc/components/accordions",
          image: require("assets/img/components/misc/components/misc-components-accordions.jpg")
            .default,
          title: "Accordions",
          components: Accordions,
        },
        {
          link: "/components/misc/components/alerts",
          image: require("assets/img/components/misc/components/misc-components-alerts.jpg")
            .default,
          title: "Alerts",
          components: Alerts,
        },
        {
          link: "/components/misc/components/badges",
          image: require("assets/img/components/misc/components/misc-components-badges.jpg")
            .default,
          title: "Badges",
          components: Badges,
        },
        {
          link: "/components/misc/components/buttons",
          image: require("assets/img/components/misc/components/misc-components-buttons.jpg")
            .default,
          title: "Buttons",
          components: Buttons,
        },
        {
          link: "/components/misc/components/social-buttons",
          image: require("assets/img/components/misc/components/misc-components-socialbuttons.jpg")
            .default,
          title: "Social Buttons",
          components: SocialButtons,
        },
        {
          link: "/components/misc/components/cards",
          image: require("assets/img/components/misc/components/misc-components-cards.jpg")
            .default,
          title: "Cards",
          components: ComponentsCards,
        },
        {
          link: "/components/misc/components/comments",
          image: require("assets/img/components/misc/components/misc-components-comments.jpg")
            .default,
          title: "Comments",
          components: Comments,
        },
        {
          link: "/components/misc/components/dropdowns",
          image: require("assets/img/components/misc/components/misc-components-dropdowns.jpg")
            .default,
          title: "Dropdowns",
          components: Dropdowns,
        },
        {
          link: "/components/misc/components/inputs",
          image: require("assets/img/components/misc/components/misc-components-inputs.jpg")
            .default,
          title: "Inputs",
          components: Inputs,
        },
        {
          link: "/components/misc/components/forms",
          image: require("assets/img/components/misc/components/misc-components-forms.jpg")
            .default,
          title: "Forms",
          components: Forms,
        },
        {
          link: "/components/misc/components/headers",
          image: require("assets/img/components/misc/components/misc-components-headers.jpg")
            .default,
          title: "Headers",
          components: Headers,
        },
        {
          link: "/components/misc/components/headings",
          image: require("assets/img/components/misc/components/misc-components-headings.jpg")
            .default,
          title: "Headings",
          components: Headings,
        },
        {
          link: "/components/misc/components/images",
          image: require("assets/img/components/misc/components/misc-components-images.jpg")
            .default,
          title: "Images",
          components: Images,
        },
        {
          link: "/components/misc/components/info-areas",
          image: require("assets/img/components/misc/components/misc-components-infoareas.jpg")
            .default,
          title: "Info Areas",
          components: InfoAreas,
        },
        {
          link: "/components/misc/components/media-players",
          image: require("assets/img/components/misc/components/misc-components-mediaplayers.jpg")
            .default,
          title: "Media Players",
          components: MediaPlayers,
        },
        {
          link: "/components/misc/components/pagination",
          image: require("assets/img/components/misc/components/misc-components-pagination.jpg")
            .default,
          title: "Pagination",
          components: Pagination,
        },
        {
          link: "/components/misc/components/ratings",
          image: require("assets/img/components/misc/components/misc-components-ratings.jpg")
            .default,
          title: "Ratings",
          components: Ratings,
        },
        {
          link: "/components/misc/components/skews",
          image: require("assets/img/components/misc/components/misc-components-skew.jpg")
            .default,
          title: "Skews",
          components: Skews,
        },
      ],
    },
    {
      id: "misc-id-sections",
      title: "Sections",
      components: [
        {
          link: "/components/misc/sections/blogs",
          image: require("assets/img/components/misc/sections/misc-sections-blogs.jpg")
            .default,
          title: "Blogs",
          components: Blogs,
        },
        {
          link: "/components/misc/sections/contact-us",
          image: require("assets/img/components/misc/sections/misc-sections-contactus.jpg")
            .default,
          title: "ContactUs",
          components: ContactUs,
        },
        {
          link: "/components/misc/sections/faq",
          image: require("assets/img/components/misc/sections/misc-sections-faq.jpg")
            .default,
          title: "FAQ",
          components: FAQ,
        },
        {
          link: "/components/misc/sections/features",
          image: require("assets/img/components/misc/sections/misc-sections-features.jpg")
            .default,
          title: "Features",
          components: Features,
        },
        {
          link: "/components/misc/sections/pricing",
          image: require("assets/img/components/misc/sections/misc-sections-pricing.jpg")
            .default,
          title: "Pricing",
          components: Pricing,
        },
        {
          link: "/components/misc/sections/projects",
          image: require("assets/img/components/misc/sections/misc-sections-projects.jpg")
            .default,
          title: "Projects",
          components: Projects,
        },
        {
          link: "/components/misc/sections/teams",
          image: require("assets/img/components/misc/sections/misc-sections-teams.jpg")
            .default,
          title: "Teams",
          components: Teams,
        },
        {
          link: "/components/misc/sections/testimonials",
          image: require("assets/img/components/misc/sections/misc-sections-testimonials.jpg")
            .default,
          title: "Testimonials",
          components: Testimonials,
        },
      ],
    },
  ],
};
export default routesObject;
