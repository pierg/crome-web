import React from "react";
import classnames from "classnames";
import { Table } from "reactstrap";
import makeStringOf from "hooks/listToStringConversion.js";
import searchPatterns from "hooks/searchPatterns.js";
import Switch from "react-bootstrap-switch";
import Button from "../Elements/Button";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

const ContractAccordionItem = ({
  contract,
  color,
  setOpen,
  defaultOpened,
  patterns,
  modal,
}) => {
  const [collapseOpen, setCollapseOpen] = React.useState(defaultOpened);
  const [rotate, setRotate] = React.useState(defaultOpened);
  const [collapseStyle, setCollapseStyle] = React.useState(undefined);
  const [animation, setAnimation] = React.useState(false);
  const [toggleLTL, setToggleLTL] = React.useState(true);
  const collapseRef = React.useRef(null);

  const openAnimation = () => {
    setOpen(true);
    if (!collapseOpen && collapseStyle === undefined) {
      setCollapseStyle(0);
    }
    setCollapseOpen(true);
    setTimeout(function () {
      setCollapseStyle(collapseRef.current.scrollHeight);
    }, 10);
    setTimeout(function () {
      setAnimation(false);
    }, 310);
  };
  const closeAnimation = () => {
    setOpen(false);
    let timeOutTime = 0;
    if (collapseOpen && collapseStyle === undefined) {
      setCollapseStyle(collapseRef.current.scrollHeight);
      timeOutTime = 10;
    }
    setTimeout(function () {
      setCollapseStyle(0);
    }, timeOutTime);
    setTimeout(function () {
      setAnimation(false);
      setCollapseOpen(false);
    }, 310);
  };
  const startAnimation = (e) => {
    e.preventDefault();
    if (!animation) {
      setAnimation(true);
      setRotate(!rotate);
      if (collapseOpen) {
        closeAnimation();
      } else {
        openAnimation();
      }
    }
  };
  React.useEffect(() => {
    if (!defaultOpened) {
      setCollapseStyle(collapseRef.current.scrollHeight);
      setRotate(false);
      setTimeout(function () {
        setCollapseStyle(0);
      }, 10);
      setTimeout(function () {
        setAnimation(false);
        setCollapseOpen(false);
      }, 310);
    }
  }, [defaultOpened]);

  React.useEffect(() => {
    setCollapseStyle(collapseRef.current.scrollHeight);
  }, [toggleLTL]);

  const colors = {
    blueGray: "text-blueGray-700 hover:text-blueGray-900",
    red: "text-red-500 hover:text-red-700",
    orange: "text-orange-500 hover:text-orange-700",
    amber: "text-amber-500 hover:text-amber-700",
    emerald: "text-emerald-500 hover:text-emerald-700",
    teal: "text-teal-500 hover:text-teal-700",
    lightBlue: "text-lightBlue-500 hover:text-lightBlue-700",
    indigo: "text-indigo-500 hover:text-indigo-700",
    purple: "text-purple-500 hover:text-purple-700",
    pink: "text-pink-500 hover:text-pink-700",
  };

  const childrenTR = [];
  let cpt = 0;
  for (let i = 0; i < contract.length; i += 1) {
    childrenTR[i] = [];
    for (let j = 0; j < contract[i].content.length; j += 1) {
      if (toggleLTL) {
        childrenTR[i].push(
          <tr key={cpt}>
            <td>{contract[i].content[j].ltl_value}</td>
          </tr>
        );
        cpt++;
      } else {
        if (contract[i].content[j].pattern !== undefined) {
          childrenTR[i].push(
            <>
              <tr key={cpt}>
                <td className="flex flex-col items-start">
                  <Tooltip
                    title="Edit"
                    position="right"
                    arrow="true"
                    html={patterns[j].description}
                  >
                    <p id={"dropDownMenu"}>{contract[i].content[j].pattern.name}</p>
                  </Tooltip>
                  {searchPatterns(contract[i].content[j].pattern, patterns).map(
                    (arg, subKey) => (
                      <p key={subKey}>{arg.name + " : " + makeStringOf(arg.value)}</p>
                    )
                  )}
                </td>
              </tr>
            </>
          );
          cpt++;
        }
      }
    }
  }

  return (
    <>
      <div className="bg-transparent first:rounded-t px-4 py-3">
        <a href="#openCollapse" onClick={startAnimation}>
          <h5
            className={
              colors[color] +
              " mb-0 font-semibold text-center duration-300 transition-all ease-in-out"
            }
          >
            {"Show Contract"}
            <i
              className={classnames(
                "text-sm mr-2 float-right fas fa-chevron-down duration-300 transition-all ease-in-out transform",
                { "rotate-180": rotate }
              )}
            />
          </h5>
        </a>
      </div>
      <div
        className={classnames("duration-300 transition-all ease-in-out", {
          block: collapseOpen,
          hidden: !collapseOpen,
        })}
        style={{
          height: "auto",
          maxHeight: collapseStyle,
        }}
        ref={collapseRef}
      >
        <div className="flex justify-end">
          <Switch
            offText="Pattern"
            onText="LTL"
            onChange={(e) => setToggleLTL(e.state.value)}
          />
        </div>
        {contract.map((prop, key) => (
          <div key={key} className="text-blueGray-500 px-4 flex-auto leading-relaxed">
            <Table responsive>
              <thead>
                <tr>
                  <th className={"title-up font-semibold-important"}>{prop.title}</th>
                </tr>
              </thead>
              <tbody>{childrenTR[key]}</tbody>
            </Table>
          </div>
        ))}

        {modal !== undefined && (
          <div className="flex justify-center">
            <Button onClick={() => modal(true)}>Show Details</Button>
          </div>
        )}
      </div>
    </>
  );
};

ContractAccordionItem.defaultProps = {
  defaultOpened: false,
  setOpen: () => {},
};

export default ContractAccordionItem;
