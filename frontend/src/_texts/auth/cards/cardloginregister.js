const textProps = {
  color: "dark",
  detailsPanel: {
    leftTitle: "Join Us!",
    leftDescription:
      "To keep connected with us please login with your personal info",
    leftButton: {
      children: "Sign up",
      color: "light",
      size: "sm",
    },
    rightTitle: "Welcome back!",
    rightDescription: "Enter your personal details and start journey with us",
    rightButton: {
      children: "Sign in",
      color: "light",
      size: "sm",
    },
  },
  leftCard: {
    title: "Sign in with",
    subtitle: "or use your account",
    button: {
      children: "sign in",
      color: "dark",
    },
    inputs: [
      {
        leftIcon: "fas fa-envelope",
        placeholder: "Email",
        type: "email",
        border: "borderless",
      },
      {
        leftIcon: "fas fa-lock",
        placeholder: "Password",
        type: "password",
        border: "borderless",
      },
    ],
    socials: [
      {
        icon: "fab fa-facebook",
        button: {
          size: "sm",
          color: "facebook",
        },
      },
      {
        icon: "fab fa-instagram",
        button: {
          size: "sm",
          color: "instagram",
        },
      },
      {
        icon: "fab fa-twitter",
        button: {
          size: "sm",
          color: "twitter",
        },
      },
    ],
  },
  rightCard: {
    title: "Create Account",
    subtitle: "or use your email for registration",
    button: {
      children: "sign up",
      color: "dark",
    },
    inputs: [
      {
        leftIcon: "fas fa-user",
        placeholder: "Name",
        type: "name",
        border: "borderless",
      },
      {
        leftIcon: "fas fa-envelope",
        placeholder: "Email",
        type: "email",
        border: "borderless",
      },
      {
        leftIcon: "fas fa-lock",
        placeholder: "Password",
        type: "password",
        border: "borderless",
      },
    ],
    socials: [
      {
        icon: "fab fa-facebook",
        button: {
          size: "sm",
          color: "facebook",
        },
      },
      {
        icon: "fab fa-instagram",
        button: {
          size: "sm",
          color: "instagram",
        },
      },
      {
        icon: "fab fa-twitter",
        button: {
          size: "sm",
          color: "twitter",
        },
      },
    ],
  },
};
export default textProps;
