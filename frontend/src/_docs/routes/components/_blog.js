// pages
import BlogPages from "_docs/Code/Blog/Pages/Blogs/index.js";
// sections
import Blogs from "_docs/Code/Blog/Sections/Blogs/index.js";
import Heroes from "_docs/Code/Blog/Sections/Heroes/index.js";
import Teams from "_docs/Code/Blog/Sections/Teams/index.js";
// components
import Cards from "_docs/Code/Blog/Components/Cards/index.js";
import Headers from "_docs/Code/Blog/Components/Headers/index.js";
import MediaPlayers from "_docs/Code/Blog/Components/MediaPlayers/index.js";
import PreFooters from "_docs/Code/Blog/Components/PreFooters/index.js";

const routesObject = {
  id: "blog-id",
  title: "Blog",
  description:
    "A blog is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries. ",
  sections: [
    {
      id: "blogs-id-components",
      title: "Components",
      components: [
        {
          link: "/components/blog/components/cards",
          image: require("assets/img/components/blog/components/blog-components-cards.jpg")
            .default,
          title: "Cards",
          components: Cards,
        },
        {
          link: "/components/blog/components/headers",
          image: require("assets/img/components/blog/components/blog-components-headers.jpg")
            .default,
          title: "Headers",
          components: Headers,
        },
        {
          link: "/components/blog/components/media-players",
          image: require("assets/img/components/blog/components/blog-components-mediaplayers.jpg")
            .default,
          title: "Media Players",
          components: MediaPlayers,
        },
        {
          link: "/components/blog/components/pre-footers",
          image: require("assets/img/components/blog/components/blog-components-prefooters.jpg")
            .default,
          title: "PreFooters",
          components: PreFooters,
        },
      ],
    },
    {
      id: "blogs-id-sections",
      title: "Sections",
      components: [
        {
          link: "/components/blog/sections/blogs",
          image: require("assets/img/components/blog/sections/blog-sections-blogs.jpg")
            .default,
          title: "Blogs",
          components: Blogs,
        },
        {
          link: "/components/blog/sections/heroes",
          image: require("assets/img/components/blog/sections/blog-sections-heroes.jpg")
            .default,
          title: "Heroes",
          components: Heroes,
        },
        {
          link: "/components/blog/sections/teams",
          image: require("assets/img/components/blog/sections/blog-sections-teams.jpg")
            .default,
          title: "Teams",
          components: Teams,
        },
      ],
    },
    {
      id: "blogs-id-pages",
      title: "Pages",
      components: [
        {
          link: "/components/blog/pages/blogs",
          image: require("assets/img/components/blog/blog-pages-blogs.jpg")
            .default,
          title: "Blogs",
          components: BlogPages,
        },
      ],
    },
  ],
};
export default routesObject;
