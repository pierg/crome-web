const textProps = {
  defaultOpened: 0,
  items: [
    {
      image: require("assets/img/sections/unsplashs.jpg").default,
      icon: "fas fa-quote-right",
      description:
        "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. A single rose can be my garden... a single friend, my world.",
      color: "lightBlue",
      user: {
        name: "Andre Lino",
        image: require("assets/img/faces/team-3.jpg").default,
      },
      button: {
        color: "white",
        children: "read more",
      },
    },
    {
      image: require("assets/img/sections/austin.jpg").default,
      icon: "fas fa-quote-right",
      description:
        "It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams.",
      color: "red",
      user: {
        name: " Mike John",
        image: require("assets/img/faces/team-1.jpg").default,
      },
      button: {
        color: "white",
        children: "read more",
      },
    },
  ],
};

export default textProps;
