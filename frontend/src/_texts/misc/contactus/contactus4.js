const textProps = {
  heading2badge: {
    badge: { color: "light", children: "Get in touch" },
    title: "We are here to help your business",
    description:
      "I've said what I wanted and needed to say, so you can go to your mother, since you were not there.",
    alignment: "left",
    whiteContent: true,
  },
  image: require("assets/img/illustrations/1.svg").default,
  infoareas: [
    {
      icon: "fas fa-map-marker-alt",
      title: "Find us at the office",
      description: [
        "Bld Mihail Kogalniceanu, nr. 8,",
        "7652 Bucharest,",
        "Romania",
      ],
    },
    {
      icon: "fas fa-mobile",
      title: "Give us a ring",
      description: [
        "Michael Jordan",
        "+40 762 321 762",
        "Mon - Fri, 8:00-22:00",
      ],
    },
  ],
  card: {
    title: "Contact Us",
    components: [
      {
        label: "First name",
        md: 6,
        input: {
          leftIcon: "fas fa-user-circle",
          placeholder: "First name...",
          type: "text",
        },
      },
      {
        label: "Last name",
        md: 6,
        input: {
          leftIcon: "far fa-id-badge",
          placeholder: "Last name...",
          type: "text",
        },
      },
      {
        label: "Email address",
        input: {
          leftIcon: "fas fa-envelope",
          placeholder: "Email address...",
          type: "email",
        },
      },
      { label: "Your message", input: { type: "textarea", rows: 6 } },
    ],
    button: { color: "pink", children: "Send message" },
  },
};

export default textProps;
