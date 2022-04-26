import images1 from "_texts/misc/images/imagetooltip.js";

const textProps = {
  text: "and 30+ more",
  size: "sm",
  images: [
    {
      ...images1,
    },
    {
      image: require("assets/img/faces/team-2.jpg").default,
      text: "Romina Hadid",
    },
    {
      image: require("assets/img/faces/team-3.jpg").default,
      text: "Alexander Smith",
    },
  ],
};
export default textProps;
