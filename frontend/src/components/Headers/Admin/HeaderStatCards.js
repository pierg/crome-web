import React from "react";
import PropTypes from "prop-types";

// components
import CardStatsMini from "../../../components/Cards/Admin/CardStatsMini.js";

export default function HeaderStatCards({ cards, color }) {
  const bgColors = {
    light: "bg-blueGray-200",
    dark: "bg-blueGray-800",
    blueGray: "bg-blueGray-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    amber: "bg-amber-500",
    emerald: "bg-emerald-500",
    teal: "bg-teal-500",
    lightBlue: "bg-lightBlue-500",
    indigo: "bg-indigo-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
  };
  return (
    <>
      <div className={"relative pt-32 pb-32 " + bgColors[color]}>
        <div className="px-4 md:px-6 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              {cards.map((prop, key) => (
                <div key={key} className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStatsMini {...prop} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

HeaderStatCards.defaultProps = {
  cards: [],
  color: "blueGray",
};

HeaderStatCards.propTypes = {
  // array of props to pass to the CardStatsMini component
  cards: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.oneOf([
    "light",
    "dark",
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
};
