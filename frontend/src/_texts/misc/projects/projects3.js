import cardprojectimagefullbg from "_texts/misc/cards/cardprojectimagefullbg.js";

const textProps = {
  heading3: {
    color: "red",
    subtitle: "Stressing around",
    title: "Nothing is nicer than my own words",
    description:
      "I write verses after verses, but I still can't get it. You are not hearing me, you make me mad, and I go nuts when you say you do not like my verses without even listening to them.",
    alignment: "center",
  },
  cards: [
    { ...cardprojectimagefullbg },
    {
      image: require("assets/img/misc/projects/tim-marshall-uwBdR69Jxvg-unsplash.jpg")
        .default,
      title: "Game Changers",
      description: "Many things changed during 2021 times...",
      icon: "fas fa-gamepad",
      color: "red",
      button: {
        size: "sm",
        color: "red",
        children: "check out",
      },
      alignment: "center",
    },
    {
      image: require("assets/img/misc/projects/simon-sun-K9X1klwnNxo-unsplash.jpg")
        .default,
      title: "HTML is growing",
      description: "HTML is the core structure for many apps...",
      icon: "fab fa-html5",
      color: "emerald",
      button: {
        size: "sm",
        color: "emerald",
        children: "check out",
      },
      alignment: "right",
    },
  ],
};

export default textProps;
