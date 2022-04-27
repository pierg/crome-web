import dropdownbutton from "_texts/misc/dropdowns/dropdownbutton.js";

const textProps = {
  image: require("assets/img/faces/team-6.jpg").default,
  title: "Sofie Allure",
  description: "Managing Partner",
  list: [
    {
      icon: "fab fa-facebook",
      color: "lightBlue",
      text: "At Facebook since 2016",
    },
    {
      icon: "fas fa-running",
      color: "emerald",
      text: "Outdors lover",
    },
    {
      icon: "fas fa-headset",
      color: "red",
      text: "Super friendly support team",
    },
  ],
  dropdown: { ...dropdownbutton },
};
export default textProps;
