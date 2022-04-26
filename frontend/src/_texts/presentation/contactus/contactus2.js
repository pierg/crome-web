import React from "react";

import firstInfoArea from "_texts/presentation/infoarea/infoareaicon.js";

const textProps = {
  image: require("assets/img/illustrations/bg_contactus3.svg").default,
  heading2: {
    color: "lightBlue",
    subtitle: "We are here",
    title: "Are you looking for answers?",
    description:
      "You have no idea who I am. You do not know me at all. Have you ever written a song line that a full crowd would shout when you enter the stage? I do not think so.",
    alignment: "center",
  },
  button: {
    color: "lightBlue",
    children: (
      <>
        <i className="mr-1 fas fa-comment" /> Chat with us
      </>
    ),
  },
  infoAreas: [
    {
      ...firstInfoArea,
      color: "lightBlue",
    },
    {
      icon: "fas fa-envelope",
      color: "lightBlue",
      title: "Email",
      description: "hello@email.com",
    },
    {
      icon: "fas fa-mobile-alt",
      color: "lightBlue",
      title: "Phone",
      description: "+1(424) 535 3523",
    },
    {
      icon: "fas fa-user-circle",
      color: "lightBlue",
      title: "Contact",
      description: "Andrew Samian",
    },
  ],
};
export default textProps;
