import cardinfoiconbg from "_texts/e-commerce/cards/cardinfoiconbg.js";

const textProps = {
  heading2: {
    color: "teal",
    subtitle: "Have you seen us?",
    title: "Some of Our Awesome Projects",
    description:
      "The time is now for it to be okay to be great. People in this world shun people for being great.",
    alignment: "center",
    whiteContent: true,
  },
  cards: [
    {
      ...cardinfoiconbg,
    },
    {
      icon: "fas fa-book-reader",
      color: "emerald",
      title: "Looking great",
      description:
        "You have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s motivating the doers.",
      link: { href: "#pablo", children: "Check more" },
    },
    {
      icon: "fas fa-rocket",
      color: "red",
      title: "Developer first",
      description:
        "For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? I shure can!",
      link: { href: "#pablo", children: "Check more" },
    },
    {
      icon: "fas fa-heart",
      color: "blueGray",
      title: "Prepare launch",
      description:
        "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. It’s like a little kid, a little boy.",
      link: { href: "#pablo", children: "Check more" },
    },
    {
      icon: "fas fa-book-reader",
      color: "orange",
      title: "Premium Support",
      description:
        "Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you matters is the people who are sparked by it follow their dreams, too.",
      link: { href: "#pablo", children: "Check more" },
    },
    {
      icon: "fas fa-trophy",
      color: "teal",
      title: "Design tools",
      description:
        "Constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams the position that we want to be.",
      link: { href: "#pablo", children: "Check more" },
    },
  ],
};
export default textProps;
