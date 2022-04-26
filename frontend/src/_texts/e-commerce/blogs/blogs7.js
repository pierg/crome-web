const textProps = {
  heading2badge: {
    badge: {
      color: "dark",
      children: "Have you seen us?",
    },
    title: "Our recent writings",
    description:
      "The time is now for it to be okay to be great. People in this world shun people for being great.",
    alignment: "left",
  },
  button: {
    color: "pink",
    children: "show more",
  },
  cards: [
    {
      width: "1/4",
      card: {
        image: require("assets/img/sections/josh-appel.jpg").default,
        subtitle: "New Challenges",
        title: "Touch on a trend",
        size: "sm",
        link: { href: "#pablo" },
      },
    },
    {
      width: "1/4",
      card: {
        image: require("assets/img/sections/john-hoang.jpg").default,
        subtitle: "New Opportunities",
        title: "Constantly growing",
        size: "sm",
        link: { href: "#pablo" },
      },
    },
    {
      width: "2/4",
      card: {
        image: require("assets/img/sections/kit-suman.jpg").default,
        subtitle: "Sales Leads",
        title: "Configure Blockchain Technology",
        size: "sm",
        link: { href: "#pablo" },
      },
    },
    {
      width: "2/4",
      card: {
        image: require("assets/img/sections/damian.jpg").default,
        subtitle: "AI at the Edge",
        title: "Research Byte",
        size: "sm",
        link: { href: "#pablo" },
      },
    },
    {
      width: "1/4",
      card: {
        image: require("assets/img/sections/ashim.jpg").default,
        subtitle: "Spectrum",
        title: "Data Virtualization",
        size: "sm",
        link: { href: "#pablo" },
      },
    },
    {
      width: "1/4",
      card: {
        image: require("assets/img/sections/odin.jpg").default,
        subtitle: "Touch on a trend",
        title: "New Challenges",
        size: "sm",
        link: { href: "#pablo" },
      },
    },
  ],
};
export default textProps;
