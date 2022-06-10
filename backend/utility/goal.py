import json
import os
from pathlib import Path

from backend.shared.paths import goals_path, project_path
from backend.tools.persistence import dump_goals, load_goals
from crome_cgg.goal import Goal


class GoalUtility:

    @staticmethod
    def get_goals(project_id, session_id) -> list:

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
    def delete_goal(data, session_id, project_id) -> None:
        current_goals_folder = goals_path(session_id, project_id)
        dir_path, dir_names, filenames = next(os.walk(current_goals_folder))
        i = 0
        for goal_file in filenames:
            if i == data["index"]:
                goal_to_delete = Path(os.path.join(current_goals_folder, goal_file))
                with open(goal_to_delete) as json_file:
                    json_content = json.load(json_file)
                    id_to_remove = json_content["id"]
                os.remove(goal_to_delete)
            i += 1

        project_folder: Path = project_path(session_id, project_id)
        set_of_goals: set[Goal] = load_goals(str(project_folder))
        if set_of_goals is not None:
            tmp: set[Goal] = set()

            for goal in set_of_goals:
                if goal.id != id_to_remove:
                    tmp.add(goal)

            dump_goals(tmp, str(project_folder))
