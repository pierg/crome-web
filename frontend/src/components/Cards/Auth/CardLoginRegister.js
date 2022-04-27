import React from "react";
import PropTypes from "prop-types";
// components
import Input from "../../../components/Elements/Input.js";
import Button from "../../../components/Elements/Button.js";

export default function CardLoginRegister({
  leftCard,
  rightCard,
  detailsPanel,
  color,
}) {
  const [animating, setAntimating] = React.useState(false);
  const [leftCardTransform, setLeftCardTransform] = React.useState("");
  const [rightCardTransform, setRightCardTransform] = React.useState(
    "z-1 opacity-0"
  );
  const [panelTransform, setPanelTransform] = React.useState("");
  const [panelInnerTransform, setPanelInnerTransform] = React.useState("");
  const [panelLeftTransform, setPanelLeftTransform] = React.useState("");
  const [panelRightTransform, setPanelRightTransform] = React.useState(
    "-translate-x-1/5"
  );
  const animation = () => {
    if (!animating) {
      setAntimating(true);
      panelTransform === ""
        ? setPanelTransform("-translate-x-full")
        : setPanelTransform("");
      panelInnerTransform === ""
        ? setPanelInnerTransform("translate-x-1/2")
        : setPanelInnerTransform("");
      panelRightTransform === ""
        ? setPanelRightTransform("-translate-x-1/5")
        : setPanelRightTransform("");
      panelLeftTransform === ""
        ? setPanelLeftTransform("translate-x-1/5")
        : setPanelLeftTransform("");
      leftCardTransform === ""
        ? setLeftCardTransform("translate-x-full")
        : setLeftCardTransform("");
      rightCardTransform === "z-1 opacity-0"
        ? setRightCardTransform("z-5 opcity-1 translate-x-full")
        : setRightCardTransform("z-1 opacity-0");
      setTimeout(function () {
        setAntimating(false);
      }, 710);
    }
  };
  let panelColorClass = {
    light: "bg-blueGray-200 text-blueGray-700",
    dark: "bg-blueGray-800 text-white",
    blueGray: "bg-blueGray-500 text-white",
    red: "bg-red-500 text-white",
    orange: "bg-orange-500 text-white",
    amber: "bg-amber-500 text-white",
    emerald: "bg-emerald-500 text-white",
    teal: "bg-teal-500 text-white",
    lightBlue: "bg-lightBlue-500 text-white",
    indigo: "bg-indigo-500 text-white",
    purple: "bg-purple-500 text-white",
    pink: "bg-pink-500 text-white",
  };
  return (
    <>
      <div className="bg-blueGray-200 rounded-lg shadow-lg relative overflow-hidden h-full z-1 max-w-full min-h-480-px w-768-px container mx-auto px-4">
        {/* left card start */}
        <div
          className={
            "transition-all bg-blueGray-200 duration-700 ease-in-out h-full top-0 absolute w-1/2 left-0 z-2 transform " +
            leftCardTransform
          }
        >
          <form className="flex items-center justify-center flex-col px-12 h-full text-center">
            <h2 className="text-2xp mb-3 font-bold">{leftCard.title}</h2>
            <div className="text-center">
              {leftCard.socials.map((prop, key) => (
                <Button key={key} {...prop.button}>
                  <i className={prop.icon}></i>
                  {prop.button && prop.button.children}
                </Button>
              ))}
            </div>
            <span className="text-blueGray-500 mt-6 mb-3">
              {leftCard.subtitle}
            </span>
            {leftCard.inputs.map((prop, key) => (
              <Input key={key} {...prop} />
            ))}
            <div className="mt-3">
              <Button {...leftCard.button} />
            </div>
          </form>
        </div>
        {/* left card stop */}
        {/* right card start */}
        <div
          className={
            "transition-all bg-blueGray-200 duration-700 ease-in-out h-full top-0 absolute w-1/2 left-0 transform " +
            rightCardTransform
          }
        >
          <form className="flex items-center justify-center flex-col px-12 h-full text-center">
            <h2 className="text-2xp mb-2 font-bold">{rightCard.title}</h2>
            <div className="text-center">
              {rightCard.socials.map((prop, key) => (
                <Button key={key} {...prop.button}>
                  <i className={prop.icon}></i>
                  {prop.button && prop.button.children}
                </Button>
              ))}
            </div>
            <span className="text-blueGray-500 mt-6 mb-3">
              {rightCard.subtitle}
            </span>
            {rightCard.inputs.map((prop, key) => (
              <Input key={key} {...prop} />
            ))}
            <div className="mt-3">
              <Button {...rightCard.button} />
            </div>
          </form>
        </div>
        {/* right card stop */}
        {/* panel start */}
        <div
          className={
            "transition-all duration-700 ease-in-out transform absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-9999 " +
            panelTransform
          }
        >
          <div
            className={
              panelColorClass[color] +
              " transition-all duration-700 ease-in-out transform relative -left-full h-full w-double " +
              panelInnerTransform
            }
          >
            {/* left panel start */}
            <div
              className={
                "transition-all duration-700 ease-in-out transform absolute flex items-center justify-center flex-col p-10 text-center top-0 right-0 h-full w-1/2 " +
                panelLeftTransform
              }
            >
              <h3 className="text-2xp mb-2 font-bold">
                {detailsPanel.leftTitle}
              </h3>
              <p className="mb-6">{detailsPanel.leftDescription}</p>
              <Button {...detailsPanel.leftButton} onClick={animation} />
            </div>
            {/* left panel stop */}
            {/* right panel start */}
            <div
              className={
                "transition-all duration-700 ease-in-out transform absolute flex items-center justify-center flex-col p-10 text-center top-0 h-full w-1/2 " +
                panelRightTransform
              }
            >
              <h3 className="text-2xp mb-2 font-bold">
                {detailsPanel.rightTitle}
              </h3>
              <p className="mb-6">{detailsPanel.rightDescription}</p>
              <Button {...detailsPanel.rightButton} onClick={animation} />
            </div>
            {/* right panel stop */}
          </div>
        </div>
        {/* panel stop */}
      </div>
    </>
  );
}

const cardTypes = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  // array of props to pass to the Input components
  inputs: PropTypes.arrayOf(PropTypes.object),
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      // props to pass to the Button component that wrapps the icon
      button: PropTypes.object,
    })
  ),
});

CardLoginRegister.defaultProps = {
  leftCard: { inputs: [], button: {}, socials: [] },
  rightCard: { inputs: [], button: {}, socials: [] },
  detailsPanel: {
    leftButton: {},
    rightButton: {},
  },
  color: "dark",
};

CardLoginRegister.propTypes = {
  leftCard: cardTypes,
  rightCard: cardTypes,
  detailsPanel: PropTypes.shape({
    leftTitle: PropTypes.string,
    leftDescription: PropTypes.string,
    leftButton: PropTypes.object,
    rightTitle: PropTypes.string,
    rightDescription: PropTypes.string,
    rightButton: PropTypes.object,
  }),
  // color for the detailsPanel
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
