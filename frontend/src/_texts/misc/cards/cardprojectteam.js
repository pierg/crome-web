const textProps = {
  image: require("assets/img/brand/slack.png").default,
  title: "Slack",
  description: "We are more than happy to work at such a great project.",
  imagesOverlap: {
    images: [
      { image: require("assets/img/faces/team-1.jpg").default, text: "Slack" },
      { image: require("assets/img/faces/face-2.jpg").default, text: "Slack" },
      { image: require("assets/img/faces/team-3.jpg").default, text: "Slack" },
      { image: require("assets/img/faces/team-4.jpg").default, text: "Slack" },
    ],
    text: "and 30+ more",
    size: "lg",
  },
  icon: {
    icon: "fas fa-shopping-basket",
    text: "Work in Progress",
    color: "grey",
  },
  dropdown: {
    icon: "fas fa-cog",
    button: { color: "white" },
    items: [
      { href: "#pablo", children: "Action" },
      { href: "#pablo", children: "Another Action" },
      { href: "#pablo", children: "Something Else" },
    ],
  },
};

export default textProps;
