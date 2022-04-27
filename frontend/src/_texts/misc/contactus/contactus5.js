import cardcontactusaddress from "_texts/misc/cards/cardcontactusaddress.js";
import map from "_texts/presentation/maps/map.js";

const textProps = {
  heading3: {
    color: "pink",
    subtitle: "Have you seen",
    title: "All that we have been through",
    description:
      "I've heard that people, people that are not very nice, speak about me behind my back. Is it like so, my brother? You say you know me from '95, but jokes on you, since now it is 2021.",
    alignment: "center",
    whiteContent: true,
  },
  card: { ...cardcontactusaddress },
  map: {
    ...map.options,
  },
  latitude: "40.748817",
  longitude: "-73.985428",
};

export default textProps;
