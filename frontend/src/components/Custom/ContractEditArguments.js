import React from "react";
import {UncontrolledTooltip} from "reactstrap";
import Input from "../Elements/Input";
import makeStringOf from "hooks/listToStringConversion.js";
import PropTypes from "prop-types";

const ContractEditArguments = ({
  border,
  size,
  content,
  changeParameter,
  number,
  infos
}) => {
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
  return (
      <>
        {content.map((prop, key) => (
            <div key={key} className="grid grid-template-25-75 items-center">
              <div className="mr-4 text-right whitespace-nowrap">
                {prop.name[0].toUpperCase()+prop.name.slice(1)+" : "}
              </div>

              <input
                id={"tooltipValues"+number+key}
                type="text"
                autoComplete="off"
                className= {inputClasses}
                placeholder={prop.format === "list" ? infos.placeholders.listOfValues : infos.placeholders.singleValues}
                value={makeStringOf(prop.value)}
                name="subValue"
                onChange={(e) => changeParameter(e, key)}
              />
              {prop.format === "list" && (
                  <UncontrolledTooltip
                      delay={100}
                      placement="bottom"
                      target={"tooltipValues"+number+key}
                  >
                    To enter several values, separate them with ","
                  </UncontrolledTooltip>
              )}
            </div>))}
      </
>
  );
};
export default ContractEditArguments;

ContractEditArguments.defaultProps = {
  border: "border",
  size: "regular",
};

ContractEditArguments.propTypes = {
  border: PropTypes.oneOf(["border", "borderless"]),
  size: PropTypes.oneOf(["sm", "lg", "regular"]),
};