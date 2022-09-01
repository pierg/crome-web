import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/textEditorStyle.css";
import LTLEdit from "./LTLEdit";

const LTLTextArea = React.forwardRef(
  (
    {
      border,
      size,
      leftIcon,
      rightIcon,
      type,
      changeParameter,
      value,
      listOfWorldVariables,
      setLTLWorldValues,
      ...rest
    },
    ref
  ) => {
    let leftAddon = null;
    let rightAddon = null;
    //let wrapperClasses = "mb-3 pt-0";
    let wrapperClasses = "mb-2 mt-2 ml-2 pt-0";
    if (leftIcon) {
      wrapperClasses = "relative flex w-full flex-wrap items-stretch mb-3";
      leftAddon = (
        <span className="z-10 h-full flex absolute text-center text-blueGray-300 text-sm items-center w-8 pl-3">
          <i className={leftIcon} />
        </span>
      );
    }
    if (rightIcon) {
      wrapperClasses = "relative flex w-full flex-wrap items-stretch mb-3";
      rightAddon = (
        <span className="z-10 h-full flex absolute text-center text-blueGray-300 text-sm items-center w-8 right-0">
          <i className={rightIcon} />
        </span>
      );
    }

    return (
      <>
        <div className={wrapperClasses + " relative"} ref={ref}>
          {leftAddon}
          <LTLEdit
            goalEdit={true}
            value={value}
            changeParameter={changeParameter}
            size={12}
            inputsValue={listOfWorldVariables.toString()}
          />
          {rightAddon}
        </div>
      </>
    );
  }
);

LTLTextArea.defaultProps = {
  border: "border",
  size: "regular",
};

LTLTextArea.propTypes = {
  border: PropTypes.oneOf(["border", "borderless"]),
  size: PropTypes.oneOf(["sm", "lg", "regular"]),
  // NOTE: you sould only pass icon classes
  // // // if you also pass tailwindcss classes
  // // // the output may not be a desired one
  leftIcon: PropTypes.string,
  // NOTE: you sould only pass icon classes
  // // // if you also pass tailwindcss classes
  // // // the output may not be a desired one
  rightIcon: PropTypes.string,
};

export default LTLTextArea;
