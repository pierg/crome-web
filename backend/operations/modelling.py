import json
import os
from pathlib import Path

import crome_cgg.goal as crome_cgg_goal
import crome_cgg.world as crome_cgg_world
from crome_contracts.contract import Contract
from crome_logic.patterns.robotic_movement import Patrolling, StrictOrderedPatrolling
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
        a1 = LTL(formula="G(F(r1 & r2))", typeset=Typeset({w["r1"], w["r1"]}))
        a2 = LTL(
            formula=Patrolling(locations=[w["r1"], w["r2"]]),
            typeset=Typeset({w["r1"], w["r2"]}),
        )
        # TODO: Fix the rest like above
        """Guarantees"""
        g1 = LTL(
            formula="G(F(r3 & r4))",
            typeset=Typeset({w["r3"], w["r4"]}),
        )
        g2 = LTL(
            formula=StrictOrderedPatrolling(locations=[w["r1"], w["r2"]]),
            typeset=Typeset({w["r1"], w["r2"]}),
        )
        # g3 = InstantaneousReaction() // need to import every patterns method ?

        """Context"""
        context = w["day"]

        contract = Contract(
            assumptions=a1 & a2,
            guarantees=g1 & g2,
        )

        """Instanciate the goal"""

        new_goal = crome_cgg_goal.Goal(
            name="Day patrolling",
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
        with open(goal_path) as json_file:
            json_obj = json.load(json_file)
            contract_names = ["assumptions", "guarantees"]
            contract_lists = [[], []]  # type: list[list[LTL]]
            for i in range(len(contract_lists)):
                for contract_element in json_obj["contract"][contract_names[i]]:
                    if "patterns" in contract_element:
                        args = contract_element["patterns"]["arguments"]
                        if len(args) == 1:
                            if type(args[0]["value"]) == list:
                                list_of_locations = []
                                for location in args[0]["value"]:
                                    list_of_locations.append(w[location])
                                contract_lists[i].append(
                                    globals()[contract_element["patterns"]["name"]](
                                        list_of_locations,
                                    ),
                                )
                            else:
                                contract_lists[i].append(
                                    globals()[contract_element["patterns"]["name"]](
                                        [w[args[0]["value"]]],
                                    ),
                                )
                        elif len(args) == 2:
                            contract_lists[i].append(
                                globals()[contract_element["patterns"]["name"]](
                                    w[args[0]["value"]],
                                    w[args[1]["value"]],
                                ),
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
                                    values.add(w[value])
                            contract_lists[i].append(
                                LTL(
                                    formula=contract_element["ltl_value"],
                                    typeset=Typeset(values),
                                ),
                            )
                            # TODO FIX FOR PIER
                            #  In case the designer enters a LTL (not a Pattern), I have the error saying that
                            #  Atom must have an attribute 'name' but I don't see how to add it here

            # TODO FIX
            #  context is an array?

            context = None
            if len(json_obj["context"]) == 1:
                context = w[json_obj["context"][0]]
            elif len(json_obj["context"]) > 1:
                context = w[json_obj["context"]]

            lists_with_and_operators: list[LTL] = []
            for i in range(len(contract_lists)):
                lists_with_and_operators.append(contract_lists[i][0])
                for j in range(1, len(contract_lists[i])):
                    lists_with_and_operators[i] = (
                        lists_with_and_operators[i] & contract_lists[i][j]
                    )

            contract = Contract(
                assumptions=lists_with_and_operators[0],
                guarantees=lists_with_and_operators[1],
            )

            # TODO Fix goal ID and name, do we need both?
            new_goal = crome_cgg_goal.Goal(
                description=json_obj["description"],
                id=goal_id,
                context=context,
                world=w,
            )

            set_of_goals.add(new_goal)

            dump_goals(set_of_goals, project_folder)
