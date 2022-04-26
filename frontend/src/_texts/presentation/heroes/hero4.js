import leftCardProps from "_texts/presentation/cards/cardinfoimage.js";
import rightCardInfoIconProps from "_texts/presentation/cards/cardinfofullcolor.js";

const textProps = {
  heading2badge: {
    badge: {
      color: "pink",
      children: "Lost angels",
    },
    title: "Why did you last so much, nobody knows",
    description:
      "There will come a day, when you'll fall again, and you know this, but like myself, you too have some angels that help you.",
  },
  leftCardProps: {
    ...leftCardProps,
  },
  rightCardInfoIconProps: {
    ...rightCardInfoIconProps,
  },
  rightCardBlogImageProps: {
    color: "lightBlue",
    icon: "fas fa-palette",
    title: "Awesome Design",
    description:
      "As we live, our hearts turn colder. Cause pain is what we go through as we become older.",
    gradient: false,
  },
  rightCardContactUsTitleProps: {
    color: "red",
    icon: "fas fa-running",
    title: "Fast Development",
    description:
      "We’re not always in the position that we want to be at. We’re constantly growing.",
    gradient: false,
  },
  rightCardInfoImageProps: {
    color: "emerald",
    icon: "fas fa-glasses",
    title: "Super Fresh",
    description:
      "When we lose family over time. What else could rust the heart more over time? Blackgold.",
    gradient: false,
  },
};
export default textProps;
