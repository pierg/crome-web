import React from "react";
import PropTypes from "prop-types";

// components
import CustomCardMini from "../Custom/CustomCardMini";

export default function CustomHeader({ cards, color, states }) {
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
      <div className={"relative pt-20 pb-20 " + bgColors[color]}>
        <div className="px-12 mx-8 ">
          <div>
            <div className="flex flex-wrap justify-center">
              {cards.map((prop, key) => (
                <div key={key} className="w-full lg:w-4/12 xl:w-2/12 px-3">
                  <CustomCardMini {...prop} state={states[key]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CustomHeader.defaultProps = {
  cards: [],
  color: "blueGray",
};

CustomHeader.propTypes = {
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
