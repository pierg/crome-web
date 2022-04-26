const textProps = {
  inputs: [
    {
      label: "Your Name",
      md: 6,
      input: {
        leftIcon: "fas fa-user-circle",
        placeholder: "ex: John Smith",
        type: "text",
      },
    },
    {
      label: "Job Title",
      md: 6,
      input: {
        leftIcon: "fas fa-book",
        placeholder: "ex: Managing Parter",
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
    {
      label: "Your message",
      input: {
        type: "textarea",
        rows: 6,
      },
    },
  ],
  button: {
    color: "dark",
    children: "Contact Us",
  },
};
export default textProps;
