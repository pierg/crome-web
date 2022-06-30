
from backend.shared.objects import arrayRunFile, getter_line, setter_line


class Simulation:

    @staticmethod
    def get_input_possible(session_id, project_id):
        return ["person", ""]


    @staticmethod
    def react_to_inputs(session_id, choice, project_id):
        result = arrayRunFile[getter_line()]
        setter_line(getter_line() + 1)
        return result

    @staticmethod
    def random_simulation(session_id, nb_iteration, project_id):
        beforeLine = getter_line()
        lineToSend = min(getter_line() + nb_iteration, len(arrayRunFile))
        setter_line(lineToSend)
        return [arrayRunFile[i] for i in range(beforeLine, lineToSend)]

    @staticmethod
    def reset_simulation(session_id, project_id):
        setter_line(0)
        return

