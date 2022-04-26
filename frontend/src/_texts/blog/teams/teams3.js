import card from "_texts/blog/cards/cardprofilefull.js";
import dropdownbutton from "_texts/misc/dropdowns/dropdownbutton.js";

const textProps = {
  heading3badge: {
    badge: {
      color: "light",
      children: "Endless story",
    },
    title: "Everything started in this neighborhood",
    description:
      "We've got the same blood in our veins, and we'll be brothers until death will tear us apart, and this is cause nobody could ever separate us.",
    whiteContent: true,
    alignment: "center",
  },
  cards: [
    {
      ...card,
    },
    {
      image: require("assets/img/faces/team-5.jpg").default,
      title: "Dylan Wyatt",
      description: "Team Lead",
      list: [
        {
          icon: "fas fa-atom",
          color: "teal",
          text: "Dedicated entrepreneur",
        },
        {
          icon: "fas fa-running",
          color: "emerald",
          text: "Urban exploration",
        },
        {
          icon: "fas fa-chart-bar",
          color: "red",
          text: "Able to get good at everything",
        },
      ],
      dropdown: { ...dropdownbutton },
    },
    {
      image: require("assets/img/faces/atikh.jpg").default,
      title: "Mila Skylar",
      description: "Content Creator",
      list: [
        {
          icon: "fas fa-atom",
          color: "teal",
          text: "High quality publication",
        },
        {
          icon: "fas fa-running",
          color: "emerald",
          text: "Storytelling",
        },
        {
          icon: "fas fa-chart-bar",
          color: "red",
          text: "Master of words qualification",
        },
      ],
      dropdown: { ...dropdownbutton },
    },
  ],
};
export default textProps;
