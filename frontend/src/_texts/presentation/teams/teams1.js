import infoArea1 from "_texts/presentation/infoarea/infoareauser.js";

const textProps = {
  heading3: {
    color: "orange",
    subtitle: "The entourage",
    title: "It is everything, and it won't change",
    description:
      "It depends on your friends and companions, it depends on who goes out with you, if they have money, if you have money.",
    alignment: "center",
  },
  infoAreas: [
    {
      ...infoArea1,
    },
    {
      image: require("assets/img/team-2-800x800.jpg").default,
      name: "Romina Hadid",
      jobTitle: "Marketing Specialist",
      socialLinks: [
        {
          icon: "instagram",
          link: "#pablo",
        },
        {
          icon: "facebook",
          link: "#pablo",
        },
      ],
    },
    {
      image: require("assets/img/team-3-800x800.jpg").default,
      name: "Alexa Smith",
      jobTitle: "UI/UX Designer",
      socialLinks: [
        {
          icon: "instagram",
          link: "#pablo",
        },
        {
          icon: "facebook",
          link: "#pablo",
        },
        {
          icon: "twitter",
          link: "#pablo",
        },
      ],
    },
    {
      image: require("assets/img/team-4-470x470.png").default,
      name: "Jenna Kardi",
      jobTitle: "Founder and CEO",
      socialLinks: [
        {
          icon: "instagram",
          link: "#pablo",
        },
        {
          icon: "facebook",
          link: "#pablo",
        },
        {
          icon: "twitter",
          link: "#pablo",
        },
        {
          icon: "dribbble",
          link: "#pablo",
        },
      ],
    },
  ],
};
export default textProps;
