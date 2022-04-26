const textProps = {
  title: "Sign up with",
  subtitle: "Or sign up with credentials",
  socials: [
    { icon: "github", button: { href: "#pablo" } },
    { icon: "facebook", button: { href: "#pablo" } },
  ],
  button: {
    fullWidth: true,
    color: "dark",
    children: "Create account",
  },
  checkbox: {
    label: "I agree with the Privacy Policy",
  },
  inputs: [
    {
      label: "Name",
      input: {
        type: "text",
        placeholder: "Name",
      },
    },
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
