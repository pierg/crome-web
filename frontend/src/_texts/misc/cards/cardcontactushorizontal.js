const textProps = {
  left: {
    title: "Send us a message",
    subtitle: "Our team will reply in 2-3 business days",
    button: {
      children: "Send Message",
      color: "lightBlue",
    },
    inputs: [
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
      {
        width: 12,
        label: "Your message",
        input: {
          placeholder: "Your message",
          type: "textarea",
          rows: 6,
        },
      },
    ],
  },
  color: "lightBlue",
  right: {
    title: "Other contact details",
    subtitle: "Come and visit us",
    list: [
      {
        icon: "fas fa-map-marker-alt",
        text: "5th Avenue, New York",
      },
      {
        icon: "fas fa-phone",
        text: "+40 (312) 563 241",
      },
      {
        icon: "fas fa-envelope",
        text: "hello@creative-tim.com",
      },
      {
        icon: "fas fa-headphones",
        text: "support@creative-tim.com",
      },
    ],
  },
};

export default textProps;
