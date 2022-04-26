import cardstatsmini from "_texts/admin/cards/cardstatsmini.js";

const textProps = {
  color: "lightBlue",
  cards: [
    { ...cardstatsmini },
    {
      statSubtitle: "NEW USERS",
      statTitle: "2,356",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-red-500",
      statDescripiron: "Since last week",
      statIconName: "fas fa-chart-pie",
      statIconColor: "bg-orange-500",
    },
    {
      statSubtitle: "SALES",
      statTitle: "924",
      statArrow: "down",
      statPercent: "1.10",
      statPercentColor: "text-orange-500",
      statDescripiron: "Since yesterday",
      statIconName: "fas fa-users",
      statIconColor: "bg-pink-500",
    },
    {
      statSubtitle: "PERFORMANCE",
      statTitle: "49,65%",
      statArrow: "up",
      statPercent: "12",
      statPercentColor: "text-emerald-500",
      statDescripiron: "Since last month",
      statIconName: "fas fa-percent",
      statIconColor: "bg-lightBlue-500",
    },
  ],
};
export default textProps;
