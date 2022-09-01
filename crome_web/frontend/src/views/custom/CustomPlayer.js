import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import goalmodelinginfo from "_texts/goalmodelinginfo.js";
import worldmodelinginfo from "_texts/worldmodelinginfo.js";

// components
import GoalModeling from "./GoalModeling";
import CustomHeader from "../../components/Crome/CustomHeader";
import customheadercards from "../../_texts/customheadercards";
import CustomFooter from "../../components/Custom/CustomFooter";
import customfooter from "../../_texts/customfooter";
import WorldModeling from "./WorldModeling";
import Analysis from "./Analysis";
import Simulation from "./Simulation";
import CustomNavButton from "../../components/Custom/CustomNavButton";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

export default function CustomPlayer({
  world,
  items,
  defaultOpened,
  id,
  setWorld,
  setListOfWorldNames,
}) {
  const [open, setOpen] = React.useState(defaultOpened);
  const [oldInTransition, setOldInTransition] = React.useState(false);
  const [newInTransition, setNewInTransition] = React.useState(false);
  const [project, setProject] = React.useState(null);
  const [goals, setGoals] = React.useState(null);
  const [patterns, setPatterns] = React.useState(null);
  const [projectAdded, setProjectAdded] = React.useState(false);
  const [changingPage, setChangingPage] = React.useState(false);
  const [listOfWorldVariables, setListOfWorldVariables] = React.useState(null);
  const [triggerGoals, setTriggerGoals] = React.useState(false);
  const [triggerGoalsChecked, settriggerGoalsChecked] = React.useState(false);

  const [headerStates, setHeaderStates] = React.useState([true, false, false, false]);

  function addProjectFromGoalModeling(projectId) {
    setProject(projectId);
    setProjectAdded(!projectAdded);
  }

  function toggleGetTrigger() {
    setTriggerGoals(!triggerGoals);
  }

  function swapTriggerGoalsChecked(bool) {
    settriggerGoalsChecked(bool);
  }

  function settingGoals(goals) {
    setGoals(goals);
  }

  const toggleNew = (e, newOpen, disabled) => {
    if (disabled) return;
    //goal modeling to analysis
    if (open === 1 && newOpen === 2) {
      //check if there are goals
      swapTriggerGoalsChecked(true);
    }
    if (
      (newOpen !== 1 || project !== 0) &&
      (open !== 0 || newOpen !== 3) &&
      (open !== 3 || newOpen !== 0) &&
      !changingPage
    ) {
      setChangingPage(true);

      for (let i = 0; i < headerStates.length; i++) {
        headerStates[i] = false;
      }
      headerStates[newOpen] = true;
      setHeaderStates(headerStates);

      e.preventDefault();
      if (!newInTransition && !oldInTransition) {
        setOldInTransition(true);
        setTimeout(function () {
          setOpen(newOpen);
        }, 500);
        setTimeout(function () {
          setOldInTransition(false);
          setNewInTransition(true);
        }, 600);
        setTimeout(function () {
          setNewInTransition(false);
          setChangingPage(false);
        }, 1100);
      }
    }
  };

  return (
    <>
      <CustomHeader {...customheadercards} states={headerStates} />
      <div className="flex justify-evenly relative top--30 pt-4">
        <div>
          <CustomNavButton
            open={open}
            toggleNew={toggleNew}
            itemsLength={items.length}
            type={"back"}
            href="#/crome"
          />
        </div>
        <Tooltip
          title="Select an Environment to continue"
          position="bottom"
          arrow="true"
        >
          <div>
            <CustomNavButton
              open={open}
              toggleNew={toggleNew}
              itemsLength={items.length}
              type={"continue"}
              noProject={project === 0}
              href="#/crome"
            />
          </div>
        </Tooltip>
      </div>
      <div className="px-4 md:px-6 mx-auto w-full -mt-24">
        <div className="mt-5 relative pb-32">
          <div className="relative w-full overflow-hidden">
            <div>
              {items.map((prop, key) => {
                return (
                  <div
                    className={classnames(
                      "p-6 transform duration-300 transition-all ease-in-out mx-auto",
                      {
                        hidden: key !== open,
                        block: key === open,
                        "opacity-0 scale-95": key === open && oldInTransition,
                        "opacity-100 scale-100": key === open && newInTransition,
                      }
                    )}
                    key={key}
                  >
                    <div className="container mx-auto px-4">
                      {
                        {
                          world: (
                            <WorldModeling
                              id={id}
                              setListOfWorldNames={setListOfWorldNames}
                              setListOfWorldVariables={setListOfWorldVariables}
                              projectAdded={projectAdded}
                              project={project}
                              setProject={setProject}
                              setWorld={setWorld}
                              {...worldmodelinginfo}
                            />
                          ),
                          goal: (
                            <GoalModeling
                              id={id}
                              {...goalmodelinginfo}
                              project={project}
                              setGoals={settingGoals}
                              setPatterns={setPatterns}
                              triggerGetGoals={triggerGoals}
                              toggleGetTrigger={toggleGetTrigger}
                              listOfWorldVariables={listOfWorldVariables}
                              setProject={(project) =>
                                addProjectFromGoalModeling(project)
                              }
                              triggerGoalsChecked={triggerGoalsChecked}
                              swapTriggerGoalsChecked={swapTriggerGoalsChecked}
                              contracts={false}
                            />
                          ),
                          analysis: (
                            <Analysis
                              id={id}
                              key={project}
                              active={headerStates[2]}
                              project={project}
                              goals={goals}
                              toggleGoalsTrigger={toggleGetTrigger}
                              patterns={patterns}
                            />
                          ),
                          simulation: (
                            <Simulation
                                world={world}
                                active={headerStates[3]}
                                project={project}
                            />
                          ),
                        }[prop.component]
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <CustomFooter {...customfooter} />
      </div>
    </>
  );
}

CustomPlayer.defaultProps = {
  defaultOpened: 0,
  items: [],
};

CustomPlayer.propTypes = {
  // 0 represents the first element
  // also, you should note that
  // the number should not be lower then 0
  // or higher than the number of items - 1
  defaultOpened: PropTypes.number,
  // an array of string representing valid image sources
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      // props to pass to the Button element
      // NOTE: the color is default set by the color prop
      button: PropTypes.object,
      color: PropTypes.oneOf([
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
    })
  ),
};
