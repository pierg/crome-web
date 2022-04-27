import cardcontactushorizontal from "_texts/misc/cards/cardcontactushorizontal.js";
import map from "_texts/presentation/maps/map.js";

const textProps = {
  heading2: {
    color: "teal",
    subtitle: "They rise",
    title: "A lot of people rise with claims",
    description:
      "Leave me alone, since I know, leave me alone to live my life. Dude, I've already told you, you can go cry in your corner since you haven't eaten from my bowl.",
    alignment: "center",
    whiteContent: true,
  },
  card: { ...cardcontactushorizontal },
  map: {
    ...map.options,
  },
  latitude: "40.748817",
  longitude: "-73.985428",
};

export default textProps;
