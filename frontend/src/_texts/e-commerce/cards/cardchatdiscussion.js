import message from "_texts/misc/content/message.js";

const textProps = {
  image: require("assets/img/faces/christian.jpg").default,
  name: "Charlie Watson",
  lastOnline: "last seen today at 7:38 AM",
  input: {
    placeholder: "Your message",
  },
  buttons: [
    {
      color: "white",
      children: "edit",
      size: "sm",
      outline: true,
    },
    {
      color: "white",
      children: "call",
      size: "sm",
      outline: true,
    },
    {
      color: "white",
      children: "video",
      size: "sm",
    },
  ],
  messages: [
    {
      content: ["Typing..."],
      align: "left",
      color: "light",
      link: {
        href: "pablo",
      },
    },
    {
      content: [
        "At the end of the day... the native dev apps is where users are",
      ],
      time: {
        icon: "fas fa-check",
        text: "4:47am",
      },
      color: "lightBlue",
      link: {
        href: "#pablo",
      },
      align: "right",
    },
    {
      content: [{ image: require("assets/img/img-1.jpg").default }],
      time: {
        icon: "far fa-clock",
        text: "4:46am",
      },
      color: "light",
      link: {
        href: "#pablo",
      },
      align: "left",
    },
    { ...message },
    {
      content: ["You can easily get it; The content here is all free"],
      time: {
        icon: "far fa-clock",
        text: "4:45am",
      },
      color: "light",
      link: {
        href: "#pablo",
      },
      align: "left",
    },
    {
      content: ["Excellent, I want it now!"],
      time: {
        icon: "fas fa-check",
        text: "4:44am",
      },
      color: "lightBlue",
      link: {
        href: "#pablo",
      },
      align: "right",
    },
    {
      content: [
        "Yeah! Responsive Design is geared towards those trying to build web apps",
      ],
      time: {
        icon: "far fa-clock",
        text: "4:31am",
      },
      color: "light",
      link: {
        href: "#pablo",
      },
      align: "left",
    },
    { divider: "Wed, 3:27pm" },
    {
      content: [
        "Can it generate daily design links that include essays and data visualizations?",
      ],
      time: {
        icon: "fas fa-check",
        text: "3:30am",
      },
      color: "lightBlue",
      link: {
        href: "#pablo",
      },
      align: "right",
    },
    {
      content: ["It contains a lot of good lessons about effective practices"],
      time: {
        icon: "far fa-clock",
        text: "3:14am",
      },
      color: "light",
      link: {
        href: "#pablo",
      },
      align: "left",
    },
  ],
};
export default textProps;
