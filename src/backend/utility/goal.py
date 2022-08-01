import json
import os
from pathlib import Path
from typing import Set

from crome_cgg.goal import Goal

from src.backend.operations.modelling import Modelling
from src.backend.shared.paths import goals_path, project_path
from src.backend.tools.persistence import dump_goals, load_goals


class GoalUtility:
    """Class that contains all the useful method create, suppress, and retrieve
    the goals."""

    @staticmethod
    def get_goals(project_id: str, session_id: str) -> list:
        """Method that get all the json file from a project folder.

        Arguments:
            project_id: The id of the project.
            session_id: The id of the session where the project is.

        Returns:
            A list containing all the json content of the goals that have been found.
        """

        session = "default" if project_id == "simple" else session_id

        goals_folder = goals_path(session, project_id)

        """Retrieving files"""
        list_of_goals = []
        if os.path.isdir(goals_folder):
            files_paths = []
            dir_path, dir_names, filenames = next(os.walk(goals_folder))
            for file in filenames:
                files_paths.append(Path(os.path.join(dir_path, file)))

            for path in files_paths:
                with open(path) as json_file:
                    json_obj = json.load(json_file)
                    json_str = json.dumps(json_obj)
                    list_of_goals.append(json_str)

        return list_of_goals

    @staticmethod
    def delete_goal(goal_id: str, session_id: str, project_id: str) -> None:
        """Delete a goal inside a project folder. It removes it also from the
        goals.dat if it's in there.

        Arguments:
            goal_id: The id of the goal.
            project_id: The id of the project where the goal is.
            session_id: The id of the session where the project is.
        """
        current_goals_folder = goals_path(session_id, project_id)
        dir_path, dir_names, filenames = next(os.walk(current_goals_folder))
        for goal_file in filenames:
            with open(current_goals_folder / goal_file) as json_file:
                json_content = json.load(json_file)
                if json_content["id"] == goal_id:
                    os.remove(current_goals_folder / goal_file)

        project_folder: Path = project_path(session_id, project_id)
        set_of_goals: Set[Goal] = load_goals(str(project_folder))
        if set_of_goals is not None:
            tmp: Set[Goal] = set()

            for goal in set_of_goals:
                if goal.id != goal_id:
                    tmp.add(goal)

            dump_goals(tmp, str(project_folder))

    @staticmethod
    def add_goal(data: dict, session_id: str, project_id: str) -> None:
        """Add a goal to a project. It creates the json file and try to save it
        inside the goal.dat file.

        Arguments:
            data: The goal information.
            session_id: the id of the session where the project is.
            project_id: the id of the project.
        """

        goals_dir = goals_path(session_id, project_id)

        if "id" not in data["goal"]:
            dir_path, dir_names, filenames = next(os.walk(goals_dir))
            greatest_id = -1 if len(filenames) == 0 else int(max(filenames)[0:4])
            greatest_id += 1
            data["goal"]["id"] = session_id + "-" + project_id + "-" + str(greatest_id).zfill(4)
            filename = str(greatest_id).zfill(4) + ".json"
            data["goal"]["filename"] = filename
        json_file = open(os.path.join(goals_dir, data["goal"]["filename"]), "w")
        json_formatted = json.dumps(data["goal"], indent=4, sort_keys=True)
        json_file.write(json_formatted)
        json_file.close()

        Modelling.add_goal(
            project_path(session_id, project_id),
            data["goal"]["filename"],
        )
