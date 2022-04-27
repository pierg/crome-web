import infoArea1 from "_texts/presentation/infoarea/infoareaicontitlelinkcolor.js";

const textProps = {
  heading2badge: {
    badge: { color: "pink", children: "Fight hard", round: true },
    title: "It's time to know",
    description:
      "Go and show them how strong you are. Leave them with their jaws to the ground, and hit them so that they faint on the ropes. Since you've got talent, you have to wear a crown.",
    alignment: "center",
  },
  infoAreas: [
    {
      ...infoArea1,
    },
    {
      color: "emerald",
      icon: "fas fa-atom",
      title: "Analyze Performance",
      description:
        "Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.",
      link: {
        children: "Learn about our products",
        href: "#pablo",
      },
    },
    {
      color: "orange",
      icon: "fas fa-globe-europe",
      title: "Measure Conversions",
      description:
        "What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.",
      link: {
        children: "Check our documentation",
        href: "#pablo",
      },
    },
  ],
};
export default textProps;
