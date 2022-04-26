const textProps = {
  heading3badge: {
    badge: { color: "red", children: "Have you seen us?" },
    title: "The latest accessories",
    description:
      "The time is now for it to be okay to be great. People in this world shun people for being great.",
    alignment: "left",
  },
  button: {
    color: "pink",
    children: "Load more...",
  },
  cards: [
    {
      image: require("assets/img/pages/hat.png").default,
      title: "Winter Hat",
      price: "$ 99",
      link: {
        href: "#pablo",
      },
    },
    {
      image: require("assets/img/pages/shorts.png").default,
      title: "Gucci Shorts",
      price: {
        old: "$ 879",
        new: "$ 499",
      },
      link: {
        href: "#pablo",
      },
    },
    {
      image: require("assets/img/pages/bracelet.png").default,
      title: "Ice Bracelet",
      price: "$ 19,999",
      link: {
        href: "#pablo",
      },
    },
    {
      image: require("assets/img/pages/bullet.png").default,
      title: "Necklace",
      price: "$ 229",
      link: {
        href: "#pablo",
      },
    },
  ],
};
export default textProps;
