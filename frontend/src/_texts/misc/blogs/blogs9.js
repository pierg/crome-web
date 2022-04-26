const textProps = {
  heading3badge: {
    badge: { color: "orange", children: "Your neighborhood" },
    title: "From east to west, and from south to north",
    description:
      "This is your neighborhood, and you really need to love it as is. In the neighborhood, you're either a boss, either you don't think too much. If your wallet gets stolen in your neighborhood, don't be mad at it, you still need to love it.",
    alignment: "left",
  },
  user: {
    image: require("assets/img/faces/team-1.jpg").default,
    name: "Tom Hanks",
    date: "Drawn on 23 Jan",
  },
  leftButtons: [
    {
      children: "Comment",
      color: "white",
      size: "sm",
    },
    {
      children: "Add to favorites",
      color: "white",
      size: "sm",
    },
  ],
  image: require("assets/img/sections/wade.jpg").default,
  description:
    "If you’ve ever wanted to train a machine learning model and integrate it with our tools, you now can with a new offering from us. Mate, a platform where novices can spin out machine...If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with a new offering from MateLabs. MateVerse, a platform where novices can spin out machine...",
  links: [
    {
      href: "#pablo",
      children: "#tothetop",
    },
    {
      href: "#pablo",
      children: "#allthewayup",
    },
    {
      href: "#pablo",
      children: "#goodvibesonly",
    },
  ],
  bottomButtons: [
    {
      color: "twitter",
      children: "Post on Twitter",
    },
    {
      color: "facebook",
      children: "Share on Facebook",
    },
  ],
};

export default textProps;
