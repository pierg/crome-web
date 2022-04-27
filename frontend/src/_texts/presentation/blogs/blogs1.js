import cardblogfullbg from "_texts/presentation/cards/cardblogfullbg.js";

const textProps = {
  heading3: {
    color: "emerald",
    subtitle: "Our latest blogposts",
    title: "Check the news for this month",
    description:
      "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
    alignment: "center",
  },
  cards: [
    {
      ...cardblogfullbg,
      size: "md",
    },
    {
      image: require("assets/img/sections/thomas.jpg").default,
      subtitle: "Spectrum Boats",
      title: "Data Virtualization and Boats Startups",
      size: "md",
      link: { href: "#pablo" },
    },
    {
      image: require("assets/img/sections/ashim.jpg").default,
      subtitle: "Flying on pandemic",
      title: "New Challenges when you want to fly to new areas",
      size: "md",
      link: { href: "#pablo" },
    },
    {
      image: require("assets/img/sections/dane.jpg").default,
      subtitle: "Work from Home",
      title: "How meetings and behaviour are changing",
      size: "md",
      link: { href: "#pablo" },
    },
  ],
};
export default textProps;
