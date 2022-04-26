const textProps = {
  title: "Signup with",
  subtitle: "Or Register with credentials",
  socials: [
    { icon: "twitter", button: { href: "#pablo" } },
    { icon: "facebook", button: { href: "#pablo" } },
  ],
  button: {
    color: "dark",
    children: "Register",
  },
  forgotPassword: {
    href: "#pablo",
  },
  createAccount: {
    href: "#pablo",
  },
  checkbox: {
    label: "Subscribe to Newsletter",
  },
  inputs: [
    {
      label: "Email",
      input: {
        type: "email",
        placeholder: "Email",
        border: "borderless",
      },
    },
    {
      label: "Password",
      input: {
        type: "password",
        placeholder: "Password",
        border: "borderless",
      },
    },
    {
      label: "Password Confirmation",
      input: {
        type: "password",
        placeholder: "Password again",
        border: "borderless",
      },
    },
  ],
};
export default textProps;
