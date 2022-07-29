import React from "react";

function LegendCGG() {
  return (
    <fieldset className="border w-64 p-2 bg-white rounded shadow-md min-w-0 break-words absolute left-0 top-0">
      <legend className=" pl-2 w-auto">CGG Legend</legend>

      <div className="flex items-center pl-4 py-1">
        <div className="box-content bg-indigo-200 border-indigo-500 h-5 w-10 border-2 rounded-lg"></div>
        <span className="ml-4 font-bold uppercase text-blueGray-700">
          Created goals
        </span>
      </div>

      <div className="flex items-center pl-4 py-1">
        <div className="box-content bg-white border-emerald-500 h-5 w-10 border-2 rounded-lg"></div>
        <span className="ml-4 font-bold uppercase text-blueGray-700">
          Initial goals
        </span>
      </div>

      <div className="flex items-center pl-4  ">
        <svg className="pl-1 w-10" viewBox="0 20 80 50">
          <line x1="0" y1="50" x2="50" y2="50" stroke="#000" strokeWidth="6" />
          <polygon points="50 35, 50 65, 80 50" />
        </svg>

        <span className="font-bold ml-4 uppercase text-blueGray-700">
          Refinement link
        </span>
      </div>

      <div className="flex items-center pl-4 ">
        <svg className="pl-1 w-10" viewBox="0 20 80 50">
          <line x1="0" y1="50" x2="50" y2="50" stroke="#000" strokeWidth="6" />
          <circle cx="60" cy="50" r="15" stroke="black" strokeWidth="3" />
        </svg>

        <span className="font-bold ml-4 uppercase text-blueGray-700">
          Conjunction link
        </span>
      </div>

      <div className="flex items-center pl-4 ">
        <svg className="pl-1 w-10" viewBox="0 20 80 50">
          <line x1="0" y1="50" x2="50" y2="50" stroke="#000" strokeWidth="6" />
          <polygon points="40 50, 60 35, 80 50, 60 65" />
        </svg>

        <span className="font-bold ml-4 uppercase text-blueGray-700">
          Composition link
        </span>
      </div>
    </fieldset>
  );
}

export default LegendCGG;
