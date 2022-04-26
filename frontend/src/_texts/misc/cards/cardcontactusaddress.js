const textProps = {
  title: "Contact Us",
  button: {
    children: "Send Message",
    color: "lightBlue",
  },
  components: [
    {
      width: 12,
      md: 6,
      infoarea: {
        icon: "fas fa-phone",
        color: "lightBlue",
        title: "Give us a ring",
        description: [
          "Alice Grace",
          "+40 762 321 762",
          "Mon - Fri, 8:00-17:00",
        ],
      },
    },
    {
      width: 12,
      md: 6,
      infoarea: {
        icon: "fas fa-map-marker-alt",
        color: "lightBlue",
        title: "Find us at",
        description: [
          "St. Michael Kog, no. 8,",
          "7652 San Francisco,",
          "United States",
        ],
      },
    },
    {
      width: 12,
      md: 6,
      label: "First name",
      input: {
        placeholder: "First name...",
        type: "text",
      },
    },
    {
      width: 12,
      md: 6,
      label: "Email address",
      input: {
        placeholder: "Email address...",
        type: "Email",
      },
    },
  ],
};

export default textProps;
