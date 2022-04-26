import infoArea1 from "_texts/presentation/infoarea/infoareawhitetitle.js";

const textProps = {
  heading3: {
    color: "light",
    subtitle: "On the coastline",
    title: "We are missing the summer",
    description:
      "We're waiting for the weather to warm up so that we can go to the coastline. We really miss the summertime, our second home the coastline.",
    alignment: "center",
    whiteContent: true,
  },
  infoAreas: [
    {
      ...infoArea1,
    },
    {
      icon: "fas fa-poll",
      type: "light",
      title: "Grow your market",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      icon: "fas fa-lightbulb",
      type: "light",
      title: "Launch time",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ],
};
export default textProps;
