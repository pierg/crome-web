import os
from os import walk

from backend.shared.paths import controller_path
from crome_synthesis.controller import ControllerInfo, _check_header


class Synthesis:

    @staticmethod
    def get_synthesis(controller_folder) -> list[dict[str, str | list[str]]]:
        dir_path, dir_names, filenames = next(walk(controller_folder))
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

        greatest_id = (-1 if len(filenames) == 0 else int(len(filenames))) + 1
        print(filenames)

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
