import infoCards1 from "_texts/presentation/cards/cardinfoicon.js";
import infoArea from "_texts/presentation/infoarea/infoareaicontitlelink.js";
import skewCard from "_texts/presentation/cards/cardblogimage.js";

const textProps = {
  heading3: {
    color: "lightBlue",
    subtitle: "with burned soles",
    title: "I've risen with the soles burned",
    description:
      "I've fought hard to get out of the hole I was in. I've dusted myself, and exactly like a dancer, I have danced with the fear, you should have filmed me.",
    alignment: "center",
  },
  infoCards: [
    {
      ...infoCards1,
    },
    {
      icon: "fas fa-retweet",
      iconColor: "lightBlue",
      title: "Free Revisions",
      description:
        "Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.",
    },
    {
      icon: "fas fa-fingerprint",
      iconColor: "emerald",
      title: "Verified Company",
      description:
        "Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!",
    },
  ],
  infoArea: {
    ...infoArea,
  },
  skewCard: {
    ...skewCard,
  },
};
export default textProps;
