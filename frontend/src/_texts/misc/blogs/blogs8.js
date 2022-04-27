import cardblogandauthor from "_texts/misc/cards/cardblogandauthor.js";

const textProps = {
  heading2: {
    color: "pink",
    subtitle: "About streets",
    title: "You have to love your streets",
    description:
      "About streets, about the streets, it's clear that people will start speaking about the streets again. You have a street life, you need to live it like so. Let me tell you the base rule of living on the streets, you need to respect them.",
    alignment: "left",
  },
  cards: [
    { ...cardblogandauthor },
    {
      image: require("assets/img/sections/pawel-nolbert.jpg").default,
      title: "Society of yesterday, today and tomorrow",
      description:
        "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost nice. Let me tell you the base rule of living on the streets, you need to respect them.",
      user: {
        image: require("assets/img/faces/team-1.jpg").default,
        name: "Jasmine Tailor",
      },
      icon: "fas fa-heart",
      text: "2.3K",
      link: {
        href: "#pablo",
      },
    },
    {
      image: require("assets/img/sections/twk-tt.jpg").default,
      title: "New machine learning models for IFTTT",
      description:
        "Let me tell you the base rule of living on the streets, you need to respect them. If you’ve ever wanted to train a machine learning model and integrate it with IFTTT. You have a street life, you need to live it like so.",
      user: {
        image: require("assets/img/faces/michael.jpg").default,
        name: "Paul Smith",
      },
      icon: "fas fa-heart",
      text: "2.3K",
      link: {
        href: "#pablo",
      },
    },
  ],
};

export default textProps;
