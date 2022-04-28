import React, { useEffect } from "react";
import PropTypes from "prop-types";

const LTLTextArea = React.forwardRef(
  (
    {
      border,
      size,
      leftIcon,
      rightIcon,
      type,
      onChange,
      value,
      listOfWorldVariables,
      setLTLWorldValues,
      ...rest
    },
    ref
  ) => {
    const sizes = {
      sm: "px-2 py-2 text-sm ",
      lg: "px-3 py-3 text-sm ",
      regular: "px-3 py-2 text-sm ",
    };
    const borders = {
      border: "border-blueGray-300",
      borderless: "border-transparent shadow",
    };
    let inputClasses =
      sizes[size] +
      " w-full placeholder-blueGray-200 bg-white rounded-md outline-none border border-solid transition duration-200 ";
    inputClasses = borders[border] + " " + inputClasses;
    let leftAddon = null;
    let rightAddon = null;
    //let wrapperClasses = "mb-3 pt-0";
    let wrapperClasses = "mb-2 mt-2 ml-2 pt-0";
    if (leftIcon) {
      inputClasses = inputClasses + "pl-10 ";
      wrapperClasses = "relative flex w-full flex-wrap items-stretch mb-3";
      leftAddon = (
        <span className="z-10 h-full flex absolute text-center text-blueGray-300 text-sm items-center w-8 pl-3">
          <i className={leftIcon} />
        </span>
      );
    }
    if (rightIcon) {
      inputClasses = inputClasses + "pr-10 ";
      wrapperClasses = "relative flex w-full flex-wrap items-stretch mb-3";
      rightAddon = (
        <span className="z-10 h-full flex absolute text-center text-blueGray-300 text-sm items-center w-8 right-0">
          <i className={rightIcon} />
        </span>
      );
    }

    const [isFocused, setFocus] = React.useState(false);
    const [spanValue, setSpanValue] = React.useState(null);
    const [blink, setBlink] = React.useState("");

    function changeContent(e) {
      onChange(e);
    }

    function changeFocus(e) {
      // Display message ?
      setFocus(e);
    }

    useEffect(() => {
      let timeoutVariable;
      const interval = setInterval(() => {
        if (isFocused) {
          setBlink("|");
          timeoutVariable = setTimeout(function () {
            setBlink("");
          }, 500);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeoutVariable);
      };
    }, [isFocused]);

    useEffect(() => {
      let inputValue = value;
      let valuesInLTL = [[], [], []];
      let strToReplace = "";

      for (let i = 0; i < listOfWorldVariables.length; i++) {
        for (let j = 0; j < listOfWorldVariables[i].length; j++) {
          if (inputValue.includes(listOfWorldVariables[i][j])) {
            valuesInLTL[i].push(listOfWorldVariables[i][j]);
            strToReplace += listOfWorldVariables[i][j] + "|";
          }
        }
      }

      strToReplace = strToReplace.slice(0, -1);
      let result =
        strToReplace === ""
          ? inputValue
          : inputValue.replace(new RegExp(strToReplace, "g"), function (a) {
              return "<span class='text-red-500'>" + a + "</span>";
            });

      setSpanValue(result);
      setLTLWorldValues(valuesInLTL);
    }, [listOfWorldVariables, value]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <>
        <div className={wrapperClasses + " relative"} ref={ref}>
          {leftAddon}
          {type && type === "textarea" ? (
            <textarea {...rest} type={type} className={inputClasses} />
          ) : (
            <>
              <input
                {...rest}
                type={type}
                onChange={changeContent}
                onFocus={() => changeFocus(true)}
                onBlur={() => {
                  changeFocus(false);
                }}
                className={
                  inputClasses + " relative z-1 " + (value === "" ? "" : "opacity-0")
                }
                value={value}
              />
              <span
                className={
                  inputClasses +
                  " absolute w-full h-full top-0 left-0 z-0 " +
                  (isFocused
                    ? "ring ring-lightBlue-500 ring-1 border-lightBlue-500"
                    : "")
                }
                dangerouslySetInnerHTML={{ __html: spanValue + blink }}
              />
            </>
          )}
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
