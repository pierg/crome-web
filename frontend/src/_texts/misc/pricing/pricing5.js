import cardpricinglist from "_texts/misc/cards/cardpricinglist.js";

const textProps = {
  heading2badge: {
    badge: { color: "dark", children: "You need a win" },
    title: "You need to offer a lot",
    description:
      "You shouldn't crave money, fame, power, or respect, if you are not old enough to keep them. You need to offer a lot if you want to win big.",
    alignment: "center",
  },
  buttons: [
    {
      children: "Monthly",
      color: "white",
    },
    {
      children: "Yearly",
      color: "emerald",
    },
  ],
  cards: [
    { ...cardpricinglist },
    {
      head: "Starter",
      title: "$399",
      list: [
        {
          title: "100",
          description: "Projects",
        },
        {
          title: "10",
          description: "Team Members",
        },
        {
          title: "50",
          description: "Personal Contacts",
        },
        {
          title: "500",
          description: "Messages",
        },
      ],
      image: require("assets/img/illustrations/pricing_bg.svg").default,
      button: {
        children: "get started",
        size: "sm",
        color: "white",
      },
      color: "red",
    },
    {
      head: "Starter",
      title: "$599",
      list: [
        {
          title: "1k",
          description: "Projects",
        },
        {
          title: "100",
          description: "Team Members",
        },
        {
          title: "500",
          description: "Personal Contacts",
        },
        {
          title: "Unlimited",
          description: "Messages",
        },
      ],
      image: require("assets/img/illustrations/pricing_bg.svg").default,
      button: {
        children: "get started",
        size: "sm",
        color: "white",
      },
      color: "emerald",
    },
  ],
};

export default textProps;
