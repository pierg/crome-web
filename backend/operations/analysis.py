
from typing import Set

from core.cgg import Node
from tools.persistence import Persistence


class Analysis:

    @staticmethod
    def composition(project_folder: str, set_of_goals_id: Set[str]):

        set_of_goals = Persistence.load_goals(project_folder)

        goals_to_compose = set()
        for goal in set_of_goals:
            if goal.id in set_of_goals_id:
                goals_to_compose.add(goal)

        new_goal = Node.composition(goals_to_compose,
                                    name="new_goal_name",
                                    description="new_goal_description")

        set_of_goals.add(new_goal)
        Persistence.dump_goals(set_of_goals, project_folder)
        """TODO Update the json as well"""

    @staticmethod
    def conjunction(project_folder: str, set_of_goals_id: Set[str]):

        set_of_goals = Persistence.load_goals(project_folder)

        goals_to_compose = set()
        for goal in set_of_goals:
            if goal.id in set_of_goals_id:
                goals_to_compose.add(goal)

        new_goal = Node.conjunction(goals_to_compose,
                                    name="new_goal_name",
                                    description="new_goal_description")

        set_of_goals.add(new_goal)
        Persistence.dump_goals(set_of_goals, project_folder)
        """TODO Update the json as well"""

    @staticmethod
    def disjunction(project_folder: str, set_of_goals_id: Set[str]):

        set_of_goals = Persistence.load_goals(project_folder)

        goals_to_compose = set()
        for goal in set_of_goals:
            if goal.id in set_of_goals_id:
                goals_to_compose.add(goal)

        new_goal = Node.disjunction(goals_to_compose,
                                    name="new_goal_name",
                                    description="new_goal_description")

        set_of_goals.add(new_goal)
        Persistence.dump_goals(set_of_goals, project_folder)
        """TODO Update the json as well"""

    @staticmethod
    def refinement(project_folder: str, abstract_goal_id: str, refined_goal_id: str):

        set_of_goals = Persistence.load_goals(project_folder)

        abstract_goal = None
        refined_goal = None
        for goal in set_of_goals:
            if goal.id == abstract_goal_id:
                abstract_goal = goal
            if goal.id == refined_goal_id:
                refined_goal = goal

        if abstract_goal is not None:
            abstract_goal.refine_by(refined_goal)

        Persistence.dump_goals(set_of_goals, project_folder)

