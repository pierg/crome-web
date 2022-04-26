const textProps = {
  title: "Sign in with",
  subtitle: "Or sign in with credentials",
  socials: [
    { icon: "github", button: { href: "#pablo" } },
    { icon: "facebook", button: { href: "#pablo" } },
    { icon: "twitter", button: { href: "#pablo" } },
  ],
  button: {
    fullWidth: true,
    color: "dark",
    children: "Sign in",
  },
  forgotPassword: {
    href: "#pablo",
  },
  createAccount: {
    href: "#pablo",
  },
  checkbox: {
    label: "Remember me",
  },
  inputs: [
    {
      label: "Email",
      input: {
        type: "email",
        placeholder: "Email",
      },
    },
    {
      label: "Password",
      input: {
        type: "password",
        placeholder: "Password",
      },
    },
  ],
};
export default textProps;
