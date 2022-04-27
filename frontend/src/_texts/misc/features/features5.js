import cardinfowithbutton from "_texts/misc/cards/cardinfowithbutton.js";

const textProps = {
  heading2badge: {
    badge: { color: "pink", children: "The fame" },
    title: "I don't care about the fame",
    description:
      "The idea is to sell, and people shouldn't talk about you behind your back. We make hits day by day, and we live our lives the best we know. Yo!",
    alignment: "center",
  },
  cards: [
    {
      ...cardinfowithbutton,
    },
    {
      icon: "fas fa-campground",
      color: "emerald",
      title: "Build Somewthing",
      description:
        "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible.",
      button: {
        color: "emerald",
        children: "Learn more",
      },
    },
    {
      icon: "fab fa-telegram-plane",
      color: "red",
      title: "Prepare Launch",
      description:
        "Why would anyone pick lightBlue over pink? Pink is obviously a better color.Everyone’s born confident, and everything’s...",
      button: {
        color: "red",
        children: "Learn more",
      },
    },
  ],
};

export default textProps;
