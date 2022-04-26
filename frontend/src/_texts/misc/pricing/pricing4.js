import cardpricingdetails from "_texts/misc/cards/cardpricingdetails.js";

const textProps = {
  heading2: {
    color: "emerald",
    subtitle: "Our licenses",
    title: "Choose the best option for you",
    description:
      "If you want money, you should know that they will not fall just like that from the sky. You want friends, you need to speak sincerely. You want respect, you need to respect.",
    alignment: "center",
  },
  buttons: [
    {
      children: "Monthly",
      color: "dark",
    },
    {
      children: "Yearly",
      color: "white",
    },
  ],
  cards: [
    { ...cardpricingdetails },
    {
      head: "PRO",
      title: "$249",
      description: "per month",
      list: [
        {
          icon: "fas fa-book",
          text: "Complete documentation",
          color: "orange",
        },
        {
          icon: "fab fa-sketch",
          text: "Working materials in Sketch",
          color: "orange",
        },
        {
          icon: "fas fa-cloud",
          text: "2GB cloud storage",
          color: "orange",
        },
      ],
      link: {
        children: "Get Started",
        href: "#pablo",
      },
      footer: {
        children: "Request a demo",
        href: "#pablo",
      },
      color: "orange",
      gradient: false,
    },
    {
      head: "Enterprise",
      title: "$899",
      description: "per month",
      list: [
        {
          icon: "fas fa-book",
          text: "Complete documentation",
          color: "emerald",
        },
        {
          icon: "fab fa-sketch",
          text: "Working materials in Sketch",
          color: "emerald",
        },
        {
          icon: "fas fa-cloud",
          text: "2GB cloud storage",
          color: "emerald",
        },
      ],
      link: {
        children: "Get Started",
        href: "#pablo",
      },
      footer: {
        children: "Request a demo",
        href: "#pablo",
      },
      color: "emerald",
      gradient: false,
    },
  ],
};

export default textProps;
