import card from "_texts/blog/cards/cardblogillustration.js";

const textProps = {
  heading2badge: {
    badge: {
      color: "red",
      children: "Our articles",
    },
    title: "Because it's about motivating the doers",
    description:
      "Am I some sort of a maniac? Probably, since I like to throw money at my car. I've already got 260 HP, all rivals look at me.",
    alignment: "center",
  },
  cards: [
    {
      ...card,
    },
    {
      image: require("assets/img/illustrations/p22.png").default,
      title: "Premium",
      description:
        "Colors are good, before somebody tells you you shouldn’t like pink because that’s for girls.",
      link: {
        href: "#pablo",
      },
    },
    {
      image: require("assets/img/illustrations/p7.svg").default,
      title: "Focus",
      description:
        "Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people.",
      link: {
        href: "#pablo",
      },
    },
  ],
};
export default textProps;
