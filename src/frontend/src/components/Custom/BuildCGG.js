import React from "react";
import Button from "../Elements/Button";
import LibraryView from "./LibraryView";

/**
 * Create the component printing the goals and libraries and allowing to build the CGG
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function BuildCGG(props) {
  const goals = [];
  if (props.goals != null) {
    for (let i = 0; i < props.goals.length; i += 1) {
      if (i === 0)
        goals.push(
          <li
            key={i}
            className="border-b-1 border-t-1 text-blueGray-700 text-lg py-1 hover:bg-blueGray-100 cursor-pointer"
            onClick={() => props.clickOnGoal2(i)}
          >
            {props.goals[i].name}
          </li>
        );
      else
        goals.push(
          <li
            key={i}
            className="border-b-1 text-blueGray-700 text-lg py-1 hover:bg-blueGray-100 cursor-pointer"
            onClick={() => props.clickOnGoal2(i)}
          >
            {props.goals[i].name}
          </li>
        );
    }
  }

  return (
    <div className="w-full lg:w-5/12 xl:w-6/12 flex-col ml-12">
      <div className=" px-3 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg mb-12">
        <div className="flex flex-col justify-center p-4 pr-0">
          <span className="font-bold text-xl uppercase text-blueGray-700">
            Input Goals
          </span>

          <div className="overflow-auto max-h-200-px pt-3 px-5">
            <ul>{goals}</ul>
          </div>
          <div className="flex flex-col m-auto py-2 uppercase">
            <Button onClick={() => props.callCGG("auto")}>Build CGG</Button>
          </div>
        </div>
      </div>
      <LibraryView />
    </div>
  );
}

export default BuildCGG;
