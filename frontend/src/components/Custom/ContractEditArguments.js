import React from "react";
import {UncontrolledTooltip} from "reactstrap";
import Input from "../Elements/Input";
import makeStringOf from "hooks/listToStringConversion.js";

const ContractEditArguments = ({
  content,
  changeParameter,
  number,
  infos
}) => {
  return (
      <>
        {content.map((prop, key) => (
            <div key={key} className="grid grid-template-25-75 items-center">
              <div className="mr-4 text-right whitespace-nowrap">{prop.name[0].toUpperCase()+prop.name.slice(1)+" : "}</div>

              <Input id={"tooltipValues"+number+key} autoComplete="off" className="ml-2" placeholder={prop.format === "list" ? infos.placeholders.listOfValues : infos.placeholders.singleValues} value={makeStringOf(prop.value)} name="subValue" onChange={(e) => changeParameter(e, key)}/>
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