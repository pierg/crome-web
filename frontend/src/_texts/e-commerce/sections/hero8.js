import React from "react";

import cardproductprice from "_texts/e-commerce/cards/cardproductprice.js";

const textProps = {
  skew: {
    color: "white",
  },
  heading2: {
    color: "orange",
    subtitle: "Have you seen us?",
    title: "Our recent products",
    description:
      "The time is now for it to be okay to be great. People in this world shun people for being great.",
    alignment: "left",
  },
  cards: [
    { ...cardproductprice },
    {
      image: require("assets/img/pages/shorts.png").default,
      subtitle: "Popular",
      title: "Balmain",
      description:
        "Balmains mid-rise skinny jeans are cut with stretch to ensure they retain their second-skin fit but move comfortably.",
      price: "€459",
      button: {
        color: "red",
        children: <i className="fas fa-heart"></i>,
      },
    },
    {
      image: require("assets/img/pages/shirt.png").default,
      subtitle: "Popular",
      title: "Balenciaga",
      description:
        "Balenciaga black textured-leather wallet is finished with the labels iconic Giant studs. This is where you can...",
      price: "€559",
      button: {
        color: "red",
        children: <i className="fas fa-heart"></i>,
      },
    },
    {
      image: require("assets/img/pages/jeans.png").default,
      subtitle: "Trending",
      title: "D G",
      description:
        "Dolce Gabbanas Greta tote has been crafted in Italy from hard-wearing red textured-leather.",
      price: "€ 1,359",
      button: {
        color: "red",
        children: <i className="fas fa-heart"></i>,
      },
    },
  ],
};
export default textProps;
