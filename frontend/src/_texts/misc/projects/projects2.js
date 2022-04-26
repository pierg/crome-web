import cardprojectteam from "_texts/misc/cards/cardprojectteam.js";
import pagination from "_texts/misc/pagination/pagination.js";

const textProps = {
  heading2: {
    color: "emerald",
    subtitle: "Hard words",
    title: "The years are more important",
    description:
      "Money does not make as well as years. I have always proved this, forever and ever. That is all that matters. I have gathered the foam, to make the sum.",
    alignment: "center",
  },
  footerText: "Showing 6 out of 66",
  pagination: { ...pagination },
  cards: [
    { ...cardprojectteam },
    {
      ...cardprojectteam,
      icon: { icon: "fas fa-power-off", text: "F-43", color: "emerald" },
      description: "We strive to embrace and drive change in our industry.",
      title: "Spotify",
      image: require("assets/img/brand/spotify.jpg").default,
    },
    {
      ...cardprojectteam,
      icon: { icon: "fas fa-city", text: "J-11", color: "red" },
      description: "The time has come to bring our plans and ideas to life.",
      title: "Dribbble",
      image: require("assets/img/brand/dribbble.png").default,
    },
    {
      ...cardprojectteam,
      icon: { icon: "fas fa-rocket", text: "A-11", color: "orange" },
      description: "We are developing the best design projects with love.",
      title: "CreativeTim",
      image: require("assets/img/brand/tim.png").default,
    },
    {
      ...cardprojectteam,
      icon: { icon: "fas fa-umbrella", text: "P-07", color: "lightBlue" },
      description: "It is important to save every project safely with our app.",
      title: "DropBox",
      image: require("assets/img/brand/dropbox.png").default,
    },
    {
      ...cardprojectteam,
      icon: { icon: "fas fa-bus", text: "E-87", color: "blueGray" },
      description:
        "Here you can add your description and bellow add your members.",
      title: "Unassigned",
      image: require("assets/img/brand/unass.jpg").default,
      imagesOverlap: {
        text: "no members",
        images: [
          {
            image: require("assets/img/faces/placeholder.jpg").default,
            text: "Unassigned",
          },
        ],
        size: "lg",
      },
    },
  ],
};

export default textProps;
