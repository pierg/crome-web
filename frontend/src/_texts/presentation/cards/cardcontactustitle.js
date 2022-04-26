const textProps = {
  title: "Want to work with us?",
  description: "Complete this form and we will get back to you in 24 hours.",
  buttonText: "Send Message",
  inputs: [
    {
      labelText: "Full Name",
      inputProps: {
        placeholder: "Full Name",
        type: "text",
      },
    },
    {
      labelText: "Email",
      inputProps: {
        placeholder: "Email",
        type: "email",
      },
    },
    {
      labelText: "Message",
      inputProps: {
        placeholder: "Type a message...",
        type: "textarea",
        rows: "4",
        cols: "80",
      },
    },
  ],
};
export default textProps;
