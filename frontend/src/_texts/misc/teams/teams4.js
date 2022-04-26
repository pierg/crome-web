import cardprofileskills from "_texts/misc/cards/cardprofileskills.js";

const textProps = {
  heading2: {
    color: "lightBlue",
    subtitle: "Diamond team",
    title: "For the people who are with us",
    description:
      "The guys from Notus PRO React, and those that are abroad, for making a better life and better money. We're here from north, south, east, west.",
    alignment: "center",
  },
  cards: [
    { ...cardprofileskills },
    {
      image: require("assets/img/theme/lucy.jpg").default,
      title: "Lucy Klein",
      description: "CTO",
      list: [
        {
          icon: "fas fa-hat-wizard",
          color: "lightBlue",
          leftText: "Skill",
          rightText: "Painting",
        },
        {
          icon: "far fa-user",
          color: "lightBlue",
          leftText: "Hobbies",
          rightText: "Skiing, Chess",
        },
        {
          icon: "far fa-smile-beam",
          color: "lightBlue",
          leftText: "Level",
          rightText: "• • • • •",
        },
      ],
    },
    {
      image: require("assets/img/faces/face-5.jpg").default,
      title: "Tony Mark",
      description: "Brand Strategist",
      list: [
        {
          icon: "fas fa-hat-wizard",
          color: "lightBlue",
          leftText: "Skill",
          rightText: "Management",
        },
        {
          icon: "far fa-user",
          color: "lightBlue",
          leftText: "Hobbies",
          rightText: "Walking, Dancing",
        },
      ],
    },
  ],
};

export default textProps;
