import React from "react";

import mediaplayer from "_texts/e-commerce/mediaplayers/mediaplayerimageleftrightbuttons.js";
import incrementer from "_texts/misc/forms/incrementer.js";
import select from "_texts/misc/forms/select.js";
import ratings from "_texts/misc/content/ratings.js";

const textProps = {
  heading2: {
    color: "red",
    subtitle: "Have you seen us?",
    title: "The latest accessories",
    description:
      "The time is now for it to be okay to be great. People in this world shun people for being great.",
    alignment: "right",
  },
  name: "Givenchy",
  price: "$3,390",
  description:
    "Eres daring swimsuit has the fit and coverage of a bikini in a one-piece silhouette. This fuchsia style is crafted from the label's sculpting peau douce fabric and has flattering cutouts through the torso and back. Wear yours with mirrored sunglasses on vacation.",
  mediaplayer: { ...mediaplayer },
  incrementer: { ...incrementer },
  ratings: { ...ratings },
  addToCart: {
    color: "orange",
    children: (
      <>
        Add to Cart <i className="fas fa-shopping-cart"></i>
      </>
    ),
  },
  inputs: [
    {
      label: "Color",
      select: {
        ...select,
      },
    },
    {
      label: "Size",
      select: {
        items: ["XS", "S", "M", "L", "XL", "XXL"],
        placeholder: "Select size",
      },
    },
  ],
};
export default textProps;
