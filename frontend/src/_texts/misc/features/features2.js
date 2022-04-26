import cardinfoiconleft from "_texts/misc/cards/cardinfoiconleft.js";

const textProps = {
  image: require("assets/img/illustrations/p31.svg").default,
  heading2badge: {
    badge: { color: "purple", children: "Places to see" },
    title: "We have been everywhere",
    description:
      "But it is good anyway, you do not need to worry. All that has passed, now they are dust and ashes. On the road, there is no way of meeting someone that will help you with one hand and steal with the other hand.",
    alignment: "center",
    whiteContent: true,
  },
  cards: [
    { ...cardinfoiconleft },
    {
      icon: "fas fa-dungeon",
      color: "orange",
      title: "Modern Interface",
      description:
        "If everything I did failed - which it most definitely does not, it quite actually succeeds - just the fact that I'm willing to fail is an inspiration.",
      link: {
        href: "#pablo",
        children: "Learn more",
      },
    },
    {
      icon: "fas fa-trophy",
      color: "red",
      title: "Great Features",
      description:
        "People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest.",
      link: {
        href: "#pablo",
        children: "Learn more",
      },
    },
    {
      icon: "far fa-image",
      color: "emerald",
      title: "Awesome Support",
      description:
        "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For beeing honest.",
      link: {
        href: "#pablo",
        children: "Learn more",
      },
    },
  ],
};

export default textProps;
