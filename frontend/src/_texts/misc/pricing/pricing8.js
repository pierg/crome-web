const textProps = {
  heading2badge: {
    badge: { color: "lightBlue", children: "Team packages" },
    title: "I have the sixth sense",
    description:
      "I see all money with cuffs, even though they are given by saints. I have had in my hands strange money bills, for somebody untrained, all of them would have been quite nice.",
    alignment: "center",
  },
  color: "blueGray",
  table: {
    head: [
      {
        image: require("assets/img/illustrations/bg4-1.svg").default,
      },
      {
        title: "Essential",
        button: {
          children: "Get Started",
          color: "dark",
          size: "sm",
        },
        link: {
          href: "#pablo",
          children: "Learn more",
        },
      },
      {
        title: "Premium",
        button: {
          children: "Get Started",
          color: "dark",
          size: "sm",
        },
        link: {
          href: "#pablo",
          children: "Learn more",
        },
      },
      {
        title: "Enterprise",
        button: {
          children: "Get Started",
          color: "dark",
          size: "sm",
        },
        link: {
          href: "#pablo",
          children: "Learn more",
        },
      },
    ],
    body: [
      {
        line: "Pricing",
      },
      ["Plan cost", "Free", "99$/month", "299$/month"],
      [
        "Plan cost",
        "3%",
        "5%",
        { link: { href: "#pablo", children: "Contact us" } },
      ],
      [
        "Payment processing",
        "5.5% + 5c",
        "6.2% + 5c",
        { link: { href: "#pablo", children: "Contact us" } },
      ],
      {
        line: "Features",
      },
      [
        "Custom messages",
        {
          icon: "fas fa-times-circle",
          color: "red",
        },
        {
          icon: "fas fa-times-circle",
          color: "red",
        },
        {
          icon: "fas fa-times-circle",
          color: "red",
        },
      ],
      [
        "Multiple requests",
        {
          icon: "fas fa-times-circle",
          color: "red",
        },
        {
          icon: "fas fa-times-circle",
          color: "red",
        },
        {
          icon: "fas fa-times-circle",
          color: "red",
        },
      ],
      [
        "Team fundraising",
        {
          icon: "fas fa-check-circle",
          color: "emerald",
        },
        {
          icon: "fas fa-check-circle",
          color: "emerald",
        },
        {
          icon: "fas fa-check-circle",
          color: "emerald",
        },
      ],
      [
        "Basic donor data",
        {
          icon: "fas fa-check-circle",
          color: "emerald",
        },
        {
          icon: "fas fa-times-circle",
          color: "red",
        },
        {
          icon: "fas fa-times-circle",
          color: "red",
        },
      ],
    ],
  },
};

export default textProps;
