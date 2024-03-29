import base64
import json
import os
import shutil
from os import walk
from pathlib import Path
from typing import Dict, List

from backend.operations.modelling import Modelling
from backend.shared.paths import goals_path, project_path, session_path, storage_path


class ProjectUtility:
    """Class that contains all the useful method create, suppress, and retrieve
    the project of a session."""

    @staticmethod
    def get_projects(session_id: str) -> List[List[Dict[str, str]]]:
        """It retrieves the project information of a session. It includes also
        the project of the default session.

        Arguments:
            session_id: The id of the session where the projects are.

        Returns:
            A list containing all the information about the project, it includes the image of the gridworld
            and the gridworld.
        """
        # array that will be sent containing all projects #$
        list_of_projects: List[List[Dict[str, str]]] = []
        list_of_sessions: List[str] = [f"default", session_id]

        for session in list_of_sessions:
            session_folder = session_path(session)

            if os.path.isdir(session_folder):  # if there is a folder for this session #
                dir_path, dir_names, filenames = next(walk(session_folder))
                for subdir in dir_names:
                    if subdir in [
                        "p_composition",
                        "p_conjunction",
                        "p_merging",
                        "p_quotient",
                        "p_refinement",
                        "p_separation",
                    ]:
                        continue
                    project_folder: Path = Path(os.path.join(dir_path, subdir))
                    folder_path, project_directories, project_files = next(walk(project_folder))
                    default_project: List[Dict[str, str]] = []
                    for file in project_files:
                        if os.path.splitext(file)[1] == ".json":
                            with open(Path(os.path.join(folder_path, file))) as json_file:
                                json_obj = json.load(json_file)
                                json_str = json.dumps(json_obj)
                                default_project.append(
                                    {
                                        "title": os.path.splitext(file)[0],
                                        "content": json_str,
                                    }
                                )
                        if os.path.splitext(file)[1] == ".png":
                            with open(Path(os.path.join(folder_path, file)), "rb") as png_file:
                                read_png_file = base64.b64encode(png_file.read())
                                default_project.append({"title": "image", "content": str(read_png_file)})

                    list_of_projects.append(default_project)

        return list_of_projects

    @staticmethod
    def save_project(data: Dict, session_id: str) -> None:
        """It save a new project inside the session folder. It tries also to
        create the world.dat file.

        Arguments:
            data: The information about the gridworld.
            session_id: The id of the session.
        """
        session_dir = session_path(session_id)
        if not os.path.isdir(session_dir):
            os.makedirs(session_dir)
        is_simple = data["world"]["info"]["project_id"] == "simple"
        if is_simple:
            number_of_copies = 1
            while os.path.isdir(os.path.join(storage_path, f"sessions/{session_id}/simple_{number_of_copies}")):
                number_of_copies += 1
            data["world"]["environment"]["project_id"] = f"simple_{number_of_copies}"
            data["world"]["info"]["project_id"] = f"simple_{number_of_copies}"
        project_dir = project_path(session_id, data["world"]["info"]["project_id"])
        if not os.path.isdir(project_dir):
            os.mkdir(project_dir)
        goals_dir = goals_path(session_id, data["world"]["info"]["project_id"])
        if not os.path.isdir(goals_dir):
            if is_simple:
                shutil.copytree(goals_path("default", "simple"), goals_dir)
            else:
                os.mkdir(goals_dir)
        list_of_files = ["environment", "info"]
        for filename in list_of_files:
            json_file = open(os.path.join(project_dir, filename + ".json"), "w")
            json_formatted = json.dumps(data["world"][filename], indent=4, sort_keys=True)
            json_file.write(json_formatted)
            json_file.close()

        Modelling.create_environment(project_dir)
        _, _, filenames = next(walk(goals_dir))
        for filename in filenames:
            Modelling.add_goal(project_path(session_id, data["world"]["info"]["project_id"]), filename)

    @staticmethod
    def save_image(data, session_id) -> None:
        """It save the image of the gridworld inside the project folder.

        Arguments:
            data: The raw image data and the project id.
            session_id: The id of the session where the project is.
        """
        img_data = bytes(data["image"], "utf-8")
        project_id = str(data["project"])

        current_project_image = Path(
            os.path.join(
                storage_path,
                f"s_{session_id}/p_{project_id}/environment.png",
            )
        )

        with open(current_project_image, "wb") as fh:
            fh.write(base64.decodebytes(img_data))

    @staticmethod
    def delete_project(project_id, session_id) -> bool:
        """It deletes a project from a session.

        Arguments:
            project_id: The id of the project to delete.
            session_id: The id of the session where the project is.

        Returns:
            A boolean that indicates if the project has been deleted.
        """
        current_session_folder = session_path(session_id)
        _, dir_names, _ = next(walk(current_session_folder))
        for name in dir_names:
            if name == f"p_{project_id}":
                if len(dir_names) == 1:
                    shutil.rmtree(current_session_folder)
                else:
                    dir_to_delete = Path(os.path.join(current_session_folder, name))
                    shutil.rmtree(dir_to_delete)
                return True
        return False
