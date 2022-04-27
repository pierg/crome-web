import cardpricinglogo from "_texts/misc/cards/cardpricinglogo.js";

const textProps = {
  heading3: {
    color: "red",
    subtitle: "Nice sounds",
    title: "Trumpets should start singing",
    description:
      "They didn't know what they were talking about, that is why they definitely have underestimated us. They wanted to make us robots, so they could guide us more easily.",
    alignment: "center",
  },
  cards: [
    { ...cardpricinglogo },
    {
      image: require("assets/img/theme/react.jpg").default,
      title: "Premium Pack",
      description: "$49",
      line: "lightBlue",
      list: ["100 messages", "1K emails", "Premium Support"],
      button: {
        children: "get plan",
        color: "dark",
      },
    },
    {
      image: require("assets/img/theme/sketch.jpg").default,
      title: "Platinum Pack",
      description: "$79",
      line: "orange",
      list: ["350 messages", "10K emails", "24/7 Support"],
      button: {
        children: "get plan",
        color: "dark",
      },
    },
  ],
};

export default textProps;
