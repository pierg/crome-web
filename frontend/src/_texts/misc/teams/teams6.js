import cardprofileactions from "_texts/misc/cards/cardprofileactions.js";
import cardprofilereviews from "_texts/misc/cards/cardprofilereviews.js";

const textProps = {
  heading3: {
    color: "emerald",
    subtitle: "Special team",
    title: "Trumpets should start singing",
    description:
      "You tell people not to listen to hip-hop, but it is vain. This is reality, you should remember this. It is better to make rhymes than crimes.",
    alignment: "center",
  },
  cards: [
    { cardprofileactions: { ...cardprofileactions } },
    { cardprofilereviews: { ...cardprofilereviews } },
    {
      cardprofileactions: {
        headImage: require("assets/img/illustrations/p7.svg").default,
        image: require("assets/img/faces/team-3.jpg").default,
        leftButton: {
          children: "Connect",
          color: "dark",
          size: "sm",
        },
        rightButton: {
          children: "Message",
          color: "dark",
          size: "sm",
        },
        stats: [
          {
            title: "22",
            subtitle: "Friends",
          },
          {
            title: "10",
            subtitle: "Photos",
          },
          {
            title: "89",
            subtitle: "Comments",
          },
        ],
        title: "Johana Doe, 29",
        description: "California",
      },
    },
  ],
};

export default textProps;
