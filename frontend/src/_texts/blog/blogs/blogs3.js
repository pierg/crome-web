import cardblogimagehorizontal from "_texts/blog/cards/cardblogimagehorizontal.js";

const textProps = {
  heading3badge: {
    badge: {
      color: "lightBlue",
      children: "Stories",
    },
    title: "Before I go",
    description:
      "We've got time, but we are only doing what they say and want. I do not want to live as I will never die, cause life's too short, and I do not want to drown myself, as others would like.",
    alignment: "center",
  },
  cards: [
    { ...cardblogimagehorizontal },
    {
      image: require("assets/img/faces/team-3.jpg").default,
      title: "MateLabs mixes learning with IFTTT",
      description:
        "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with a new offering from MateLabs. MateVerse, a platform where novices can spin out machine...",
      link: {
        href: "#pablo",
        children: "Read More",
      },
      user: require("assets/img/faces/michael.jpg").default,
      username: "Paul Smith",
      userlink: {
        href: "#pablo",
      },
      date: "Drawn on 23 April",
    },
    {
      image: require("assets/img/faces/team-4.jpg").default,
      title: "US venture investment ticks up in Q2",
      description:
        "Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings and a few outsized early-stage rounds in tech and healthcare...",
      link: {
        href: "#pablo",
        children: "Read More",
      },
      user: require("assets/img/faces/team-1.jpg").default,
      username: "Jasmine Tailor",
      userlink: {
        href: "#pablo",
      },
      date: "Drawn on 23 April",
    },
  ],
};
export default textProps;
