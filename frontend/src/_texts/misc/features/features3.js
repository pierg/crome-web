import infoareaicontitlelist from "_texts/misc/infoareas/infoareaicontitlelist.js";

const textProps = {
  heading3: {
    color: "red",
    subtitle: "Notus PRO",
    title: "We have made quite a collection",
    description:
      "I've started a long time ago to drink and gamble. I am sorry, but I do not regret anything. A lot of time has passed, but I still haven't forgotten who was there for me.",
    alignment: "center",
  },
  infoAreas: [
    { ...infoareaicontitlelist },
    {
      icon: "fas fa-money-bill-wave",
      color: "lightBlue",
      title: "Best prices",
      description:
        "If you're taught you can’t do anything, you won’t do anything.",
      list: [
        {
          icon: "fas fa-check",
          text: "Beautiful elements",
        },
        {
          icon: "fas fa-check",
          text: "Amazing page examples",
        },
        {
          icon: "fas fa-check",
          text: "Super friendly support team",
        },
      ],
    },
    {
      icon: "fas fa-first-aid",
      color: "lightBlue",
      title: "Community support",
      description: "That’s the main thing people are always controlled by!",
      list: [
        {
          icon: "fas fa-check",
          text: "Beautiful elements",
        },
        {
          icon: "fas fa-check",
          text: "Amazing page examples",
        },
        {
          icon: "fas fa-check",
          text: "Super friendly support team",
        },
      ],
    },
    {
      icon: "fas fa-laptop-code",
      color: "lightBlue",
      title: "Responsive componenets",
      description: "They're slowed down by their perception of themselves.",
      list: [
        {
          icon: "fas fa-check",
          text: "Beautiful elements",
        },
        {
          icon: "fas fa-check",
          text: "Amazing page examples",
        },
        {
          icon: "fas fa-check",
          text: "Super friendly support team",
        },
      ],
    },
  ],
};

export default textProps;
