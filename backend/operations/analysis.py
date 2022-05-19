import json
import os.path
from os import walk
from typing import Set

from crome_cgg.goal.operations.composition import g_composition
from crome_cgg.goal.operations.conjunction import g_conjunction

from backend.tools.persistence import dump_goals, load_goals


class Analysis:
    @staticmethod
    def composition(project_folder: str, set_of_goals_id: Set[str]):

        set_of_goals = load_goals(project_folder)

        goals_dir = os.path.join(project_folder, "goals")
        dir_path, dir_names, filenames = next(walk(goals_dir))
        greatest_id = -1 if len(filenames) == 0 else int(max(filenames)[0:4])
        greatest_id += 1

        goals_to_compose = set()
        for goal in set_of_goals:
            if goal.id in set_of_goals_id:
                goals_to_compose.add(goal)

        new_goal = g_composition(goals_to_compose)
        print(f"The id of the goal is {new_goal.id}")
        set_of_goals.add(new_goal)
        dump_goals(set_of_goals, project_folder)

        # We export now the new goals into the project_folder.
        json_content = {"contract": {}}
        names_context = new_goal.context.formula.replace(' ', '').split('&')
        json_content["context"] = names_context

        # We put the contracts with their LTL value only.
        contract = new_goal.contract
        json_assumptions = contract.assumptions.export_to_json()
        json_guarantees = contract.guarantees.export_to_json()

        json_content["contract"]["assumptions"] = [json_assumptions]
        json_content["contract"]["guarantees"] = [json_guarantees]

        # Get the information of the new goal :
        json_content["id"] = new_goal.id
        json_content["description"] = new_goal.description
        json_content["filename"] = str(greatest_id).zfill(4)
        goals_ids = ", ".join(g.id for g in goals_to_compose)
        name = f"{new_goal.id} -- composition of -- {goals_ids}"
        json_content["name"] = name

        # Finally write the content into the new json file
        json_file = open(os.path.join(goals_dir, f"{json_content['filename']}.json"), "w")
        json_formatted = json.dumps(json_content, indent=4, sort_keys=True)
        json_file.write(json_formatted)
        json_file.close()

    @staticmethod
    def conjunction(project_folder: str, set_of_goals_id: Set[str]):

        set_of_goals = load_goals(project_folder)

        goals_to_compose = set()
        for goal in set_of_goals:
            if goal.id in set_of_goals_id:
                goals_to_compose.add(goal)

        new_goal = g_conjunction(goals_to_compose)

        set_of_goals.add(new_goal)
        dump_goals(set_of_goals, project_folder)

    @staticmethod
    def refinement(project_folder: str, abstract_goal_id: str, refined_goal_id: str):
        # TODO: add Cgg reference and create a refinement there

        set_of_goals = load_goals(project_folder)

        abstract_goal = None
        refined_goal = None
        for goal in set_of_goals:
            if goal.id == abstract_goal_id:
                abstract_goal = goal
            if goal.id == refined_goal_id:
                refined_goal = goal

        if abstract_goal is not None:
            abstract_goal.refine_by(refined_goal)

        dump_goals(set_of_goals, project_folder)
