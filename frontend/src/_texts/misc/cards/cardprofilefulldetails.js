const textProps = {
  image: require("assets/img/faces/face-5.jpg").default,
  details: [
    {
      title: "Tony Mark",
      subtitle: "Name",
    },
    {
      title: "Project Manager",
      subtitle: "Position",
    },
  ],
  stats: [
    {
      title: "2,367",
      subtitle: "Followers",
    },
    {
      title: "247",
      subtitle: "Projects",
    },
    {
      title: "1,189",
      subtitle: "Commits",
    },
  ],
  team: {
    title: "Team",
    imagesOverlap: {
      size: "lg",
      images: [
        {
          image: require("assets/img/faces/face-1.jpg").default,
          text: "Ray Tompson",
        },
        {
          image: require("assets/img/faces/team-2.jpg").default,
          text: "Romina Hadid",
        },
        {
          image: require("assets/img/faces/team-1.jpg").default,
          text: "Alexander Smith",
        },
        {
          image: require("assets/img/faces/face-2.jpg").default,
          text: "Jessica Doe",
        },
      ],
    },
  },
  button: {
    color: "lightBlue",
    children: "Follow",
  },
};

export default textProps;
