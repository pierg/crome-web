import json
import os
from pathlib import Path

import crome_cgg.goal as crome_cgg_goal
import crome_cgg.world as crome_cgg_world
from crome_cgg.context import Context
from crome_contracts.contract import Contract
from crome_logic.patterns.robotic_movement import *
from crome_logic.patterns.robotic_triggers import *
from crome_logic.specification.temporal import LTL

from crome_logic.typeset import Typeset

from backend.tools.persistence import dump_goals, dump_world, load_goals, load_world


class Modelling:
    @staticmethod
    def create_environment(project_folder):

        with open(Path(os.path.join(project_folder, "environment.json"))) as json_file:
            json_obj = json.load(json_file)

        w = crome_cgg_world.World(project_name=json_obj["project_id"])
        for action in json_obj["actions"]:
            if "mutex_group" in action:
                w.new_boolean_action(
                    action["name"],
                    mutex=action["mutex_group"][0],
                )
            else:
                w.new_boolean_action(action["name"])
        for sensor in json_obj["sensors"]:
            if "mutex_group" in sensor:
                w.new_boolean_sensor(
                    sensor["name"],
                    mutex=sensor["mutex_group"][0],
                )
            else:
                w.new_boolean_sensor(sensor["name"])
        for context in json_obj["context"]:
            if "mutex_group" in context:
                w.new_boolean_context(
                    context["name"],
                    mutex=context["mutex_group"][0],
                )
            else:
                w.new_boolean_context(context["name"])
        for location in json_obj["grid"]["locations"]:
            w.new_boolean_location(
                location["id"],
                mutex="locations",
                adjacency=location["adjacency"],
            )

        # TODO FIX FOR PIER
        #  mutex_group has to be an array, that's why there is a [0] on each mutex
        #  todo : change mutex to be arrays

        dump_world(w, project_folder)

    @staticmethod
    def add_goal_updated(project_folder):
        """Load existing list of goals objects and world."""
        set_of_goals = load_goals(project_folder)
        w = load_world(project_folder)

        """Create a new goal"""

        """Assumptions (if inserted by the designer"""
        a1 = LTL(_init_formula="G(F(r1 & r2))", _typeset=Typeset({w["r1"], w["r1"]}))
        a2 = LTL(
            _init_formula=Patrolling(locations=[w["r1"], w["r2"]]).__str__(),
            _typeset=Typeset({w["r1"], w["r2"]}),
        )
        # TODO: Fix the rest like above
        """Guarantees"""
        g1 = LTL(
            _init_formula="G(F(r3 & r4))",
            _typeset=Typeset({w["r3"], w["r4"]}),
        )
        g2 = LTL(
            _init_formula=StrictOrderedPatrolling(locations=[w["r1"], w["r2"]]).__str__(),
            _typeset=Typeset({w["r1"], w["r2"]}),
        )
        # g3 = InstantaneousReaction() // need to import every patterns method ?

        """Context"""
        context = w["day"]

        contract = Contract(
            _assumptions=a1 & a2,
            _guarantees=g1 & g2,
        )

        """Instanciate the goal"""

        new_goal = crome_cgg_goal.Goal(
            id="Day patrolling",
            description="description",
            contract=contract,
            context=context,
            world=w,
        )

        set_of_goals.add(new_goal)

        dump_goals(set_of_goals, project_folder)

    @staticmethod
    def add_goal(project_folder, goal_file, goal_id):
        set_of_goals = load_goals(project_folder)

        w = load_world(project_folder)

        goal_path = Path(os.path.join(project_folder, f"goals/{goal_file}"))
        json_obj = None
        with open(goal_path) as json_file:
            json_obj = json.load(json_file)
        contract_names = ["assumptions", "guarantees"]
        contract_lists = [[], []]  # type: list[list[LTL]]
        for i in range(len(contract_lists)):
            for contract_element in json_obj["contract"][contract_names[i]]:
                if "pattern" in contract_element:
                    args = contract_element["pattern"]["arguments"]
                    if len(args) == 1:
                        if type(args[0]["value"]) == list:
                            list_of_locations = []
                            typeset_location = set()
                            for location in args[0]["value"]:
                                list_of_locations.append(location)
                                typeset_location.add(w.typeset[location])
                            contract_lists[i].append(
                                LTL(
                                    _init_formula=globals()[
                                        contract_element["pattern"]["name"]
                                    ](locations=list_of_locations).__str__(),
                                    _typeset=Typeset(typeset_location),
                                )
                            )
                        else:
                            contract_lists[i].append(
                                LTL(
                                    _init_formula=globals()[
                                        contract_element["pattern"]["name"]
                                    ](locations=[w[args[0]["value"]]]).__str__(),
                                    _typeset=Typeset(
                                        {w.typeset[args[0]["value"]]}
                                    ),
                                )
                            )
                    elif len(args) == 2:
                        contract_lists[i].append(
                            LTL(
                                _init_formula=globals()[
                                    contract_element["pattern"]["name"]
                                ](
                                    pre=w[args[0]["value"]],
                                    post=w[args[1]["value"]],
                                ).__str__(),
                                _typeset=Typeset(
                                    {
                                        w.typeset[args[0]["value"]],
                                        w.typeset[args[1]["value"]],
                                    }
                                ),
                            )
                        )
                    else:
                        raise Exception(
                            "Unknown Pattern, the patterns included only have 1 or 2 arguments",
                        )
                elif "ltl_value" in contract_element:
                    if "world_values" in contract_element:
                        values = set()
                        for array in contract_element["world_values"]:
                            for value in array:
                                values.add(w.typeset[value])
                        contract_lists[i].append(
                            LTL(
                                _init_formula=contract_element["ltl_value"],
                                _typeset=Typeset(values),
                            ),
                        )

        context = Context(_init_formula="TRUE")
        if len(json_obj["context"]) == 1:
            context = w[json_obj["context"][0]]
        elif len(json_obj["context"]) > 1:
            for cont in json_obj["context"]:
                context &= w[cont]

        lists_with_and_operators: list[LTL] = []
        for i in range(len(contract_lists)):
            if not contract_lists[i]:
                lists_with_and_operators.append(LTL("true"))
                continue
            lists_with_and_operators.append(contract_lists[i][0])
            for j in range(1, len(contract_lists[i])):
                lists_with_and_operators[i] = (
                    lists_with_and_operators[i] & contract_lists[i][j]
                )
        # We update the json file with the new value of the LTL.

        for i in range(len(contract_lists)):
            for j in range(len(contract_lists[i])):
                json_content = contract_lists[i][j].export_to_json()
                json_obj["contract"][contract_names[i]][j]["ltl_value"] = json_content["ltl_value"]
                json_obj["contract"][contract_names[i]][j]["world_values"] = json_content["world_values"]

        # Rewrite the goal inside the json
        json_file = open(goal_path, "w")
        json_formatted = json.dumps(json_obj, indent=4, sort_keys=True)
        json_file.write(json_formatted)
        json_file.close()

        contract = Contract(
            _assumptions=lists_with_and_operators[0],
            _guarantees=lists_with_and_operators[1],
        )

        new_goal = crome_cgg_goal.Goal(
            description=json_obj["description"],
            id=goal_id,
            context=context,
            world=w,
            contract=contract,
        )

        # We have to remove the former goals if it is an update
        if not set_of_goals:
            set_of_goals = set()
            set_of_goals.add(new_goal)
        else:
            new_set_of_goals: set[crome_cgg_goal.Goal] = {new_goal}
            for goal in set_of_goals:
                if goal.id != goal_id:
                    new_set_of_goals.add(goal)
            set_of_goals = new_set_of_goals
        dump_goals(set_of_goals, project_folder)
