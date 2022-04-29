from typing import Set

from crome_cgg.goal.operations.composition import g_composition
from crome_cgg.goal.operations.conjunction import g_conjunction

from backend.tools.persistence import dump_goals, load_goals


class Analysis:
    @staticmethod
    def composition(project_folder: str, set_of_goals_id: Set[str]):

        set_of_goals = load_goals(project_folder)

        goals_to_compose = set()
        for goal in set_of_goals:
            if goal.id in set_of_goals_id:
                goals_to_compose.add(goal)

        new_goal = g_composition(goals_to_compose)

        set_of_goals.add(new_goal)
        dump_goals(set_of_goals, project_folder)
        """TODO Update the json as well"""

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
        """TODO Update the json as well"""

    @staticmethod
    def refinement(project_folder: str, abstract_goal_id: str, refined_goal_id: str):
        # TODO: add Cgg reference and create a refienemtn there

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
