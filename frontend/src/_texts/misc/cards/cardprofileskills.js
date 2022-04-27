import dropdownbutton from "_texts/misc/dropdowns/dropdownbutton.js";

const textProps = {
  image: require("assets/img/person-suit-3.jpg").default,
  title: "John Darwin",
  description: "Web Designer",
  list: [
    {
      icon: "fas fa-hat-wizard",
      color: "lightBlue",
      leftText: "Skill",
      rightText: "Leadership",
    },
    {
      icon: "far fa-user",
      color: "lightBlue",
      leftText: "Hobbies",
      rightText: "Skiing, Chess",
    },
  ],
  dropdown: {
    ...dropdownbutton,
  },
};

export default textProps;
