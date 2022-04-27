import card from "_texts/presentation/cards/cardcontactusicons.js";
import map from "_texts/presentation/maps/map.js";

const textProps = {
  heading2badge: {
    badge: {
      color: "orange",
      children: "Leave a message",
    },
    title: "Tell us more about you",
    description:
      "There are a lot of people around you that make you feel invincible, but keep in mind, that they say it only to make you smaller. You've made a few bucks, you've found your way to the market.",
    alignment: "center",
  },
  card: {
    ...card,
  },
  map: {
    ...map,
  },
  skew: {
    color: "light",
  },
};
export default textProps;
