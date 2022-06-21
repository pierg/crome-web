import os
import json
from os import walk

from backend.shared.paths import component_path


class Component:

    @staticmethod
    def get_components(session_id) -> list:
        list_components = []
        # We get components of the current session
        component_folder = component_path(session_id)

        if os.path.isdir(component_folder):
            _, _, filenames = next(walk(component_folder))
            for filename in filenames:
                with open(component_folder / filename) as json_file:
                    json_obj = json.load(json_file)
                    list_components.append(json_obj)

        return list_components

    @staticmethod
    def save_component(data, session_id):
        component_folder = component_path(session_id)

        if "id" not in data["component"]:
            dir_path, dir_names, filenames = next(os.walk(component_folder))
            greatest_id = -1 if len(filenames) == 0 else int(max(filenames)[0:4])
            greatest_id += 1
            data["component"]["id"] = (
                    session_id + "-" + str(greatest_id).zfill(4)
            )
            filename = "component_" + str(greatest_id).zfill(4) + ".json"
            data["component"]["filename"] = filename
        json_file = open(os.path.join(component_folder, data["component"]["filename"]), "w")
        json_formatted = json.dumps(data["component"], indent=4, sort_keys=True)
        json_file.write(json_formatted)
        json_file.close()

    @staticmethod
    def delete_component(name, session_id):
        component_folder = component_path(session_id)

        _, _, filenames = next(walk(component_folder))
        for filename in filenames:
            if len(filename.split(".")) == 2 and filename.split(".")[-1] == "dat":
                continue
            os.remove(component_folder / filename)