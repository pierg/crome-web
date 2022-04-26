import dropdownbutton from "_texts/misc/dropdowns/dropdownbutton.js";

const textProps = {
  title: "Card Tables",
  color: "white",
  head: ["Project", "Budget", "Status", "Users", "Completion", ""],
  body: [
    [
      {
        image: require("assets/img/bootstrap.jpg").default,
        text: "Argon Design System",
      },
      "$2,500 USD",
      {
        color: "orange",
        text: "pending",
      },
      {
        images: {
          images: [
            {
              image: require("assets/img/team-1-800x800.jpg").default,
              text: "Team 1",
            },
            {
              image: require("assets/img/team-2-800x800.jpg").default,
              text: "Team 2",
            },
            {
              image: require("assets/img/team-3-800x800.jpg").default,
              text: "Team 3",
            },
            {
              image: require("assets/img/team-4-470x470.png").default,
              text: "Team 4",
            },
          ],
        },
      },
      {
        text: "60%",
        progress: { value: 60, color: "red" },
      },
      {
        dropdown: { ...dropdownbutton, button: { color: "white", size: "sm" } },
      },
    ],
    [
      {
        image: require("assets/img/angular.jpg").default,
        text: "Angular Now UI Kit PRO",
      },
      "$1,800 USD",
      {
        color: "emerald",
        text: "completed",
      },
      {
        images: {
          images: [
            {
              image: require("assets/img/team-1-800x800.jpg").default,
              text: "Team 1",
            },
            {
              image: require("assets/img/team-2-800x800.jpg").default,
              text: "Team 2",
            },
            {
              image: require("assets/img/team-3-800x800.jpg").default,
              text: "Team 3",
            },
            {
              image: require("assets/img/team-4-470x470.png").default,
              text: "Team 4",
            },
          ],
        },
      },
      {
        text: "100%",
        progress: { value: 100, color: "emerald" },
      },
      {
        dropdown: { ...dropdownbutton, button: { color: "white", size: "sm" } },
      },
    ],
    [
      {
        image: require("assets/img/sketch.jpg").default,
        text: "Black Dashboard Sketch",
      },
      "$3,150 USD",
      {
        color: "red",
        text: "delayed",
      },
      {
        images: {
          images: [
            {
              image: require("assets/img/team-1-800x800.jpg").default,
              text: "Team 1",
            },
            {
              image: require("assets/img/team-2-800x800.jpg").default,
              text: "Team 2",
            },
            {
              image: require("assets/img/team-3-800x800.jpg").default,
              text: "Team 3",
            },
            {
              image: require("assets/img/team-4-470x470.png").default,
              text: "Team 4",
            },
          ],
        },
      },
      {
        text: "73%",
        progress: { value: 73, color: "red" },
      },
      {
        dropdown: { ...dropdownbutton, button: { color: "white", size: "sm" } },
      },
    ],
    [
      {
        image: require("assets/img/react.jpg").default,
        text: "React Material Dashboard",
      },
      "$4,400 USD",
      {
        color: "red",
        text: "delayed",
      },
      {
        images: {
          images: [
            {
              image: require("assets/img/team-1-800x800.jpg").default,
              text: "Team 1",
            },
            {
              image: require("assets/img/team-2-800x800.jpg").default,
              text: "Team 2",
            },
            {
              image: require("assets/img/team-3-800x800.jpg").default,
              text: "Team 3",
            },
            {
              image: require("assets/img/team-4-470x470.png").default,
              text: "Team 4",
            },
          ],
        },
      },
      {
        text: "90%",
        progress: { value: 90, color: "teal" },
      },
      {
        dropdown: { ...dropdownbutton, button: { color: "white", size: "sm" } },
      },
    ],
    [
      {
        image: require("assets/img/vue.jpg").default,
        text: "Vue Material Dashboard",
      },
      "$2,200 USD",
      {
        color: "emerald",
        text: "completed",
      },
      {
        images: {
          images: [
            {
              image: require("assets/img/team-1-800x800.jpg").default,
              text: "Team 1",
            },
            {
              image: require("assets/img/team-2-800x800.jpg").default,
              text: "Team 2",
            },
            {
              image: require("assets/img/team-3-800x800.jpg").default,
              text: "Team 3",
            },
            {
              image: require("assets/img/team-4-470x470.png").default,
              text: "Team 4",
            },
          ],
        },
      },
      {
        text: "100%",
        progress: { value: 100, color: "emerald" },
      },
      {
        dropdown: { ...dropdownbutton, button: { color: "white", size: "sm" } },
      },
    ],
  ],
};
export default textProps;
