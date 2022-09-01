from src.backend.shared.objects import arrayRunFile, getter_line, setter_line


class Simulation:
    """Class that contains all the useful method to create an environment and
    the goals."""

    @staticmethod
    def get_input_possible(session_id: str, project_id: str) -> list:
        """Get all the possible inputs for the project.

        /!\\ NOT IMPLEMENTED YET /!\\

        Arguments:
            session_id: the id of the current session.
            project_id: the id of the project.

        Returns:
            A list of all the possible inputs.
        """
        return ["person", ""]

    @staticmethod
    def react_to_inputs(session_id, choice, project_id) -> list:
        """Make a project react to a particular input.

        /!\\ NOT IMPLEMENTED YET /!\\

        Arguments:
            session_id: the id of the current session.
            choice: the name of the input.
            project_id: the id of the project.

        Returns:
            A list that contains all the information about the simulation that has just been done.
        """
        result = arrayRunFile[getter_line()]
        setter_line(getter_line() + 1)
        return result

    @staticmethod
    def random_simulation(session_id, nb_iteration, project_id) -> list:
        """It simulates a controller by randomly choosing the inputs for each
        state.

        /!\\ NOT IMPLEMENTED YET /!\\

        Arguments:
            session_id: the id of the current session.
            nb_iteration: the number of simulation that must be done.
            project_id: the id of the project.

        Returns:
            A list that contains all the information about the simulation that has just been done.
        """
        beforeLine = getter_line()
        lineToSend = min(getter_line() + int(nb_iteration), len(arrayRunFile))
        setter_line(lineToSend)
        return [arrayRunFile[i] for i in range(beforeLine, lineToSend)]

    @staticmethod
    def reset_simulation(session_id, project_id) -> None:
        """Reset the current simulation to the initial state.

        /!\\ NOT IMPLEMENTED YET /!\\

        Arguments:
            session_id: the id of the current session.
            project_id: the id of the project.
        """
        setter_line(0)
        return
