import cardpricinglist from "_texts/e-commerce/cards/cardpricinglist.js";
import cardtabledetails from "_texts/e-commerce/cards/cardtabledetails.js";

const textProps = {
  heading3: {
    color: "dark",
    subtitle: "Have you seen us?",
    title: "Some of Our Pricing Plans",
    description:
      "The time is now for it to be okay to be great. People in this world shun people for being great.",
    alignment: "left",
  },
  leftCard: {
    ...cardpricinglist,
  },
  rightCard: {
    ...cardtabledetails,
  },
};
export default textProps;
