const textProps = {
  heading3badge: {
    badge: { color: "purple", children: "Day by day" },
    title: "If we are down, the sky's the limit",
    description:
      "I light a cigarette, like any other day. A lot of people wonder if we don't smoke, you know? To many that want to get our attention, that want to offer their unwanted advice.",
    alignment: "left",
  },
  image: require("assets/img/illustrations/ill.png").default,
  cards: [
    {
      icon: "fab fa-html5",
      color: "purple",
      title: "For Developers",
      description:
        "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now.",
      link: {
        href: "#pablo",
        children: "Learn more",
      },
    },
    {
      icon: "fas fa-cubes",
      color: "purple",
      inverted: true,
      title: "For Designers",
      description:
        "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn.",
      link: {
        href: "#pablo",
        children: "Learn more",
      },
    },
    {
      icon: "fas fa-bell",
      color: "purple",
      title: "For Beginners",
      description:
        "That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment. If everything I did failed - which it doesn't.",
      link: {
        href: "#pablo",
        children: "Learn more",
      },
    },
  ],
};

export default textProps;
