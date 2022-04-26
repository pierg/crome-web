import cardproducttext from "_texts/e-commerce/cards/cardproducttext.js";

const textProps = {
  heading3badge: {
    badge: { color: "pink", children: "Have you seen us?" },
    title: "Our recent products",
    description:
      "The time is now for it to be okay to be great. People in this world shun people for being great.",
    alignment: "left",
  },
  cards: [
    {
      ...cardproducttext,
    },
    {
      image: require("assets/img/illustrations/p2.svg").default,
      icon: "fas fa-calendar-check",
      color: "red",
      text: "Fashion",
      description:
        "Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.",
      title: "Wardrobe essentials",
      link: {
        href: "#pablo",
      },
    },
    {
      image: require("assets/img/illustrations/linth3.svg").default,
      icon: "fas fa-calendar-check",
      color: "red",
      text: "Fashion",
      description:
        "Trends may come and go, but wardrobe essentials are here to stay. Basic pieces tend to be universal across.",
      title: "Wardrobe essentials",
      link: {
        href: "#pablo",
      },
    },
  ],
};
export default textProps;
