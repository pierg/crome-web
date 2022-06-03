import os
from os import walk
from pathlib import Path

from backend.shared.paths import controller_path
from crome_synthesis.controller import ControllerInfo, _check_header, Controller
from crome_synthesis.pcontrollers import PControllers


class Synthesis:

    @staticmethod
    def get_synthesis(controller_folder) -> list[dict[str, str | list[str]]]:
        dir_path, dir_names, filenames = next(walk(controller_folder))
        print(f"dir_path is {dir_path}")
        print(f"And dir_names is {dir_names}")
        list_examples = []
        for filename in filenames:
            info = ControllerInfo.from_file(controller_folder / filename)
            name = ""
            with open(controller_folder / filename, 'r') as ifile:
                name_found = False
                for line in ifile:
                    if name_found:
                        name = line.strip()
                        break
                    line, header = _check_header(line)

                    if not line:
                        continue

                    elif header:
                        if line == "**NAME**":
                            name_found = True
            data = {"id": name, "assumptions": info.a, "guarantees": info.g, "inputs": info.i,
                    "outputs": info.o}
            list_examples.append(data)
        return list_examples

    @staticmethod
    def create_txt_file(data, session_id) -> None:
        controller_folder = controller_path(session_id)

        if not os.path.exists(controller_folder):
            os.makedirs(controller_folder)
        dir_path, dir_names, filenames = next(walk(controller_folder))

        greatest_id = int(len(filenames)) + 1

        with open(os.path.join(controller_folder, f"{str(greatest_id).zfill(4)}.txt"), "w") as file:
            if "name" in data:
                file.write("**NAME**\n\n")
                file.write(f"{data['name']}\n\n")

            file.write("**ASSUMPTIONS**\n\n")
            for assumption in data["assumptions"]:
                file.write(f"{assumption}\n")

            file.write("\n**GUARANTEES**\n\n")
            for guarantee in data["guarantees"]:
                file.write(f"{guarantee}\n")

            file.write("\n**INPUTS**\n\n")
            for i in range(len(data["inputs"])):
                controller_input = data["inputs"][i]
                if i == len(data["inputs"]) - 1:
                    file.write(f"{controller_input}")
                else:
                    file.write(f"{controller_input}, ")
            file.write("\n")

            file.write("\n**OUTPUTS**\n\n")
            for i in range(len(data["outputs"])):
                controller_output = data["outputs"][i]
                if i == len(data["outputs"]) - 1:
                    file.write(f"{controller_output}")
                else:
                    file.write(f"{controller_output}, ")
            file.write("\n")

            file.write("\n**END**")

    @staticmethod
    def create_from_strix(data):
        session, index = data["file"].split("_")

        current_controller_folder = controller_path(session)
        dir_path, dir_names, filenames = next(os.walk(current_controller_folder))
        i = 0
        controller_file = None
        for controller_file in filenames:
            if i == index:
                controller_file = Path(os.path.join(current_controller_folder, controller_file))
                break
            i += 1
        if not controller_file:
            return  # Make it return an error because the index is wrong
        controller = Controller.from_file(file_path=controller_file)
        return controller.mealy.export_to_json()

    @staticmethod
    def create_from_crome(data):
        session, index = data["file"].split("_")

        current_controller_folder = controller_path(session)
        dir_path, dir_names, filenames = next(os.walk(current_controller_folder))
        i = 0
        controller_file = None
        for controller_file in filenames:
            if i == index:
                controller_file = Path(os.path.join(current_controller_folder, controller_file))
                break
            i += 1
        if not controller_file:
            return  # Make it return an error because the index is wrong
        pcontrollers = PControllers.from_file(file_path=controller_file)

        json_content = []
        for controller in pcontrollers.controllers:
            json_content.append(controller.mealy.export_to_json())
        return json_content




