import Sections from "_docs/Code/Error/Sections/index.js";
import Pages from "_docs/Code/Error/Pages/index.js";

const routesObject = {
  id: "error-id",
  title: "Error",
  description:
    "Sometimes when you try to visit a web page, you're met with an HTTP error message. It's a message from the web server that something went wrong. In some cases it could be a mistake you made, but often, it's the site's fault.",
  sections: [
    {
      id: "error-id-examples",
      title: "Examples",
      components: [
        {
          link: "/components/error/sections",
          image: require("assets/img/components/error/error-examples-sections.jpg")
            .default,
          title: "Sections",
          components: Sections,
        },
        {
          link: "/components/error/pages",
          image: require("assets/img/components/error/error-examples-pages.jpg")
            .default,
          title: "Pages",
          components: Pages,
        },
      ],
    },
  ],
};
export default routesObject;
