import cardinfoiconProps from "_texts/presentation/cards/cardpricing.js";

const textProps = {
  title: "Choose a plan for your next project",
  firstButtonText: "Freelancer",
  secondButtonText: "Enterprise",
  defaultOpen: 1,
  description:
    "You have Free Unlimited Updates and Premium Support on each package. You also have 20 days to request a refund.",
  cardinfoiconProps: { ...cardinfoiconProps },
  cardblogimageProps: {
    headText: "Premium",
    price: "$59",
    unit: "per month",
    list: [
      {
        feature: "50GB",
        text: "File Storage",
      },
      {
        feature: "100",
        text: "Users",
      },
      {
        feature: "Premium",
        text: "Support",
      },
    ],
    link: {
      href: "#pablo",
      children: "Request a demo",
    },
  },
  cardcontactustitleProps: {
    headText: "Gold",
    price: "$100",
    unit: "per month",
    list: [
      {
        feature: "200GB",
        text: "File Storage",
      },
      {
        feature: "Unlimited",
        text: "Users",
      },
      {
        feature: "Premium",
        text: "Support",
      },
    ],
    link: {
      href: "#pablo",
      children: "Request a demo",
    },
  },
  cardinfoimageProps: {
    headText: "Platinum",
    price: "$135",
    unit: "per month",
    list: [
      {
        feature: "500GB",
        text: "File Storage",
      },
      {
        feature: "Premium",
        text: "Users",
      },
      {
        feature: "No time",
        text: "Tracking",
      },
    ],
    link: {
      href: "#pablo",
      children: "Request a demo",
    },
  },
};
export default textProps;
