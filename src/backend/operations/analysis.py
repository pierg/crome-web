import json
import os.path
from os import walk
from typing import Set

from crome_cgg.src.crome_cgg.goal.operations.composition import g_composition
from crome_cgg.src.crome_cgg.goal.operations.conjunction import g_conjunction
from crome_cgg.src.crome_cgg.goal.operations.merging import g_merging
from crome_cgg.src.crome_cgg.goal.operations.quotient import g_quotient
from crome_cgg.src.crome_cgg.goal.operations.refinement import g_refinement
from crome_cgg.src.crome_cgg.goal.operations.separation import g_separation
from src.backend.tools.persistence import dump_cgg, dump_goals, load_cgg, load_goals


class Analysis:
    """Class that contains all the useful method to apply the different
    operation on the goals."""

    @staticmethod
    def conjunction(project_folder: str, set_of_goals_id: Set[str]) -> None:
        """Create a new goal which is the conjunction of the other goals given
        as parameters. It then saves it in the project folder by modifying the
        cgg if it exists.

        Arguments:
            project_folder: The folder containing the goals and the cgg if it exists.
            set_of_goals_id: A set of goal ids that will be used.
        """
        set_of_goals = load_goals(project_folder)
        cgg = load_cgg(project_folder)

        goals_dir = os.path.join(project_folder, "goals")
        dir_path, dir_names, filenames = next(walk(goals_dir))
        greatest_id = -1 if len(filenames) == 0 else int(max(filenames)[0:4])
        greatest_id += 1

        goals_to_compose = set()
        for goal in set_of_goals:
            if goal.id in set_of_goals_id:
                goals_to_compose.add(goal)

        new_goal = g_conjunction(goals_to_compose, cgg)

        set_of_goals.add(new_goal)
        dump_goals(set_of_goals, project_folder)
        dump_cgg(cgg, project_folder)

        # We export now the new goals into the project_folder.
        json_content = new_goal.export_to_json()

        # We add the last value into the json
        json_content["filename"] = str(greatest_id).zfill(4)
        name = f"CONTRACTS-CONJUNCTION-{json_content['filename']}"
        json_content["name"] = name

        # Write the content into the new json file
        json_file = open(os.path.join(goals_dir, f"{json_content['filename']}.json"), "w")
        json_formatted = json.dumps(json_content, indent=4, sort_keys=True)
        json_file.write(json_formatted)
        json_file.close()

    @staticmethod
    def composition(project_folder: str, set_of_goals_id: Set[str]) -> None:
        """Create a new goal which is the composition of the other goals given
        as parameters. It then saves it in the project folder by modifying the
        cgg if it exists.

        Arguments:
            project_folder: The folder containing the goals and the cgg if it exists.
            set_of_goals_id: A set of goal ids that will be used.
        """
        set_of_goals = load_goals(project_folder)
        cgg = load_cgg(project_folder)

        goals_dir = os.path.join(project_folder, "goals")
        dir_path, dir_names, filenames = next(walk(goals_dir))
        greatest_id = -1 if len(filenames) == 0 else int(max(filenames)[0:4])
        greatest_id += 1

        goals_to_compose = set()
        for goal in set_of_goals:
            if goal.id in set_of_goals_id:
                goals_to_compose.add(goal)

        new_goal = g_composition(goals_to_compose, cgg)
        set_of_goals.add(new_goal)
        dump_goals(set_of_goals, project_folder)
        dump_cgg(cgg, project_folder)

        # We export now the new goals into the project_folder.
        json_content = new_goal.export_to_json()

        # We add the last value into the json
        json_content["filename"] = str(greatest_id).zfill(4)
        name = f"CONTRACTS-COMPOSITION-{json_content['filename']}"
        json_content["name"] = name

        # Write the content into the new json file
        json_file = open(os.path.join(goals_dir, f"{json_content['filename']}.json"), "w")
        json_formatted = json.dumps(json_content, indent=4, sort_keys=True)
        json_file.write(json_formatted)
        json_file.close()

    @staticmethod
    def refinement(project_folder: str, abstract_goal_id: str, refined_goal_id: str) -> None:
        """Refine a goal using another goal. It modifies the cgg if it exists.

        Arguments:
            project_folder: The folder containing the goals and the cgg if it exists.
            abstract_goal_id: The id of the abstract goal
            refined_goal_id: The id of the refined goal
        """
        set_of_goals = load_goals(project_folder)
        cgg = load_cgg(project_folder)
        abstract_goal = None
        refined_goal = None
        for goal in set_of_goals:
            if goal.id == abstract_goal_id:
                abstract_goal = goal
            if goal.id == refined_goal_id:
                refined_goal = goal

        g_refinement(abstract_goal, refined_goal, cgg)

        dump_cgg(cgg)

    @staticmethod
    def quotient(project_folder: str, goal_dividend_id: str, goal_divisor_id: str) -> None:
        """Create a new goal that is the quotient of two goals. It then saves
        it in the project folder by modifying the cgg if it exists.

        Arguments:
            project_folder: The folder containing the goals and the cgg if it exists.
            goal_dividend_id: The id of the dividend goal
            goal_divisor_id: The id of the divisor goal
        """
        set_of_goals = load_goals(project_folder)
        cgg = load_cgg(project_folder)
        goal_divisor = None
        goal_dividend = None

        for goal in set_of_goals:
            if goal_divisor_id == goal.id:
                goal_divisor = goal
            if goal_dividend_id == goal.id:
                goal_dividend = goal

        new_goal = g_quotient(goal_dividend, goal_divisor, cgg)

        set_of_goals.add(new_goal)
        dump_goals(set_of_goals, project_folder)
        dump_cgg(cgg, project_folder)

    @staticmethod
    def merging(project_folder: str, set_of_goals_id: Set[str]) -> None:
        """Create a new goal which is the union of the other goals given as
        parameters. It then saves it in the project folder by modifying the cgg
        if it exists.

        Arguments:
            project_folder: The folder containing the goals and the cgg if it exists.
            set_of_goals_id: A set of goal ids that will be used.
        """
        set_of_goals = load_goals(project_folder)
        cgg = load_cgg(project_folder)

        goal_to_merge = set()
        for goal in set_of_goals:
            if goal.id in set_of_goals_id:
                goal_to_merge.add(goal)

        new_goal = g_merging(goal_to_merge, cgg)

        set_of_goals.add(new_goal)

        dump_goals(set_of_goals, project_folder)
        dump_cgg(cgg, project_folder)

    @staticmethod
    def separation(project_folder: str, goal_dividend_id: str, goal_divisor_id: str) -> None:
        """Create a new goal which is the separation of two goals. It then
        saves it in the project folder by modifying the cgg if it exists.

        Arguments:
            project_folder: The folder containing the goals and the cgg if it exists.
            goal_dividend_id: The id of the dividend goal
            goal_divisor_id: The id of the divisor goal
        """
        set_of_goals = load_goals(project_folder)
        cgg = load_cgg(project_folder)

        goal_divisor = None
        goal_dividend = None

        for goal in set_of_goals:
            if goal_divisor_id == goal.id:
                goal_divisor = goal
            if goal_dividend_id == goal.id:
                goal_dividend = goal

        new_goal = g_separation(goal_dividend, goal_divisor, cgg)

        set_of_goals.add(new_goal)

        dump_goals(set_of_goals, project_folder)
        dump_cgg(cgg, project_folder)
