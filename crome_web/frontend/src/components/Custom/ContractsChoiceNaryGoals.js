import React, { useState } from "react";

function ContractsChoiceNaryGoals(props) {
  const [selectedGoals, setSelectedGoals] = useState([]);

  let listOfGoals = [];
  let lineClass = "";

  for (let i = 0; i < props.goals.length; i++) {
    lineClass =
      "border-b-1 text-lg p-3 rounded hover:bg-blueGray-200 text-blueGray-700 hover:text-blueGray-900 cursor-pointer";
    if (i === 0) {
      lineClass += " border-t-1";
    }
    if (selectedGoals.includes(props.goals[i])) {
      lineClass += " bg-blueGray-100 font-bold";
    }

    listOfGoals.push(
      <li key={i} onClick={() => lineClicked(i)} className={lineClass}>
        <div className="flex justify-between">
          <div>{props.goals[i].name}</div>
        </div>
      </li>
    );
  }
  const lineClicked = (i) => {
    let selectedTmp = selectedGoals;

    if (selectedTmp.includes(props.goals[i])) {
      selectedTmp = selectedTmp.filter((e) => e !== props.goals[i]);
    } else {
      selectedTmp.push(props.goals[i]);
    }
    setSelectedGoals(selectedTmp);
    props.setSelectedGoals(selectedTmp);
    if (selectedTmp.length < 2) {
      props.disableBuildButton(true);
    } else {
      props.disableBuildButton(false);
    }
  };

  return (
    <>
      <div className="flex m-3 text-2xl text-blueGray-500 uppercase font-bold justify-center ">
        Choose at least 2 goals
      </div>
      <div className="overflow-auto max-h-400-px pt-3 mx-4 mb-4">
        <ul>{listOfGoals}</ul>
      </div>
    </>
  );
}

export default ContractsChoiceNaryGoals;
